import { Menu, shell } from "electron";

export const buildAppMenu = () => {
    if (process.platform !== "darwin") {
        Menu.setApplicationMenu(null);

        return;
    }

    const helpMenu: Electron.MenuItemConstructorOptions = {
        role: "help",
        submenu: [
            {
                label: "Documentation",
                click: async () => {
                    await shell.openExternal("https://desktop.reactivemarkets.com");
                },
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
