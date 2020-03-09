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
var style = react_native_1.StyleSheet.create({
    marker: {
        position: "absolute"
    }
});
var events = [
    "onPress",
    "onCalloutPress",
    "onDrag",
    "onDragStart",
    "onDragEnd"
];
var Marker = /** @class */ (function (_super) {
    __extends(Marker, _super);
    function Marker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nativeComponent = "BaiduMapMarker";
        return _this;
    }
    Marker.prototype.componentDidUpdate = function () {
        if (this.props.view && react_native_1.Platform.OS === "android") {
            this.update();
        }
    };
    Marker.prototype.select = function () {
        this.call("select");
    };
    Marker.prototype.update = function () {
        this.call("update");
    };
    Marker.prototype.renderMarkerView = function () {
        if (this.props.view) {
            // @ts-ignore
            var markerView = <this.props.view />;
            return (<react_native_1.View style={style.marker} key="marker">
          {markerView}
        </react_native_1.View>);
        }
        return null;
    };
    Marker.prototype.render = function () {
        var props = __assign(__assign(__assign({}, this.props), this.handlers(events)), { children: [this.props.children, this.renderMarkerView()] });
        return <BaiduMapMarker {...props}/>;
    };
    Marker.propTypes = __assign(__assign(__assign({}, react_native_1.ViewPropTypes), prop_types_2.mapEventsPropType(events)), { coordinate: prop_types_2.LatLngPropType.isRequired, color: react_native_1.ColorPropType, image: prop_types_1.string, title: prop_types_1.string, selected: prop_types_1.bool, draggable: prop_types_1.bool, flat: prop_types_1.bool, centerOffset: prop_types_2.PointPropType });
    return Marker;
}(component_1["default"]));
exports["default"] = Marker;
var BaiduMapMarker = react_native_1.requireNativeComponent("BaiduMapMarker", Marker);
