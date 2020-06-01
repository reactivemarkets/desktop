import { ITrayConfiguration } from "@reactivemarkets/desktop-types";

export interface ITrayService {
    configure(configuration: ITrayConfiguration): Promise<void>;
}
