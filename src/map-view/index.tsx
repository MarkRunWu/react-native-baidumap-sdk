import * as React from "react";
import { number, bool, string } from "prop-types";
import {
  requireNativeComponent,
  ViewProps,
  ViewPropTypes,
  Platform,
  NativeModules,
  findNodeHandle
} from "react-native";
import { LatLngPropType, LocationPropType, mapEventsPropType } from "../prop-types";
import { LatLng, Location, MapStatus, Point, Region } from "../types";
import Component from "../component";
import Marker from "./marker";
import Callout from "./callout";
import Cluster from "./cluster";
import Polyline from "./polyline";
import Polygon from "./polygon";
import Circle from "./circle";
import HeatMap from "./heat-map";
const { BaiduMapUtil } = NativeModules;

type Status = {
  center?: LatLng;
  point?: Point;
  region?: Region;
  overlook?: number;
  rotation?: number;
  zoomLevel?: number;
};

type Props = {
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

const events = ["onLoad", "onClick", "onLongClick", "onDoubleClick", "onStatusChange"];

export default class MapView extends Component<Props> {
  map: React.RefObject<any> = React.createRef();

  static propTypes = {
    ...ViewPropTypes,
    ...mapEventsPropType(events),
    satellite: bool,
    trafficEnabled: bool,
    baiduHeatMapEnabled: bool,
    indoorEnabled: bool,
    buildingsDisabled: bool,
    minZoomLevel: number,
    maxZoomLevel: number,
    compassDisabled: bool,
    zoomControlsDisabled: bool,
    scaleBarDisabled: bool,
    scrollDisabled: bool,
    overlookDisabled: bool,
    rotateDisabled: bool,
    zoomDisabled: bool,
    center: LatLngPropType,
    zoomLevel: number,
    rotation: number,
    overlook: number,
    locationEnabled: bool,
    location: LocationPropType,
    locationMode: string,
    paused: bool
  };

  setStatus(status: Status, duration: number = 0) {
    this.call("setStatus", [status, duration]);
  }

  pointForCoordinate(coordinate: LatLng) {
    if (Platform.OS === "android") {
      return BaiduMapUtil.pointForCoordinate(findNodeHandle(this.map), coordinate) as Promise<
        Point
      >;
    }
  }
  coordinateForPoint(point: Point) {
    if (Platform.OS === "android") {
      return BaiduMapUtil.coordinateForPoint(findNodeHandle(this.map), point) as Promise<LatLng>;
    }
  }

  nativeComponent = "BaiduMapView";

  render() {
    const props = {
      ...this.props,
      ...this.handlers(events)
    };
    return (
      <BaiduMapView
        ref={ref => {
          this.map = ref;
        }}
        {...props}
      />
    );
  }

  static Marker = Marker;
  static Callout = Callout;
  static Cluster = Cluster;
  static Polyline = Polyline;
  static Polygon = Polygon;
  static Circle = Circle;
  static HeatMap = HeatMap;
}

const BaiduMapView = requireNativeComponent("BaiduMapView", MapView);
