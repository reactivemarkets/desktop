import { TermCleaningSearchProvider } from "./termCleaningSearchProvider";
import { OrderedSearchProvider } from "./orderedSearchProvider";
import { ApplicationsSearchProvider } from "./applicationsSearchProvider";
import { IApplicationsStore } from "../../applications";
import { MaxScoreSearchProvider } from "./maxScoreSearchProvider";

export const createSearchProvider = (applicationsStore: IApplicationsStore) => {
    const applications = new ApplicationsSearchProvider(applicationsStore);

    const maxScore = new MaxScoreSearchProvider(applications, 0.6);

    const ordered = new OrderedSearchProvider(maxScore);

    return new TermCleaningSearchProvider(ordered);
};
