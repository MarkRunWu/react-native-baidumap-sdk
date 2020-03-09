import * as React from "react";
import { ViewStyle } from "react-native";
import SuperCluster from "supercluster";
import { LatLng, MapStatus } from "../../types";
export declare type ClusterParams = {
    id: number;
    count: number;
    coordinate: LatLng;
};
declare type MarkerItem = {
    coordinate: LatLng;
    extra?: any;
};
declare type Props = {
    radius?: number;
    clusterStyle?: ViewStyle;
    clusterTextStyle?: ViewStyle;
    markers: MarkerItem[];
    renderMarker: (item: MarkerItem) => React.ComponentType<any>;
    renderCluster?: (params: ClusterParams) => React.ComponentType<any>;
    onPress?: (params: ClusterParams) => void;
};
declare type State = {
    clusters: {
        geometry: {
            coordinates: [number, number];
            properties: any;
        };
        properties: {
            cluster_id: number;
            point_count: number;
        };
    }[];
};
export default class Cluster extends React.PureComponent<Props, State> {
    static defaultProps: {
        radius: number;
    };
    state: {
        clusters: any[];
    };
    componentDidMount(): void;
    componentWillReceiveProps(props: Props): void;
    cluster: SuperCluster;
    init(props: Props): void;
    update({ zoomLevel, region }: MapStatus): void;
    renderCluster: (cluster: ClusterParams) => JSX.Element;
    render(): (React.ComponentClass<any, any> | React.FunctionComponent<any> | JSX.Element)[];
}
export {};
