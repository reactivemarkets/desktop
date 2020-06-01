import { TextField } from "@material-ui/core";
import * as React from "react";

export class SearchInput extends React.PureComponent {
    public render() {
        return <TextField InputProps={{ disableUnderline: true }} fullWidth placeholder="Search" />;
    }
}
