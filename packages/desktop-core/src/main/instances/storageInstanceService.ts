import { IInstanceService } from "./iInstanceService";
import { storageService } from "../storage";

export class StorageInstanceService implements IInstanceService {
    public get(uid: string) {
        return storageService.from(uid)?.configuration;
    }

    public list() {
        return storageService.all().map((instance) => instance.configuration);
    }

    public kill() {
        const error = new Error("You can't kill storage");

        return Promise.reject(error);
    }

    public restart() {
        const error = new Error("You can't restart storage");

        return Promise.reject(error);
    }

    public stop() {
        const error = new Error("You can't stop storage");

        return Promise.reject(error);
    }
}
