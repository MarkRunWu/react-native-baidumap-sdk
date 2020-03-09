export declare type Point = {
    x: number;
    y: number;
};
export declare type LatLng = {
    latitude: number;
    longitude: number;
};
export declare type Region = {
    latitudeDelta: number;
    longitudeDelta: number;
} & LatLng;
export declare type MapStatus = {
    center: LatLng;
    region: Region;
    overlook: number;
    rotation: number;
    zoomLevel: number;
};
export declare type Location = {
    accuracy?: number;
    latitude: number;
    longitude: number;
    direction: number;
};
export declare type EdgePadding = {
    top: Number;
    right: Number;
    bottom: Number;
    left: Number;
};
