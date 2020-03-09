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
var react_native_1 = require("react-native");
var component_1 = require("../component");
var style = react_native_1.StyleSheet.create({
    callout: {
        position: "absolute"
    }
});
var Callout = /** @class */ (function (_super) {
    __extends(Callout, _super);
    function Callout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nativeComponent = "BaiduMapCallout";
        return _this;
    }
    Callout.prototype.render = function () {
        var props = __assign(__assign(__assign({}, this.props), this.handlers(["onPress"])), { style: [style.callout, this.props.style] });
        return <BaiduMapCallout {...props}/>;
    };
    Callout.propTypes = react_native_1.ViewPropTypes;
    return Callout;
}(component_1["default"]));
exports["default"] = Callout;
var BaiduMapCallout = react_native_1.requireNativeComponent("BaiduMapCallout", Callout);
