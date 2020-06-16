import { parseCommandLine } from "./commandLineParser";
import { IOptions } from "./iOptions";

const commandLineOptions = parseCommandLine(process.argv);

export const options: IOptions = commandLineOptions as never;
