import { App } from "electron";

import { routerService } from "../router";
import { ReservedChannels } from "../transports";

export interface ILoginAuth {
    readonly password: string;
    readonly username: string;
}

export interface ILoginResponse {
    readonly auth: ILoginAuth;
    readonly id: string;
}

export const registerLoginEventsHandler = (app: App) => {
    app.on("login", (event, webContents, ___, authInfo, callback) => {
        event.preventDefault();

        const id = `${webContents.id}`;

        routerService.on(ReservedChannels.login_auth, (loginAuth: ILoginResponse) => {

            if (loginAuth.id === id) {

                const { username, password } = loginAuth.auth;

                callback(username, password);
            }
        });

        routerService.send(ReservedChannels.login, {
            authInfo,
            id,
        });
    });
};
