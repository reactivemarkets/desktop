export interface ISearchStore {
    readonly term?: string;

    clear(): void;
    update(term: string): void;
}
