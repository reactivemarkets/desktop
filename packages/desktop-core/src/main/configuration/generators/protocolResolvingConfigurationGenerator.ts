import { ConfigurationKind, IConfiguration } from "@reactivemarkets/desktop-types";
import { parse } from "url";
import { IConfigurationGenerator } from "./iConfigurationGenerator";

export class ProtocolResolvingConfigurationGenerator implements IConfigurationGenerator {
    private readonly generator: IConfigurationGenerator;
    private readonly protocol: string;

    public constructor(generator: IConfigurationGenerator, protocol = "https") {
        this.generator = generator;
        this.protocol = protocol;
    }

    public canGenerate = (kind: ConfigurationKind) => {
        return this.generator.canGenerate(kind);
    };

    public generate = (kind: ConfigurationKind, name: string, url: string): Promise<IConfiguration> => {
        let absoluteUrl = url;
        const urlQuery = parse(url);
        switch (urlQuery.protocol) {
            case null:
                absoluteUrl = `${this.protocol}://${url}`;
                break;
        }

        return this.generator.generate(kind, name, absoluteUrl);
    };
}
