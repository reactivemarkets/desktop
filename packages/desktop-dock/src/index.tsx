import * as React from "react";
import { render } from "react-dom";
import { App } from "./components";
import { Provider } from "mobx-react";
import { stores } from "./stores";

const app = (
    <Provider {...stores}>
        <App />
    </Provider>
);

render(app, document.getElementById("app"));
