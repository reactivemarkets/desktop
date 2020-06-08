export interface IFocusStore {
    focusInput(): void;
    off(event: "focus-input", listener: () => void): void;
    on(event: "focus-input", listener: () => void): void;
}
