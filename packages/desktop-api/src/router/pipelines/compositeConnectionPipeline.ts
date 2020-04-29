import { IConnectionPipeline, Socket } from "./iConnectionPipeline";
import { IRouterMessage } from "./iRouterMessage";

export class CompositeConnectionPipeline implements IConnectionPipeline {
    private readonly pipelines: IConnectionPipeline[];

    public constructor(...pipelines: IConnectionPipeline[]) {
        this.pipelines = pipelines;
    }

    public onClose(socket: Socket, code: number, reason: string) {
        this.pipelines.forEach((p) => {
            p.onClose(socket, code, reason);
        });
    }

    public onError(socket: Socket, error: Error) {
        this.pipelines.forEach((p) => {
            p.onError(socket, error);
        });
    }

    public onOpen(socket: Socket) {
        this.pipelines.forEach((p) => {
            p.onOpen(socket);
        });
    }

    public onPublish(socket: Socket, message: IRouterMessage) {
        this.pipelines.forEach((p) => {
            p.onPublish(socket, message);
        });
    }

    public onSubscribe(socket: Socket, message: IRouterMessage) {
        this.pipelines.forEach((p) => {
            p.onSubscribe(socket, message);
        });
    }

    public onUnsubscribe(socket: Socket, message: IRouterMessage) {
        this.pipelines.forEach((p) => {
            p.onUnsubscribe(socket, message);
        });
    }
}
