import { WellKnownConfigurationKind, IConfiguration } from "@reactivemarkets/desktop-types";
import { parse } from "url";
import { IConfigurationGenerator } from "./iConfigurationGenerator";
import { IGeneratorOptions } from "./iGeneratorOptions";

export class ProtocolResolvingConfigurationGenerator implements IConfigurationGenerator {
    private readonly generator: IConfigurationGenerator;
    private readonly protocol: string;

    public constructor(generator: IConfigurationGenerator, protocol = "https") {
        this.generator = generator;
        this.protocol = protocol;
    }

    public canGenerate = (kind: WellKnownConfigurationKind) => {
        return this.generator.canGenerate(kind);
    };

    public generate = ({ name, kind, url }: IGeneratorOptions): Promise<IConfiguration> => {
        let absoluteUrl = url!;
        const urlQuery = parse(absoluteUrl);
        switch (urlQuery.protocol) {
            case null:
                absoluteUrl = `${this.protocol}://${url}`;
                break;
        }

        return this.generator.generate({ kind, name, url: absoluteUrl });
    };
}
