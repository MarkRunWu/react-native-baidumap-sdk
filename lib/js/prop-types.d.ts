export declare const LatLngPropType: import("prop-types").Requireable<import("prop-types").InferProps<{
    latitude: import("prop-types").Validator<number>;
    longitude: import("prop-types").Validator<number>;
}>>;
export declare const RegionPropType: import("prop-types").Requireable<import("prop-types").InferProps<{
    latitude: import("prop-types").Validator<number>;
    longitude: import("prop-types").Validator<number>;
    latitudeDelta: import("prop-types").Validator<number>;
    longitudeDelta: import("prop-types").Validator<number>;
}>>;
export declare const PointPropType: import("prop-types").Requireable<import("prop-types").InferProps<{
    x: import("prop-types").Validator<number>;
    y: import("prop-types").Validator<number>;
}>>;
export declare const LocationPropType: import("prop-types").Requireable<import("prop-types").InferProps<{
    accuracy: import("prop-types").Requireable<number>;
    direction: import("prop-types").Requireable<number>;
    latitude: import("prop-types").Validator<number>;
    longitude: import("prop-types").Validator<number>;
}>>;
export declare function mapEventsPropType(events: any): any;
