import { CachedConnectionPipeline } from "./cachedConnectionPipeline";
import { CompositeConnectionPipeline } from "./compositeConnectionPipeline";
import { IConnectionPipeline } from "./iConnectionPipeline";
import { LoggingConnectionPipeline } from "./loggingConnectionPipeline";
import { RoomConnectionPipeline } from "./roomConnectionPipeline";

const roomPipeline = new RoomConnectionPipeline();
const cachedPipeline = new CachedConnectionPipeline();
const loggingPipeline = new LoggingConnectionPipeline();

export const pipeline: IConnectionPipeline = new CompositeConnectionPipeline(roomPipeline, cachedPipeline, loggingPipeline);
