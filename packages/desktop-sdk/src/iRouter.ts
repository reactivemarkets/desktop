export interface IRouter {
    publish<T>(channel: string, payload: T): void;
    subscribe<T>(channel: string, listener: (payload: T) => void): void;
    unsubscribe<T>(channel: string, listener: (payload: T) => void): void;
}
