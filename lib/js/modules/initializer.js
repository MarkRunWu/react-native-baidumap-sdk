"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var BaiduMapInitializer = react_native_1.NativeModules.BaiduMapInitializer;
exports["default"] = {
    init: function (key) {
        if (react_native_1.Platform.OS === "android") {
            return BaiduMapInitializer.init();
        }
        return BaiduMapInitializer.init(key);
    }
};
