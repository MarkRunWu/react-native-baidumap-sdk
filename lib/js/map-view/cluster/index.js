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
var supercluster_1 = require("supercluster");
var cluster_view_1 = require("./cluster-view");
var Cluster = /** @class */ (function (_super) {
    __extends(Cluster, _super);
    function Cluster() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { clusters: [] };
        _this.renderCluster = function (cluster) { return (<cluster_view_1.default key={cluster.id} cluster={cluster} onPress={_this.props.onPress} style={_this.props.clusterStyle} textStyle={_this.props.clusterTextStyle}/>); };
        return _this;
    }
    Cluster.prototype.componentDidMount = function () {
        this.init(this.props);
    };
    Cluster.prototype.componentWillReceiveProps = function (props) {
        this.init(props);
    };
    Cluster.prototype.init = function (props) {
        var radius = props.radius;
        this.cluster = supercluster_1["default"]({ radius: radius, minZoom: 3, maxZoom: 21 }).load(props.markers.map(function (marker) { return ({
            geometry: {
                coordinates: [
                    marker.coordinate.longitude,
                    marker.coordinate.latitude
                ],
                properties: marker.extra
            }
        }); }));
    };
    Cluster.prototype.update = function (_a) {
        var zoomLevel = _a.zoomLevel, region = _a.region;
        this.setState({
            clusters: this.cluster.getClusters([
                region.longitude - region.longitudeDelta / 2,
                region.latitude - region.latitudeDelta / 2,
                region.longitude + region.longitudeDelta / 2,
                region.latitude + region.latitudeDelta / 2
            ], Math.round(zoomLevel))
        });
    };
    Cluster.prototype.render = function () {
        var _this = this;
        return this.state.clusters.map(function (cluster) {
            var geometry = cluster.geometry, properties = cluster.properties;
            var _a = _this.props, renderCluster = _a.renderCluster, renderMarker = _a.renderMarker;
            var coordinate = {
                latitude: geometry.coordinates[1],
                longitude: geometry.coordinates[0]
            };
            if (properties) {
                var _b = cluster.properties, cluster_id = _b.cluster_id, point_count = _b.point_count;
                var render = renderCluster || _this.renderCluster;
                return render({ coordinate: coordinate, id: cluster_id, count: point_count });
            }
            return renderMarker({ coordinate: coordinate, extra: geometry.properties });
        });
    };
    Cluster.defaultProps = { radius: 600 };
    return Cluster;
}(React.PureComponent));
exports["default"] = Cluster;
