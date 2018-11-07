import * as React from 'react';
import {findDOMNode} from 'react-dom';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subscription} from 'rxjs/Subscription';

import {
    Activity,
    CardActionTypes,
    ConnectionStatus,
    DirectLine,
    DirectLineOptions,
    IBotConnection,
    User
} from 'botframework-directlinejs';
import {Provider} from 'react-redux';
import {getTabIndex} from './getTabIndex';
import {History} from './History';
import * as konsole from './Konsole';
import {MessagePane} from './MessagePane';
import {Shell, ShellFunctions} from './Shell';
import {Speech} from './SpeechModule';
import {SpeechOptions} from './SpeechOptions';
import {ChatActions, createStore} from './Store';
import {ActivityOrID, FormatOptions} from './Types';

export interface ChatProps {
    adaptiveCardsHostConfig: any;
    bot: User;
    botConnection?: IBotConnection;
    chatTitle?: boolean | string;
    chatSubTitle?: boolean | string;
    chatLogo?: boolean | string;
    directLine?: DirectLineOptions;
    disabled?: boolean;
    formatOptions?: FormatOptions;
    direction?: string;
    locale?: string;
    resize?: 'none' | 'window' | 'detect';
    selectedActivity?: BehaviorSubject<ActivityOrID>;
    sendTyping?: boolean;
    showUploadButton?: boolean;
    speechOptions?: SpeechOptions;
    user: User;
    userThumbnail?: boolean | string;
    botThumbnail?: boolean | string;
    color?: string;
    iconPack?: string;
    connectionStatus?: ConnectionStatus;
}

export class Chat extends React.Component<ChatProps, {}> {

    private store = createStore();

    private botConnection: IBotConnection;

    private activitySubscription: Subscription;
    private connectionStatusSubscription: Subscription;
    private selectedActivitySubscription: Subscription;
    private shellRef: React.Component & ShellFunctions;
    private historyRef: React.Component;
    private chatviewPanelRef: HTMLElement;

    private resizeListener = () => this.setSize();

    // tslint:disable:variable-name
    private _handleCardAction = this.handleCardAction.bind(this);
    private _handleKeyDownCapture = this.handleKeyDownCapture.bind(this);
    private _saveChatviewPanelRef = this.saveChatviewPanelRef.bind(this);
    private _saveHistoryRef = this.saveHistoryRef.bind(this);
    private _saveShellRef = this.saveShellRef.bind(this);
    // tslint:enable:variable-name
    state = {
        connectionStatus: 0,
        connected: false
    };
    constructor(props: ChatProps) {
        super(props);

        konsole.log('BotChat.Chat props', props);

        const locale = props.locale || (window.navigator as any).userLanguage || window.navigator.language || 'en';

        this.store.dispatch<ChatActions>({
            type: 'Set_Locale',
            locale: props.locale || (window.navigator as any).userLanguage || window.navigator.language || 'en'
        });

        if (locale.startsWith('he')) {
            this.store.dispatch<ChatActions>({
                type: 'Set_Direction',
                direction: 'rtl'
            });
        }

        if (props.adaptiveCardsHostConfig) {
            this.store.dispatch<ChatActions>({
                type: 'Set_AdaptiveCardsHostConfig',
                payload: props.adaptiveCardsHostConfig
            });
        }

        let { chatTitle } = props;

        if (props.formatOptions) {
            console.warn('DEPRECATED: "formatOptions.showHeader" is deprecated, use "chatTitle" instead. See https://github.com/Microsoft/BotFramework-WebChat/blob/master/CHANGELOG.md#formatoptionsshowheader-is-deprecated-use-chattitle-instead.');

            if (typeof props.formatOptions.showHeader !== 'undefined' && typeof props.chatTitle === 'undefined') {
                chatTitle = props.formatOptions.showHeader;
            }
        }

        if (typeof chatTitle !== 'undefined') {
            this.store.dispatch<ChatActions>({ type: 'Set_Chat_Title', chatTitle });
        }

        const { chatSubTitle, chatLogo } = props;

        if (typeof chatSubTitle !== 'undefined') {
            this.store.dispatch<ChatActions>({ type: 'Set_Chat_Sub_Title', chatSubTitle });
        }

        if (typeof chatLogo !== 'undefined') {
            this.store.dispatch<ChatActions>({ type: 'Set_Chat_Logo', chatLogo });
        }

        this.store.dispatch<ChatActions>({ type: 'Toggle_Upload_Button', showUploadButton: props.showUploadButton !== false });

        if (props.sendTyping) {
            this.store.dispatch<ChatActions>({ type: 'Set_Send_Typing', sendTyping: props.sendTyping });
        }

        if (props.speechOptions) {
            Speech.SpeechRecognizer.setSpeechRecognizer(props.speechOptions.speechRecognizer);
            Speech.SpeechSynthesizer.setSpeechSynthesizer(props.speechOptions.speechSynthesizer);
        }

        if (typeof props.botThumbnail !== 'undefined') {
            this.store.dispatch<ChatActions>({ type: 'Set_Bot_Thumbnail', botThumbnail : props.botThumbnail });
        }

        if (typeof props.userThumbnail !== 'undefined') {
            this.store.dispatch<ChatActions>({ type: 'Set_User_Thumbnail', userThumbnail : props.userThumbnail });
        }

        if (typeof props.iconPack !== 'undefined') {
            this.store.dispatch<ChatActions>({ type: 'Set_Alternate_Icons', iconPack : props.iconPack });
        }

        if (typeof props.color !== 'undefined') {
            this.store.dispatch<ChatActions>({ type: 'Set_Color', color : props.color });
        }
    }

    private handleIncomingActivity(activity: Activity) {
        const state = this.store.getState();
        switch (activity.type) {
            case 'message':
                this.store.dispatch<ChatActions>({ type: activity.from.id === state.connection.user.id ? 'Receive_Sent_Message' : 'Receive_Message', activity });
                break;

            // case 'endOfConversation':
            //     this.store.dispatch<ChatActions>({ type: 'End_Conversation', activity });
            //     break;

            case 'typing':
                if (activity.from.id !== state.connection.user.id) {
                    this.store.dispatch<ChatActions>({ type: 'Show_Typing', activity });
                }
                break;
        }
    }

    private setSize() {
        this.store.dispatch<ChatActions>({
            type: 'Set_Size',
            width: this.chatviewPanelRef.offsetWidth,
            height: this.chatviewPanelRef.offsetHeight
        });
    }

    private handleCardAction() {
        try {
            // After the user click on any card action, we will "blur" the focus, by setting focus on message pane
            // This is for after click on card action, the user press "A", it should go into the chat box
            const historyDOM = findDOMNode(this.historyRef) as HTMLElement;

            if (historyDOM) {
                historyDOM.focus();
            }
        } catch (err) {
            // In Emulator production build, React.findDOMNode(this.historyRef) will throw an exception saying the
            // component is unmounted. I verified we did not miss any saveRef calls, so it looks weird.
            // Since this is an optional feature, I am try-catching this for now. We should find the root cause later.
            //
            // Some of my thoughts, React version-compatibility problems.
        }
    }

    private handleKeyDownCapture(evt: React.KeyboardEvent<HTMLDivElement>) {
        const target = evt.target as HTMLElement;
        const tabIndex = getTabIndex(target);

        if (
            evt.altKey
            || evt.ctrlKey
            || evt.metaKey
            || (!inputtableKey(evt.key) && evt.key !== 'Backspace')
        ) {
            // Ignore if one of the utility key (except SHIFT) is pressed
            // E.g. CTRL-C on a link in one of the message should not jump to chat box
            // E.g. "A" or "Backspace" should jump to chat box
            return;
        }

        if (
            target === findDOMNode(this.historyRef)
            || typeof tabIndex !== 'number'
            || tabIndex < 0
        ) {
            evt.stopPropagation();

            let key: string;

            // Quirks: onKeyDown we re-focus, but the newly focused element does not receive the subsequent onKeyPress event
            //         It is working in Chrome/Firefox/IE, confirmed not working in Edge/16
            //         So we are manually appending the key if they can be inputted in the box
            if (/(^|\s)Edge\/16\./.test(navigator.userAgent)) {
                key = inputtableKey(evt.key);
            }

            // shellRef is null if Web Chat is disabled
            if (this.shellRef) {
                this.shellRef.focus(key);
            }
        }
    }

    private saveChatviewPanelRef(chatviewPanelRef: HTMLElement) {
        this.chatviewPanelRef = chatviewPanelRef;
    }

    private saveHistoryRef(historyWrapper: any) {
        this.historyRef = historyWrapper && historyWrapper.getWrappedInstance();
    }

    private saveShellRef(shellWrapper: any) {
        this.shellRef = shellWrapper && shellWrapper.getWrappedInstance();
    }

    componentDidMount() {
        // Now that we're mounted, we know our dimensions. Put them in the store (this will force a re-render)
        this.setSize();

        const botConnection = this.props.directLine
            ? (this.botConnection = new DirectLine(this.props.directLine))
            : this.props.botConnection
            ;

        if (this.props.resize === 'window') {
            window.addEventListener('resize', this.resizeListener);
        }

        this.store.dispatch<ChatActions>({ type: 'Start_Connection', user: this.props.user, bot: this.props.bot, botConnection, selectedActivity: this.props.selectedActivity });

        this.connectionStatusSubscription = botConnection.connectionStatus$.subscribe(connectionStatus => {
                if (this.props.speechOptions && this.props.speechOptions.speechRecognizer) {
                    const refGrammarId = botConnection.referenceGrammarId;
                    if (refGrammarId) {
                        this.props.speechOptions.speechRecognizer.referenceGrammarId = refGrammarId;
                    }
                }
                this.store.dispatch<ChatActions>({ type: 'Connection_Change', connectionStatus });
                this.setState( state => ({ connectionStatus, connected: (connectionStatus === ConnectionStatus.Online)}));
            }
        );

        this.activitySubscription = botConnection.activity$.subscribe(
            activity => this.handleIncomingActivity(activity),
            error => konsole.log('activity$ error', error)
        );

        if (this.props.selectedActivity) {
            this.selectedActivitySubscription = this.props.selectedActivity.subscribe(activityOrID => {
                this.store.dispatch<ChatActions>({
                    type: 'Select_Activity',
                    selectedActivity: activityOrID.activity || this.store.getState().history.activities.find(activity => activity.id === activityOrID.id)
                });
            });
        }
    }

    componentWillUnmount() {
        this.connectionStatusSubscription.unsubscribe();
        this.activitySubscription.unsubscribe();
        if (this.selectedActivitySubscription) {
            this.selectedActivitySubscription.unsubscribe();
        }
        if (this.botConnection) {
            this.botConnection.end();
        }
        window.removeEventListener('resize', this.resizeListener);
    }

    componentWillReceiveProps(nextProps: ChatProps) {
        if (this.props.adaptiveCardsHostConfig !== nextProps.adaptiveCardsHostConfig) {
            this.store.dispatch<ChatActions>({
                type: 'Set_AdaptiveCardsHostConfig',
                payload: nextProps.adaptiveCardsHostConfig
            });
        }

        if (this.props.showUploadButton !== nextProps.showUploadButton) {
            this.store.dispatch<ChatActions>({
                type: 'Toggle_Upload_Button',
                showUploadButton: nextProps.showUploadButton
            });
        }

        if (this.props.chatTitle !== nextProps.chatTitle) {
            this.store.dispatch<ChatActions>({
                type: 'Set_Chat_Title',
                chatTitle: nextProps.chatTitle
            });
        }

        if (this.props.chatSubTitle !== nextProps.chatSubTitle) {
            this.store.dispatch<ChatActions>({
                type: 'Set_Chat_Sub_Title',
                chatSubTitle: nextProps.chatSubTitle
            });
        }

        if (this.props.chatLogo !== nextProps.chatLogo) {
            this.store.dispatch<ChatActions>({
                type: 'Set_Chat_Logo',
                chatLogo: nextProps.chatLogo
            });
        }

        if (this.props.color !== nextProps.color) {
            this.store.dispatch<ChatActions>({
                type: 'Set_Color',
                color: nextProps.color
            });
        }

        if (this.props.iconPack !== nextProps.iconPack) {
            this.store.dispatch<ChatActions>({
                type: 'Set_Alternate_Icons',
                iconPack: nextProps.iconPack
            });
        }

        if (this.props.botThumbnail !== nextProps.botThumbnail) {
            this.store.dispatch<ChatActions>({
                type: 'Set_Bot_Thumbnail',
                botThumbnail: nextProps.botThumbnail
            });
        }

        if (this.props.userThumbnail !== nextProps.userThumbnail) {
            this.store.dispatch<ChatActions>({
                type: 'Set_User_Thumbnail',
                userThumbnail: nextProps.userThumbnail
            });
        }
    }

    // At startup we do three render passes:
    // 1. To determine the dimensions of the chat panel (nothing needs to actually render here, so we don't)
    // 2. To determine the margins of any given carousel (we just render one mock activity so that we can measure it)
    // 3. (this is also the normal re-render case) To render without the mock activity

    render() {
        const state = this.store.getState();
        konsole.log('BotChat.Chat state', state);

        // only render real stuff after we know our dimensions
        return (
            <Provider store={ this.store }>
                <div
                    className="wc-chatview-panel"
                    onKeyDownCapture={ this._handleKeyDownCapture }
                    ref={ this._saveChatviewPanelRef }
                    style={{ direction : typeof state.format.direction === 'string' ? state.format.direction : 'ltr'}}
                >
                    { konsole.isDebugMode() &&
                        <div className="wc-debug">DEBUG MODE | Connection status: { ConnectionStatus[this.state.connectionStatus] }
                        </div>
                    }
                    {
                        !!state.format.chatTitle &&
                        <div className="wc-header wc-theme-bg" style={ state.format.color ? {backgroundColor: state.format.color} : {}}>
                            {!!state.format.chatLogo &&
                            <img className="wc-logo" src={typeof state.format.chatLogo === 'string' ? state.format.chatLogo : './logo.png'} />
                            }
                            <div className="wc-titles-container">
                                <span className="wc-title">{ typeof state.format.chatTitle === 'string' ? state.format.chatTitle : state.format.strings.title }</span>
                                {!!state.format.chatSubTitle &&
                                <span className="wc-sub-title">{typeof state.format.chatSubTitle === 'string' ? state.format.chatSubTitle : 'subtitle'}</span>
                                }
                            </div>
                        </div>
                    }
                    <MessagePane disabled={ this.props.disabled }>
                        <History
                            disabled={ this.props.disabled }
                            onCardAction={ this._handleCardAction }
                            ref={ this._saveHistoryRef }
                            showSender={ false }
                        />
                    </MessagePane>
                    {
                        !this.props.disabled && <Shell ref={ this._saveShellRef } />
                    }
                    {
                        this.props.resize === 'detect' &&
                            <ResizeDetector onresize={ this.resizeListener } />
                    }
                </div>
            </Provider>
        );
    }
}

export type IDoCardAction = (type: CardActionTypes, value: string | object) => void;

export const doCardAction = (
    botConnection: IBotConnection,
    from: User,
    locale: string,
    sendMessage: (value: string, user: User, locale: string) => void
): IDoCardAction => (
    type,
    actionValue
) => {
    const text = (typeof actionValue === 'string') ? actionValue as string : undefined;
    const value = (typeof actionValue === 'object') ? actionValue as object : undefined;

    switch (type) {
        case 'imBack':
            if (typeof text === 'string') {
                sendMessage(text, from, locale);
            }
            break;

        case 'postBack':
            sendPostBack(botConnection, text, value, from, locale);
            break;

        case 'call':
        case 'openUrl':
        case 'playAudio':
        case 'playVideo':
        case 'showImage':
        case 'downloadFile':
            window.open(text);
            break;
        case 'signin':
            const loginWindow = window.open();
            if (botConnection.getSessionId)  {
                botConnection.getSessionId().subscribe(sessionId => {
                    konsole.log('received sessionId: ' + sessionId);
                    loginWindow.location.href = text + encodeURIComponent('&code_challenge=' + sessionId);
                }, error => {
                    konsole.log('failed to get sessionId', error);
                });
            } else {
                loginWindow.location.href = text;
            }
            break;

        default:
            konsole.log('unknown button type', type);
        }
};

export const sendPostBack = (botConnection: IBotConnection, text: string, value: object, from: User, locale: string) => {
    botConnection.postActivity({
        type: 'message',
        text,
        value,
        from,
        locale,
        channelData: {
            postback: true
        }
    })
    .subscribe(
        id => konsole.log('success sending postBack', id),
        error => konsole.log('failed to send postBack', error)
    );
};

export const renderIfNonempty = (value: any, renderer: (value: any) => JSX.Element ) => {
    if (value !== undefined && value !== null && (typeof value !== 'string' || value.length > 0)) {
        return renderer(value);
    }
};

export const classList = (...args: Array<string | boolean>) => {
    return args.filter(Boolean).join(' ');
};

// note: container of this element must have CSS position of either absolute or relative
const ResizeDetector = (props: {
    onresize: () => void
}) =>
    // adapted to React from https://github.com/developit/simple-element-resize-detector
    <iframe
        style={{
            border: 'none',
            height: '100%',
            left: 0,
            margin: '1px 0 0',
            opacity: 0,
            pointerEvents: 'none',
            position: 'absolute',
            top: '-100%',
            visibility: 'hidden',
            width: '100%'
        }}
        ref={ frame => {
            if (frame) {
                frame.contentWindow.onresize = props.onresize;
            }
        } }
    />;

// For auto-focus in some browsers, we synthetically insert keys into the chatbox.
// By default, we insert keys when:
// 1. evt.key.length === 1 (e.g. "1", "A", "=" keys), or
// 2. evt.key is one of the map keys below (e.g. "Add" will insert "+", "Decimal" will insert ".")
const INPUTTABLE_KEY: { [key: string]: string } = {
    Add: '+',      // Numpad add key
    Decimal: '.',  // Numpad decimal key
    Divide: '/',   // Numpad divide key
    Multiply: '*', // Numpad multiply key
    Subtract: '-'  // Numpad subtract key
};

function inputtableKey(key: string) {
    return key.length === 1 ? key : INPUTTABLE_KEY[key];
}
