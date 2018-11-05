import { Activity, CardAction, Message, User } from 'botframework-directlinejs';
import * as React from 'react';
import { connect } from 'react-redux';
import { activityWithSuggestedActions } from './activityWithSuggestedActions';
import { classList, doCardAction, IDoCardAction } from './Chat';
import { HScroll } from './HScroll';
import { IconPack } from './Icons';
import * as konsole from './Konsole';
import {ChatActions, ChatState, sendMessage} from './Store';

export interface MessagePaneProps {
    activityWithSuggestedActions: Message;
    children: React.ReactNode;
    disabled: boolean;
    doCardAction: IDoCardAction;
    takeSuggestedAction: (message: Message) => any;
    icons: IconPack;
}

const MessagePaneView = (props: MessagePaneProps) =>
    <div className={ classList('wc-message-pane', props.activityWithSuggestedActions && 'show-actions' ) }>
        { props.children }
        <div className={ classList('wc-suggested-actions', !!props.disabled && 'disabled') }>
            <SuggestedActions { ...props }/>
        </div>
    </div>;

class SuggestedActions extends React.Component<MessagePaneProps, {}> {
    constructor(props: MessagePaneProps) {
        super(props);
    }

    actionClick(e: React.MouseEvent<HTMLButtonElement>, cardAction: CardAction) {

        // "stale" actions may be displayed (see shouldComponentUpdate), do not respond to click events if there aren't actual actions
        if (!this.props.activityWithSuggestedActions) { return; }

        this.props.takeSuggestedAction(this.props.activityWithSuggestedActions);
        this.props.doCardAction(cardAction.type, cardAction.value);
        e.stopPropagation();
    }

    shouldComponentUpdate(nextProps: MessagePaneProps) {
        // update only when there are actions. We want the old actions to remain displayed as it animates down.
        return !!nextProps.activityWithSuggestedActions;
    }

    render() {
        if (!this.props.activityWithSuggestedActions) { return null; }

        return (
            <HScroll
                prevSvgPathData={ this.props.icons.next }
                nextSvgPathData={ this.props.icons.prev }
                scrollUnit="page"
            >
                <ul>{ this.props.activityWithSuggestedActions.suggestedActions.actions.map((action, index) =>
                    <li key={ index }>
                        <button
                            disabled={ this.props.disabled }
                            onClick={ e => this.actionClick(e, action) }
                            title={ action.title }
                            type="button"
                        >
                            { action.title }
                        </button>
                    </li>
                ) }</ul>
            </HScroll>
        );
    }

}

export const MessagePane = connect(
    (state: ChatState) => ({
        // passed down to MessagePaneView
        activityWithSuggestedActions: activityWithSuggestedActions(state.history.activities),
        // only used to create helper functions below
        botConnection: state.connection.botConnection,
        user: state.connection.user,
        locale: state.format.locale,
        icons: state.format.icons
    }), {
        takeSuggestedAction: (message: Message) => ({ type: 'Take_SuggestedAction', message } as ChatActions),
        // only used to create helper functions below
        sendMessage
    }, (stateProps: any, dispatchProps: any, ownProps: any): MessagePaneProps => ({
        // from stateProps
        activityWithSuggestedActions: stateProps.activityWithSuggestedActions,
        icons: stateProps.icons,
        // from dispatchProps
        takeSuggestedAction: dispatchProps.takeSuggestedAction,
        // from ownProps
        children: ownProps.children,
        disabled: ownProps.disabled,
        // helper functions
        doCardAction: doCardAction(stateProps.botConnection, stateProps.user, stateProps.locale, dispatchProps.sendMessage)
    })
)(MessagePaneView);
