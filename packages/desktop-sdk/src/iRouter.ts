export interface IRouter {
    /**
     * Publish a message on a channel.
     * @param channel A channel to publish on
     * @param payload The payload
     */
    publish<T>(channel: string, payload: T): void;

    /**
     * Subscribe to a channel.
     * @param channel A channel to subscribe to
     * @param listener The listener to recieve on
     */
    subscribe<T>(channel: string, listener: (payload: T) => void): void;

    /**
     * Unsubscribe from a channel.
     * @param channel A channel to unsubscribe from
     * @param listener The listener to remove.
     */
    unsubscribe<T>(channel: string, listener: (payload: T) => void): void;
}
