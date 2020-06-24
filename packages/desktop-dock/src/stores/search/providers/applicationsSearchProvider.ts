import Fuse from "fuse.js";
import { ISearchProvider } from "../iSearchProvider";
import { IApplicationsStore, IApplication } from "../../applications";

export class ApplicationsSearchProvider implements ISearchProvider {
    private readonly applicationsStore: IApplicationsStore;
    private readonly provider = "application";

    public constructor(applicationsStore: IApplicationsStore) {
        this.applicationsStore = applicationsStore;
    }

    public search(searchTerm?: string) {
        const { applications } = this.applicationsStore;

        if (searchTerm === undefined || searchTerm === "") {
            const results = applications.map((application) => {
                return this.toSearchResult(application);
            });

            return Promise.resolve(results);
        }

        const fuse = new Fuse(applications, {
            ignoreLocation: true,
            includeScore: true,
            shouldSort: false,
            useExtendedSearch: true,
            keys: ["name", "description", "category"],
        });

        const results = fuse.search(searchTerm);

        const providerResults = results.map((r) => ({
            ...r,
            provider: this.provider,
        }));

        return Promise.resolve(providerResults);
    }

    private readonly toSearchResult = (application: IApplication) => {
        return {
            item: application,
            provider: this.provider,
            score: 0,
        };
    };
}
