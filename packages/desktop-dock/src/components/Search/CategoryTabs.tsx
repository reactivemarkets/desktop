import { createStyles, Tab, Tabs, withStyles, WithStyles } from "@material-ui/core";
import { observer, inject } from "mobx-react";
import * as React from "react";
import { Subscription } from "rxjs";
import { IApplicationsStore, IFilterStore, ITabStore } from "../../stores";

const styles = () =>
    createStyles({
        root: {
            width: "100vw",
        },
    });

interface ICategoryTabsProps extends WithStyles<typeof styles> {
    readonly applicationsStore?: IApplicationsStore;
    readonly filterStore?: IFilterStore;
    readonly tabStore?: ITabStore;
}

@inject("applicationsStore")
@inject("filterStore")
@inject("tabStore")
@observer
class CategoryTabs extends React.Component<ICategoryTabsProps> {
    private subscription?: Subscription;

    public componentDidMount() {
        const { applicationsStore, filterStore, tabStore } = this.props;
        this.subscription = tabStore?.action.subscribe({
            next: (action) => {
                const { categories } = applicationsStore!;
                if (categories.length === 0) {
                    filterStore?.clear();

                    return;
                }

                const { filter } = filterStore!;
                const index = categories.findIndex((category) => category === filter);
                switch (action) {
                    case "next": {
                        const newIndex = Math.min(categories.length - 1, index + 1);
                        filterStore?.update(categories[newIndex]);
                        break;
                    }
                    case "previous": {
                        const newIndex = index - 1;
                        if (newIndex < 0) {
                            filterStore?.clear();
                        } else {
                            filterStore?.update(categories[newIndex]);
                        }
                        break;
                    }
                }
            },
        });
    }

    public componentWillUnmount() {
        if (this.subscription !== undefined) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
    }

    public render() {
        const { applicationsStore, classes, filterStore } = this.props;

        const { categories } = applicationsStore!;

        const { filter = "all" } = filterStore!;

        return (
            <div className={classes.root}>
                <Tabs value={filter} onChange={this.onChange} variant="scrollable" scrollButtons="on">
                    <Tab value="all" label="All" />
                    {categories.map((category) => {
                        return <Tab key={category} value={category} label={category} />;
                    })}
                </Tabs>
            </div>
        );
    }

    private readonly onChange = (_: React.ChangeEvent<unknown>, value: string) => {
        const { filterStore } = this.props;
        if (value === "all") {
            filterStore?.clear();
        } else {
            filterStore?.update(value);
        }
    };
}

export default withStyles(styles)(CategoryTabs);
