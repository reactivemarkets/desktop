import { Menu, dialog } from "electron";
import { shellService } from "../shell";
import { logger } from "../logging";

export const registerApplicationMenu = () => {
    if (process.platform !== "darwin") {
        Menu.setApplicationMenu(null);

        return;
    }

    const openDocs = async () => {
        try {
            await shellService.openExternal("https://desktop.reactivemarkets.com");
        } catch (error) {
            const title = "Can't open documentation url";
            const content = `${error}`;
            logger.error(`${title}: ${content}`);
            dialog.showErrorBox(title, content);
        }
    };

    const helpMenu: Electron.MenuItemConstructorOptions = {
        role: "help",
        submenu: [
            {
                label: "Documentation",
                click: openDocs,
            },
        ],
    };

    const template: Electron.MenuItemConstructorOptions[] = [
        { role: "appMenu" },
        { role: "fileMenu" },
        { role: "editMenu" },
        { role: "viewMenu" },
        { role: "windowMenu" },
        helpMenu,
    ];

    const menu = Menu.buildFromTemplate(template);

    Menu.setApplicationMenu(menu);
};
