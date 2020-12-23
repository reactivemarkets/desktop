import { createStyles, InputAdornment, TextField, Theme, withStyles, WithStyles } from "@material-ui/core";
import { FilterOptionsState } from "@material-ui/lab";
import Autocomplete, {
    AutocompleteInputChangeReason,
    AutocompleteRenderInputParams,
    AutocompleteRenderOptionState,
} from "@material-ui/lab/Autocomplete";
import { matchSorter, MatchSorterOptions } from "match-sorter";
import * as React from "react";
import { IApplication } from "../../stores";
import CategoryTabs from "./CategoryTabs";
import SearchRenderOption from "./SearchRenderOption";
import { VirtualizedListbox } from "./VirtualizedListbox";

const matchOptions: MatchSorterOptions<IApplication> = {
    keys: ["display", "name", "description", "category"],
};

const filterOptions = (options: IApplication[], state: FilterOptionsState<IApplication>): IApplication[] => {
    return state.inputValue
        .split(" ")
        .reduceRight((results, term) => matchSorter(results, term, matchOptions), options);
};

const styles = (theme: Theme) =>
    createStyles({
        display: {
            display: "flex",
            flexDirection: "column",
        },
        listbox: {
            padding: 0,
            maxHeight: "unset",
        },
        noOptions: {
            fontSize: 13,
            paddingLeft: 16,
        },
        option: {
            minHeight: "auto",
            padding: 0,
            '&[aria-selected="true"]': {
                backgroundColor: "transparent",
            },
            '&[data-focus="true"]': {
                backgroundColor: theme.palette.action.hover,
            },
        },
        paper: {
            backgroundColor: "transparent",
            borderRadius: 0,
            boxShadow: "none",
            margin: 0,
            height: "100%",
        },
        popper: {
            borderTop: `1px solid ${theme.palette.divider}`,
            height: "100%",
            width: "100%",
        },
        popperDisablePortal: {
            position: "relative",
            width: "auto !important",
        },
        root: {
            width: "100%",
        },
        textField: {
            padding: "14px 8px 14px 0",
        },
    });

interface SearchAutocompleteProps extends WithStyles<typeof styles> {
    readonly endAdornment?: React.ReactNode;
    readonly inputRef: React.RefObject<unknown>;
    readonly inputValue?: string;
    readonly onInputChange?: (
        event: React.ChangeEvent<unknown>,
        value: string,
        reason: AutocompleteInputChangeReason,
    ) => void;
    readonly onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
    readonly options: IApplication[];
    readonly startAdornment?: React.ReactNode;
    readonly value?: IApplication;
    onChange(selected: IApplication): void;
}

class SearchAutocomplete extends React.PureComponent<SearchAutocompleteProps> {
    public render() {
        const { classes, inputRef, inputValue = "", onKeyDown, onInputChange, options, value } = this.props;

        return (
            <Autocomplete
                classes={{
                    listbox: classes.listbox,
                    noOptions: classes.noOptions,
                    option: classes.option,
                    paper: classes.paper,
                    popper: classes.popper,
                    popperDisablePortal: classes.popperDisablePortal,
                    root: classes.root,
                }}
                autoHighlight
                clearOnBlur={false}
                clearOnEscape
                disableCloseOnSelect
                disablePortal
                filterOptions={filterOptions}
                fullWidth
                handleHomeEndKeys
                inputValue={inputValue}
                ListboxComponent={VirtualizedListbox as React.ComponentType<React.HTMLAttributes<HTMLElement>>}
                noOptionsText="No results."
                onChange={this.onChange}
                onKeyDown={onKeyDown}
                onInputChange={onInputChange}
                open
                options={options}
                getOptionLabel={this.getOptionLabel}
                getOptionSelected={this.getOptionSelected}
                ref={inputRef}
                renderInput={this.renderInput}
                renderOption={this.renderOption}
                value={value}
            />
        );
    }

    private readonly getOptionLabel = (option: IApplication) => {
        return option.display ?? option.name;
    };

    private readonly getOptionSelected = (option: IApplication, value: IApplication) => {
        return option.key === value.key;
    };

    private readonly renderInput = (params: AutocompleteRenderInputParams) => {
        const { classes, endAdornment, startAdornment } = this.props;

        return (
            <>
                <TextField
                    {...params}
                    className={classes.textField}
                    InputProps={{
                        disableUnderline: true,
                        endAdornment: <InputAdornment position="end">{endAdornment}</InputAdornment>,
                        ref: params.InputProps.ref,
                        startAdornment: <InputAdornment position="start">{startAdornment}</InputAdornment>,
                    }}
                    placeholder="Search"
                />
                <CategoryTabs />
            </>
        );
    };

    private readonly renderOption = (option: IApplication, { selected }: AutocompleteRenderOptionState) => {
        return <SearchRenderOption result={option} selected={selected} />;
    };

    public readonly onChange = (_: React.ChangeEvent<unknown>, selected: IApplication | null) => {
        if (selected !== null) {
            this.props.onChange(selected);
        }
    };
}

export default withStyles(styles)(SearchAutocomplete);
