import { LatLng } from "../types";
declare type SearchResult = {
    address: string;
} & LatLng;
declare type ReverseResult = {
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
} & LatLng;
declare const _default: {
    search(address: string, city?: string): Promise<SearchResult>;
    reverse(coordinate: LatLng): Promise<ReverseResult>;
};
export default _default;
