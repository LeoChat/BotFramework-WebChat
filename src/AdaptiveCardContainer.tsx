import { Action, AdaptiveCard, HostConfig, IValidationError, OpenUrlAction, SubmitAction } from 'adaptivecards';
import { IAction, IAdaptiveCard, IOpenUrlAction, IShowCardAction, ISubmitAction } from 'adaptivecards/lib/schema';
import { CardAction } from 'botframework-directlinejs/built/directLine';
import * as MarkdownIt from 'markdown-it';
import * as React from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import { AjaxRequest, AjaxResponse } from 'rxjs/observable/dom/AjaxObservable';
import * as adaptivecardsHostConfig from '../adaptivecards-hostconfig.json';
import { classList, IDoCardAction } from './Chat';
import * as konsole from './Konsole';
import {ChatState} from './Store';

export interface Props {
    className?: string;
    disabled?: boolean;
    hostConfig: HostConfig;
    card: string | null;
    jsonCard?: IAdaptiveCard;
    nativeCard?: AdaptiveCard;
    onCardAction: IDoCardAction;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    onImageLoad?: () => any;
}

export interface State {
    errors?: string[];
    sent: boolean;
}

export interface BotFrameworkCardAction extends CardAction {
    __isBotFrameworkCardAction: boolean;
}

const markdownIt = new MarkdownIt({
    breaks: true,
    html: false,
    linkify: true,
    typographer: true,
    xhtmlOut: true
});

AdaptiveCard.processMarkdown = (text: string) => {
    return markdownIt.render(text);
};

const defaultHostConfig = new HostConfig(adaptivecardsHostConfig);

function cardWithoutHttpActions(card: IAdaptiveCard) {
    if (!card.actions) {
        return card;
    }

    const nextActions: Array<IOpenUrlAction | IShowCardAction | ISubmitAction> = card.actions.reduce((nextActions, action) => {
        // Filter out HTTP action buttons
        switch (action.type) {

            case 'Action.Submit':
                break;

            case 'Action.ShowCard':
                nextActions.push({
                    ...action,
                    card: cardWithoutHttpActions(action.card)
                });

                break;

            default:
                nextActions.push(action);

                break;
        }

        return nextActions;
    }, []);

    return { ...card, nextActions };
}

class AdaptiveCardContainer extends React.Component<Props, State> {
    private divRef: React.ReactInstance;

    constructor(props: Props) {
        super(props);

        this.handleImageLoad = this.handleImageLoad.bind(this);
        this.onClick = this.onClick.bind(this);
        this.saveDiv = this.saveDiv.bind(this);
    }

    private saveDiv(divRef: React.ReactInstance) {
        this.divRef = divRef;
    }

    private onClick(e: React.MouseEvent<HTMLElement>) {
        if (this.props.disabled || !this.props.onClick) {
            return;
        }

        // do not allow form elements to trigger a parent click event
        switch ((e.target as HTMLElement).tagName) {
            case 'A':
            case 'AUDIO':
            case 'VIDEO':
            case 'BUTTON':
            case 'INPUT':
            case 'LABEL':
            case 'TEXTAREA':
            case 'SELECT':
                break;

            default:
                this.props.onClick(e);
        }
    }

    private onExecuteAction(action: Action) {
        if (this.props.disabled) {
            return;
        } else if (action instanceof OpenUrlAction) {
            // TODO: Should we let this one bubble to Chat.tsx?
            //       this.props.onCardAction('openUrl', action.url) might work
            window.open(action.url);
        } else if (action instanceof SubmitAction) {
            if (action.data !== undefined) {
                if (typeof action.data === 'object' && (action.data as BotFrameworkCardAction).__isBotFrameworkCardAction) {
                    const cardAction = (action.data as BotFrameworkCardAction);

                    this.props.onCardAction(cardAction.type, cardAction.value);
                } else {
                    this.props.onCardAction(typeof action.data === 'string' ? 'imBack' : 'postBack', action.data);
                }

                if (!this.state.sent) {
                    const ac = findDOMNode(this.divRef).parentElement;
                    ac.setAttribute('style', `height:${ac.clientHeight}px`);
                    this.setState({sent: true});
                }

            }
        }
    }

    componentDidMount() {
        this.mountAdaptiveCards();
    }

    componentDidUpdate(prevProps: Props) {
        if (
            prevProps.hostConfig !== this.props.hostConfig
            || prevProps.jsonCard !== this.props.jsonCard
            || !prevProps.disabled !== !this.props.disabled
            || prevProps.nativeCard !== this.props.nativeCard
        ) {
            this.unmountAdaptiveCards();
            this.mountAdaptiveCards();
        }
    }

    handleImageLoad() {
        // tslint:disable-next-line:no-unused-expression
        this.props.onImageLoad && this.props.onImageLoad.apply(this, arguments);
    }

    unmountAdaptiveCards() {
        const divElement = findDOMNode(this.divRef);

        [].forEach.call(divElement.children, (child: any) => divElement.removeChild(child));
    }

    mountAdaptiveCards() {

        const adaptiveCard = this.props.nativeCard || new AdaptiveCard();

        adaptiveCard.hostConfig = this.props.hostConfig || defaultHostConfig;

        let errors: IValidationError[] = [];

        if (!this.props.nativeCard && this.props.jsonCard) {
            this.props.jsonCard.version = this.props.jsonCard.version || '0.5';
            adaptiveCard.parse(cardWithoutHttpActions(this.props.jsonCard));
            errors = adaptiveCard.validate();
        }

        adaptiveCard.onExecuteAction = this.onExecuteAction.bind(this);

        this.setState({sent: false});
        if (errors.length === 0) {
            let renderedCard: HTMLElement;

            try {
                renderedCard = adaptiveCard.render();
            } catch (e) {
                const ve: IValidationError = {
                    error: -1,
                    message: e
                };

                errors.push(ve);

                if (e.stack) {
                    ve.message += '\n' + e.stack;
                }
            }

            if (renderedCard) {
                if (this.props.disabled) {
                    const hyperlinks = renderedCard.querySelectorAll('a');
                    const inputs = renderedCard.querySelectorAll('button, input, select, textarea');

                    [].forEach.call(inputs, (input: HTMLInputElement) => {
                        input.disabled = true;
                    });

                    [].forEach.call(hyperlinks, (hyperlink: HTMLAnchorElement) => {
                        hyperlink.addEventListener('click', event => {
                            event.preventDefault();
                            event.stopImmediatePropagation();
                            event.stopPropagation();
                        });
                    });
                }

                if (this.props.onImageLoad) {
                    const imgs = renderedCard.querySelectorAll('img');

                    if (imgs && imgs.length > 0) {
                        [].forEach.call(imgs, (img: HTMLImageElement) => {
                            img.addEventListener('load', this.handleImageLoad);
                        });
                    }
                }

                findDOMNode(this.divRef).appendChild(renderedCard);

                return;
            }
        } else {
            console.log('Error(s) rendering AdaptiveCard:');
            errors.forEach(e => console.log(e.message));
            this.setState({ errors: errors.map(e => e.message) });
        }
    }

    render() {
        let wrappedChildren: JSX.Element;
        const hasErrors = this.state && this.state.errors && this.state.errors.length > 0;

        if (hasErrors) {
            wrappedChildren = (
                <div>
                    <svg className="error-icon" viewBox="0 0 15 12.01">
                        <path d="M7.62 8.63v-.38H.94a.18.18 0 0 1-.19-.19V.94A.18.18 0 0 1 .94.75h10.12a.18.18 0 0 1 .19.19v3.73H12V.94a.91.91 0 0 0-.07-.36 1 1 0 0 0-.5-.5.91.91 0 0 0-.37-.08H.94a.91.91 0 0 0-.37.07 1 1 0 0 0-.5.5.91.91 0 0 0-.07.37v7.12a.91.91 0 0 0 .07.36 1 1 0 0 0 .5.5.91.91 0 0 0 .37.08h6.72c-.01-.12-.04-.24-.04-.37z M11.62 5.26a3.27 3.27 0 0 1 1.31.27 3.39 3.39 0 0 1 1.8 1.8 3.36 3.36 0 0 1 0 2.63 3.39 3.39 0 0 1-1.8 1.8 3.36 3.36 0 0 1-2.62 0 3.39 3.39 0 0 1-1.8-1.8 3.36 3.36 0 0 1 0-2.63 3.39 3.39 0 0 1 1.8-1.8 3.27 3.27 0 0 1 1.31-.27zm0 6a2.53 2.53 0 0 0 1-.21A2.65 2.65 0 0 0 14 9.65a2.62 2.62 0 0 0 0-2 2.65 2.65 0 0 0-1.39-1.39 2.62 2.62 0 0 0-2 0A2.65 2.65 0 0 0 9.2 7.61a2.62 2.62 0 0 0 0 2A2.65 2.65 0 0 0 10.6 11a2.53 2.53 0 0 0 1.02.26zM13 7.77l-.86.86.86.86-.53.53-.86-.86-.86.86-.53-.53.86-.86-.86-.86.53-.53.86.86.86-.86zM1.88 7.13h2.25V4.88H1.88zm.75-1.5h.75v.75h-.75zM5.63 2.63h4.5v.75h-4.5zM1.88 4.13h2.25V1.88H1.88zm.75-1.5h.75v.75h-.75zM9 5.63H5.63v.75h2.64A4 4 0 0 1 9 5.63z" />
                    </svg>
                    <div className="error-text">Can't render card</div>
                </div>
            );
        } else if (this.props.children) {
            wrappedChildren = (
                <div className="non-adaptive-content">
                    { this.props.children }
                </div>
            );
        } else {
            wrappedChildren = null;
        }

        return (
          <div className="wc-adaptive-card-wrapper">
                <div
                  className={classList('wc-card', 'wc-adaptive-card', 'collapsable', this.props.className, hasErrors && 'error', 'magictime', this.state && this.state.sent && 'collapse')}
                  onClick={this.onClick}
                >
                    {wrappedChildren}
                    <div ref={this.saveDiv}/>
                </div>
              { this.state && this.state.sent &&
                  <div className="magictime puffIn submit-success-wrapper ">
                      <div className="submit-success">
                          <img src="data:image/png;base64,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"/>
                      </div>
                  </div>
              }
          </div>
        );
    }
}

export default connect(
    (state: ChatState) => ({
        hostConfig: state.adaptiveCards.hostConfig,
        card: state.adaptiveCards.card
    }),
    {},
    (stateProps: any, dispatchProps: any, ownProps: any): Props => ({
        ...ownProps,
        ...stateProps
    })
)(AdaptiveCardContainer);
