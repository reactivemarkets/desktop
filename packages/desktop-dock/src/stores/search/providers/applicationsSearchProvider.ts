import Fuse from "fuse.js";
import { ISearchProvider } from "../iSearchProvider";
import { IApplicationsStore, IApplication } from "../../applications";

export class ApplicationsSearchProvider implements ISearchProvider {
    private readonly applicationsStore: IApplicationsStore;

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
            distance: 1000,
            includeMatches: true,
            includeScore: true,
            shouldSort: false,
            useExtendedSearch: true,
            threshold: 0.6,
            keys: ["name", "description", "namespace"],
        });

        const results = fuse.search(searchTerm);

        return Promise.resolve(results);
    }

    private readonly toSearchResult = (application: IApplication) => {
        return {
            item: application,
            refIndex: 0,
            score: 0,
        };
    };
}
