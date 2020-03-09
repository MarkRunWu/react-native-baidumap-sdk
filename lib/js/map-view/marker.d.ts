import * as React from "react";
import { ViewProps } from "react-native";
import Component from "../component";
import { LatLng, Point } from "../types";
declare type Props = {
    coordinate: LatLng;
    color?: string;
    image?: string;
    view?: React.ComponentType<any>;
    title?: string;
    selected?: boolean;
    draggable?: boolean;
    flat?: boolean;
    centerOffset?: Point;
    onPress?: () => void;
    onCalloutPress?: () => void;
    onDrag?: (coordinate: LatLng) => void;
    onDragStart?: (coordinate: LatLng) => void;
    onDragEnd?: (coordinate: LatLng) => void;
} & ViewProps;
export default class Marker extends Component<Props> {
    static propTypes: any;
    componentDidUpdate(): void;
    nativeComponent: string;
    select(): void;
    update(): void;
    renderMarkerView(): JSX.Element;
    render(): JSX.Element;
}
export {};
