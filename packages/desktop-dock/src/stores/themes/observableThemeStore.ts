import { observable } from "mobx";
import { darkTheme } from "./darkTheme";
import { IThemeStore } from "./iThemeStore";

export class ObservableThemeStore implements IThemeStore {
    @observable
    public current = darkTheme;
}
