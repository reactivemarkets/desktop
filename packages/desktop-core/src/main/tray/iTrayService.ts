import { ITraySpecification } from "@reactivemarkets/desktop-types";

export interface ITrayService {
    configure(spec: ITraySpecification): Promise<void>;
}
