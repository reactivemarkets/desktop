interface IIPCMessage<T> {
    channel: string;
    data: T;
}
