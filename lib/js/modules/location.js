"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var BaiduMapLocation = react_native_1.NativeModules.BaiduMapLocation;
var eventEmitter = new react_native_1.NativeEventEmitter(BaiduMapLocation);
exports["default"] = {
    init: function () {
        if (BaiduMapLocation.init) {
            return BaiduMapLocation.init();
        }
        return Promise.resolve();
    },
    start: function () { return BaiduMapLocation.start(); },
    stop: function () { return BaiduMapLocation.stop(); },
    setOptions: function (options) { return BaiduMapLocation.setOptions(options); },
    addLocationListener: function (listener) {
        return eventEmitter.addListener("baiduMapLocation", listener);
    }
};
