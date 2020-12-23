import { AutocompleteInputChangeReason } from "@material-ui/lab";
import { reaction } from "mobx";
import { observer, inject, disposeOnUnmount } from "mobx-react";
import * as React from "react";
import {
    IApplication,
    IApplicationsStore,
    IFilterStore,
    IFocusStore,
    ILauncherStore,
    IResizerStore,
    ISearchStore,
    ITabStore,
} from "../../stores";
import SearchAutocomplete from "./SearchAutocomplete";

interface ISearchAutocompleteContainerProps {
    readonly applicationsStore?: IApplicationsStore;
    readonly endAdornment?: React.ReactNode;
    readonly filterStore?: IFilterStore;
    readonly focusStore?: IFocusStore;
    readonly launcherStore?: ILauncherStore;
    readonly resizerStore?: IResizerStore;
    readonly searchStore?: ISearchStore;
    readonly startAdornment?: React.ReactNode;
    readonly tabStore?: ITabStore;
}

@inject("applicationsStore")
@inject("filterStore")
@inject("focusStore")
@inject("launcherStore")
@inject("resizerStore")
@inject("searchStore")
@inject("tabStore")
@observer
export class SearchAutocompleteContainer extends React.Component<ISearchAutocompleteContainerProps> {
    private readonly expandDelay = 500;
    private readonly ref = React.createRef<HTMLInputElement>();

    public componentDidMount() {
        this.props.focusStore?.on("focus-input", this.focus);

        disposeOnUnmount(
            this,
            reaction(
                () => this.props.searchStore?.term,
                (term) => {
                    if (term !== undefined && term !== "") {
                        this.props.resizerStore?.expand();
                    }
                },
                { delay: this.expandDelay },
            ),
        );
    }

    public componentWillUnmount() {
        this.props.focusStore?.off("focus-input", this.focus);
    }

    public render() {
        const { applicationsStore, endAdornment, filterStore, searchStore, startAdornment } = this.props;

        const { applications } = applicationsStore!;

        const { filter } = filterStore!;

        const options = filter === undefined ? applications.slice() : applications.filter((a) => a.category === filter);

        const { term } = searchStore!;

        return (
            <SearchAutocomplete
                endAdornment={endAdornment}
                startAdornment={startAdornment}
                inputRef={this.ref}
                inputValue={term}
                options={options}
                onChange={this.onChange}
                onKeyDown={this.onKeyDown}
                onInputChange={this.onInputChange}
                value={null}
            />
        );
    }

    private readonly focus = () => {
        this.ref.current?.focus();
    };

    private readonly onChange = async ({ configuration }: IApplication) => {
        await this.props.launcherStore?.launch(configuration);
    };

    private readonly onInputChange = (
        _: React.ChangeEvent<unknown>,
        value: string,
        reason: AutocompleteInputChangeReason,
    ) => {
        const { searchStore } = this.props;
        switch (reason) {
            case "input":
                searchStore?.update(value);
                break;
            default:
                searchStore?.clear();
                break;
        }
    };

    private readonly onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        const { filterStore, resizerStore, searchStore, tabStore } = this.props;
        switch (event.key) {
            case "ArrowLeft":
                tabStore?.previous();
                break;
            case "ArrowRight":
                tabStore?.next();
                break;
            case "Escape":
                resizerStore?.collapse();
                filterStore?.clear();
                searchStore?.clear();
                break;
        }
    };
}
