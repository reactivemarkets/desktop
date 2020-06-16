import { ITransport } from "./iTransport";

export class CompositeTransport implements ITransport {
    private readonly transports = new Map<string, ITransport>();

    public add(id: string, transport: ITransport) {
        this.transports.set(id, transport);
    }

    public off<T>(channel: string, callback: (data: T) => void) {
        this.transports.forEach((transport) => {
            transport.off(channel, callback);
        });

        return this;
    }

    public on<T>(channel: string, callback: (data: T) => void) {
        this.transports.forEach((transport) => {
            transport.on(channel, callback);
        });

        return this;
    }

    public once<T>(channel: string, callback: (data: T) => void) {
        this.transports.forEach((transport) => {
            transport.once(channel, callback);
        });

        return this;
    }

    public remove(id: string) {
        return this.transports.delete(id);
    }

    public send<T>(channel: string, data: T) {
        this.transports.forEach((transport) => {
            transport.send(channel, data);
        });
    }
}
