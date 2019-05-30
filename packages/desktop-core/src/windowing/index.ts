import { BrowserWindowFactory } from "./browserWindowFactory";
import { IWindowFactory } from "./iWindowFactory";

export * from "./iWindowFactory";

export const windowService: IWindowFactory = new BrowserWindowFactory();
