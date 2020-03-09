"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var BaiduMapGeocode = react_native_1.NativeModules.BaiduMapGeocode;
exports["default"] = {
    search: function (address, city) {
        if (city === void 0) { city = ""; }
        return BaiduMapGeocode.search(address, city);
    },
    reverse: function (coordinate) {
        return BaiduMapGeocode.reverse(coordinate);
    }
};
