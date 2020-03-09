"use strict";
exports.__esModule = true;
var prop_types_1 = require("prop-types");
exports.LatLngPropType = prop_types_1.shape({
    latitude: prop_types_1.number.isRequired,
    longitude: prop_types_1.number.isRequired
});
exports.RegionPropType = prop_types_1.shape({
    latitude: prop_types_1.number.isRequired,
    longitude: prop_types_1.number.isRequired,
    latitudeDelta: prop_types_1.number.isRequired,
    longitudeDelta: prop_types_1.number.isRequired
});
exports.PointPropType = prop_types_1.shape({
    x: prop_types_1.number.isRequired,
    y: prop_types_1.number.isRequired
});
exports.LocationPropType = prop_types_1.shape({
    accuracy: prop_types_1.number,
    direction: prop_types_1.number,
    latitude: prop_types_1.number.isRequired,
    longitude: prop_types_1.number.isRequired
});
function mapEventsPropType(events) {
    return events.reduce(function (props, event) {
        props[event.replace(/^on/, "onBaiduMap")] = prop_types_1.func;
        return props;
    }, {});
}
exports.mapEventsPropType = mapEventsPropType;
