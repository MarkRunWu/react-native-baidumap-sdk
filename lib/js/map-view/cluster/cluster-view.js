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
var React = require("react");
var react_native_1 = require("react-native");
var marker_1 = require("../marker");
var style = react_native_1.StyleSheet.create({
    cluster: {
        borderWidth: 4,
        borderColor: "rgba(245,83,61,0.5)",
        backgroundColor: "rgba(245,83,61,0.9)",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "#fff",
        fontWeight: "600"
    }
});
var ClusterView = /** @class */ (function (_super) {
    __extends(ClusterView, _super);
    function ClusterView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onPress = function () {
            if (_this.props.onPress) {
                _this.props.onPress(_this.props.cluster);
            }
        };
        _this.renderClusterView = function () {
            var count = _this.props.cluster.count;
            var size = 36 + Math.log2(count);
            var clusterStyle = {
                width: size,
                height: size,
                borderRadius: size / 2
            };
            return (<react_native_1.TouchableWithoutFeedback>
        <react_native_1.View style={[style.cluster, clusterStyle, _this.props.style]}>
          <react_native_1.Text style={[style.text, _this.props.textStyle]}>{count}</react_native_1.Text>
        </react_native_1.View>
      </react_native_1.TouchableWithoutFeedback>);
        };
        return _this;
    }
    ClusterView.prototype.render = function () {
        return (<marker_1.default flat onPress={this.onPress} coordinate={this.props.cluster.coordinate} view={this.renderClusterView}/>);
    };
    return ClusterView;
}(React.PureComponent));
exports["default"] = ClusterView;
