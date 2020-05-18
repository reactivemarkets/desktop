import { ITransport } from "../transports";

export interface IRouterService {
    /**
     * Adds a transport to the router service and returns the id for it.
     * @param transport The transport to add
     */
    addTransport(transport: ITransport): string;

    /**
     * Listens to a channel for messages.
     * @param channel The channel to listen to
     * @param callback The callback to invoke on a message
     */
    on<T>(channel: string, callback: (data: T) => void): void;

    /**
     * Listens to a channel for a message and immediatly removes itself
     * from the channel upon the first message.
     * @param channel The channel to listen to
     * @param callback The callback to invoke on a message
     */
    once<T>(channel: string, callback: (data: T) => void): void;

    /**
     * Removes a transport from the router service.
     * @param id The unique id of the transport
     */
    removeTransport(id: string): boolean;

    /**
     * Sends a message to all listeners of a channel.
     * @param channel The channel to send the message on
     * @param data The data to send
     */
    send<T>(channel: string, data: T): void;
}
