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
exports.__esModule = true;
/**
 * Base component, contains some utils
 */
var react_1 = require("react");
var react_native_1 = require("react-native");
var Component = /** @class */ (function (_super) {
    __extends(Component, _super);
    function Component() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Call native method
     */
    Component.prototype.call = function (command, params) {
        // @ts-ignore
        react_native_1.UIManager.dispatchViewManagerCommand(react_native_1.findNodeHandle(this), react_native_1.UIManager.getViewManagerConfig
            ? react_native_1.UIManager.getViewManagerConfig(this.nativeComponent).Commands[command] // RN >= 0.58
            : react_native_1.UIManager[this.nativeComponent].Commands[command], // RN < 0.58
        params);
    };
    /**
     * Generate event handlers
     */
    Component.prototype.handlers = function (events) {
        var _this = this;
        return events.reduce(function (handlers, name) {
            var handler = _this.props[name];
            if (handler) {
                handlers[name.replace(/^on/, "onBaiduMap")] = function (event) { return handler(event.nativeEvent); };
            }
            return handlers;
        }, {});
    };
    return Component;
}(react_1.PureComponent));
exports["default"] = Component;
