import { IWindowFactory } from "./iWindowFactory";
import { IConfiguration } from "@reactivemarkets/desktop-types";
import { Menu } from "electron";

export class ContextMenuWindowFactory implements IWindowFactory {
    private readonly inputMenu = Menu.buildFromTemplate([
        { role: "cut" },
        { role: "copy" },
        { role: "paste" },
        { type: "separator" },
        { role: "selectAll" },
    ]);
    private readonly selectionMenu = Menu.buildFromTemplate([
        { role: "copy" },
        { type: "separator" },
        { role: "selectAll" },
    ]);
    private readonly windowFactory: IWindowFactory;

    public constructor(windowFactory: IWindowFactory) {
        this.windowFactory = windowFactory;
    }

    public async create(configuration: IConfiguration) {
        const window = await this.windowFactory.create(configuration);

        window.webContents.on("context-menu", (_, props) => {
            const { isEditable, selectionText, x, y } = props;
            if (isEditable) {
                this.inputMenu.popup({ window, x, y });
            } else if (selectionText && selectionText.trim() !== "") {
                this.selectionMenu.popup({ window, x, y });
            }
        });

        return window;
    }
}
