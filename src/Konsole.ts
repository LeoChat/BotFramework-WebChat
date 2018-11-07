export const log = (message?: any, ...optionalParams: any[]) => {
    if (this.isDebugMode && message) {
        console.log(message, ...optionalParams);
    }
};

export const isDebugMode = () => {
    return (typeof(window) !== 'undefined' && (window as any).botchatDebug);
};
