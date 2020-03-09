import { Location } from "../types";
declare type Options = {
    gps: boolean;
    distanceFilter: number;
};
declare type Listener = (listener: {
    timestamp: number;
    altitude: number;
    speed: number;
} & Location) => void;
declare const _default: {
    init(): Promise<void>;
    start: () => any;
    stop: () => any;
    setOptions: (options: Options) => any;
    addLocationListener: (listener: Listener) => any;
};
export default _default;
