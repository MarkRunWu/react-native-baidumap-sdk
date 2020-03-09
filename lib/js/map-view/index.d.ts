/// <reference types="react" />
import { ViewProps } from "react-native";
import { LatLng, Location, MapStatus, Point, Region } from "../types";
import Component from "../component";
import Marker from "./marker";
import Callout from "./callout";
import Cluster from "./cluster";
declare type Status = {
    center?: LatLng;
    point?: Point;
    region?: Region;
    overlook?: number;
    rotation?: number;
    zoomLevel?: number;
};
declare type Props = {
    satellite?: boolean;
    trafficEnabled?: boolean;
    baiduHeatMapEnabled?: boolean;
    indoorEnabled?: boolean;
    buildingsDisabled?: boolean;
    minZoomLevel?: number;
    maxZoomLevel?: number;
    compassDisabled?: boolean;
    zoomControlsDisabled?: boolean;
    scaleBarDisabled?: boolean;
    scrollDisabled?: boolean;
    overlookDisabled?: boolean;
    rotateDisabled?: boolean;
    zoomDisalbed?: boolean;
    center?: LatLng;
    zoomLevel?: number;
    rotation?: number;
    overlook?: number;
    paused?: boolean;
    locationEnabled?: boolean;
    location?: Location;
    locationMode?: "normal" | "follow" | "compass";
    campassMode?: true;
    onLoad?: () => void;
    onClick?: (coordinate: LatLng) => void;
    onLongClick?: (coordinate: LatLng) => void;
    onDoubleClick?: (coordinate: LatLng) => void;
    onStatusChange?: (mapStatus: MapStatus) => void;
} & ViewProps;
export default class MapView extends Component<Props> {
    static propTypes: any;
    setStatus(status: Status, duration?: number): void;
    nativeComponent: string;
    render(): JSX.Element;
    static Marker: typeof Marker;
    static Callout: typeof Callout;
    static Cluster: typeof Cluster;
    static Polyline: any;
    static Polygon: any;
    static Circle: any;
    static HeatMap: any;
}
export {};
