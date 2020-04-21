import { v4 as uuid } from "uuid";

import { CompositeTransport, ITransport } from "../transports";

import { IRouterService } from "./iRouterService";

export class DefaultRouterService implements IRouterService {

    private readonly transport = new CompositeTransport();

    public addTransport(transport: ITransport) {

        const id = uuid();

        this.transport.add(id, transport);

        return id;
    }

    public on<T>(channel: string, callback: (data: T) => void): void {
        this.transport.on(channel, callback);
    }

    public once<T>(channel: string, callback: (data: T) => void): void {
        this.transport.once(channel, callback);
    }

    public removeTransport(id: string): boolean {
        return this.transport.remove(id);
    }

    public send<T>(channel: string, data: T): void {
        this.transport.send(channel, data);
    }
}
