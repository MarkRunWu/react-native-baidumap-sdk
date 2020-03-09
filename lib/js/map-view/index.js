"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var React = require("react");
var prop_types_1 = require("prop-types");
var react_native_1 = require("react-native");
var prop_types_2 = require("../prop-types");
var component_1 = require("../component");
var marker_1 = require("./marker");
var callout_1 = require("./callout");
var cluster_1 = require("./cluster");
var polyline_1 = require("./polyline");
var polygon_1 = require("./polygon");
var circle_1 = require("./circle");
var heat_map_1 = require("./heat-map");
var events = [
    "onLoad",
    "onClick",
    "onLongClick",
    "onDoubleClick",
    "onStatusChange"
];
var MapView = /** @class */ (function (_super) {
    __extends(MapView, _super);
    function MapView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nativeComponent = "BaiduMapView";
        return _this;
    }
    MapView.prototype.setStatus = function (status, duration) {
        if (duration === void 0) { duration = 0; }
        this.call("setStatus", [status, duration]);
    };
    MapView.prototype.render = function () {
        var props = __assign(__assign({}, this.props), this.handlers(events));
        return <BaiduMapView {...props}/>;
    };
    MapView.propTypes = __assign(__assign(__assign({}, react_native_1.ViewPropTypes), prop_types_2.mapEventsPropType(events)), { satellite: prop_types_1.bool, trafficEnabled: prop_types_1.bool, baiduHeatMapEnabled: prop_types_1.bool, indoorEnabled: prop_types_1.bool, buildingsDisabled: prop_types_1.bool, minZoomLevel: prop_types_1.number, maxZoomLevel: prop_types_1.number, compassDisabled: prop_types_1.bool, zoomControlsDisabled: prop_types_1.bool, scaleBarDisabled: prop_types_1.bool, scrollDisabled: prop_types_1.bool, overlookDisabled: prop_types_1.bool, rotateDisabled: prop_types_1.bool, zoomDisabled: prop_types_1.bool, center: prop_types_2.LatLngPropType, zoomLevel: prop_types_1.number, rotation: prop_types_1.number, overlook: prop_types_1.number, locationEnabled: prop_types_1.bool, location: prop_types_2.LocationPropType, locationMode: prop_types_1.string, paused: prop_types_1.bool });
    MapView.Marker = marker_1["default"];
    MapView.Callout = callout_1["default"];
    MapView.Cluster = cluster_1["default"];
    MapView.Polyline = polyline_1["default"];
    MapView.Polygon = polygon_1["default"];
    MapView.Circle = circle_1["default"];
    MapView.HeatMap = heat_map_1["default"];
    return MapView;
}(component_1["default"]));
exports["default"] = MapView;
var BaiduMapView = react_native_1.requireNativeComponent("BaiduMapView", MapView);
