export interface IResizerStore {
    collapse(): void;

    expand(): void;

    subscribe(): void;

    unsubscribe(): void;
}
