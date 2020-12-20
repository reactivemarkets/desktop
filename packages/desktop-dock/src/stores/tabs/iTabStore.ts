import { Observable } from "rxjs";

export type Action = "next" | "previous";

export interface ITabStore {
    action: Observable<Action>;

    next(): void;
    previous(): void;
}
