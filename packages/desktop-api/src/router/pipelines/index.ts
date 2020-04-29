import { CompositeConnectionPipeline } from "./compositeConnectionPipeline";
import { IConnectionPipeline } from "./iConnectionPipeline";
import { LoggingConnectionPipeline } from "./loggingConnectionPipeline";

const loggingPipeline = new LoggingConnectionPipeline();

export const pipeline: IConnectionPipeline = new CompositeConnectionPipeline(loggingPipeline);
