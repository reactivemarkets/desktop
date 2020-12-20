export interface IFilterStore {
    readonly filter?: string;

    clear(): void;
    update(filter: string): void;
}
