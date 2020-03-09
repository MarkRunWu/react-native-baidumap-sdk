import MapView from "./map-view";
import Location from "./modules/location";
import Geocode from "./modules/geocode";
import Initializer from "./modules/initializer";
declare const _default: {
    MapView: typeof MapView;
    Location: {
        init(): Promise<void>;
        start: () => any;
        stop: () => any;
        setOptions: (options: {
            gps: boolean;
            distanceFilter: number;
        }) => any;
        addLocationListener: (listener: (listener: {
            timestamp: number;
            altitude: number;
            speed: number;
        } & import("./types").Location) => void) => any;
    };
    Geocode: {
        search(address: string, city?: string): Promise<{
            address: string;
        } & import("./types").LatLng>;
        reverse(coordinate: import("./types").LatLng): Promise<{
            country: string;
            countryCode: string;
            province: string;
            city: string;
            cityCode: string;
            district: string;
            street: string;
            streetNumber: string;
            businessCircle: string;
            adCode: string;
            address: string;
            description: string;
        } & import("./types").LatLng>;
    };
    Initializer: {
        init(key: string): any;
    };
};
export default _default;
export { MapView, Location, Geocode, Initializer };
