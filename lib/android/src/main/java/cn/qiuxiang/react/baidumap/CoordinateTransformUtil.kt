package cn.qiuxiang.react.baidumap

import cn.qiuxiang.react.baidumap.CoordinateTransformUtil.gcj02tobd09
import cn.qiuxiang.react.baidumap.CoordinateTransformUtil.gcj02towgs84
import com.baidu.mapapi.model.LatLng

/**
 * 百度坐标（BD09）、国测局坐标（火星坐标，GCJ02）、和WGS84坐标系之间的转换的工具
 *
 *
 * 参考 https://github.com/wandergis/coordtransform 实现的Java版本
 *
 * @author geosmart
 */
object CoordinateTransformUtil {
    internal var x_pi = 3.14159265358979324 * 3000.0 / 180.0
    // π
    internal var pi = 3.1415926535897932384626
    // 长半轴
    internal var a = 6378245.0
    // 扁率
    internal var ee = 0.00669342162296594323

    /**
     * 百度坐标系(BD-09)转WGS坐标
     *
     * @param lng 百度坐标纬度
     * @param lat 百度坐标经度
     * @return WGS84坐标数组
     */
    fun bd09towgs84(location: LatLng): LatLng {
        val gcj = bd09togcj02(location)
        return gcj02towgs84(gcj)
    }

    /**
     * WGS坐标转百度坐标系(BD-09)
     *
     * @param lng WGS84坐标系的经度
     * @param lat WGS84坐标系的纬度
     * @return 百度坐标数组
     */
    fun wgs84tobd09(location: LatLng): LatLng {
        val gcj = wgs84togcj02(location)
        return gcj02tobd09(gcj)
    }

    /**
     * 火星坐标系(GCJ-02)转百度坐标系(BD-09)
     *
     *
     * 谷歌、高德——>百度
     *
     * @param lng 火星坐标经度
     * @param lat 火星坐标纬度
     * @return 百度坐标数组
     */
    fun gcj02tobd09(location: LatLng): LatLng {
        val lng = location.longitude
        val lat = location.latitude
        val z = Math.sqrt(lng * lng + lat * lat) + 0.00002 * Math.sin(lat * x_pi)
        val theta = Math.atan2(lat, lng) + 0.000003 * Math.cos(lng * x_pi)
        val bd_lng = z * Math.cos(theta) + 0.0065
        val bd_lat = z * Math.sin(theta) + 0.006
        return LatLng(bd_lat, bd_lng)
    }

    /**
     * 百度坐标系(BD-09)转火星坐标系(GCJ-02)
     *
     *
     * 百度——>谷歌、高德
     *
     * @param bd_lon 百度坐标纬度
     * @param bd_lat 百度坐标经度
     * @return 火星坐标数组
     */
    fun bd09togcj02(location: LatLng): LatLng {
        val bd_lat = location.latitude
        val bd_lon = location.longitude
        val x = bd_lon - 0.0065
        val y = bd_lat - 0.006
        val z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi)
        val theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi)
        val gg_lng = z * Math.cos(theta)
        val gg_lat = z * Math.sin(theta)
        return LatLng(gg_lat, gg_lng)
    }

    /**
     * WGS84转GCJ02(火星坐标系)
     *
     * @param lng WGS84坐标系的经度
     * @param lat WGS84坐标系的纬度
     * @return 火星坐标数组
     */
    fun wgs84togcj02(location: LatLng): LatLng {
        if (out_of_china(location)) {
            return location
        }
        val lng = location.longitude
        val lat = location.latitude
        var dlat = transformlat(LatLng(lat - 35.0, lng - 105.0))
        var dlng = transformlng(LatLng(lat - 35.0, lng - 105.0))
        val radlat = lat / 180.0 * pi
        var magic = Math.sin(radlat)
        magic = 1 - ee * magic * magic
        val sqrtmagic = Math.sqrt(magic)
        dlat = dlat * 180.0 / (a * (1 - ee) / (magic * sqrtmagic) * pi)
        dlng = dlng * 180.0 / (a / sqrtmagic * Math.cos(radlat) * pi)
        val mglat = lat + dlat
        val mglng = lng + dlng
        return LatLng(mglat, mglng)
    }

    /**
     * GCJ02(火星坐标系)转GPS84
     *
     * @param lng 火星坐标系的经度
     * @param lat 火星坐标系纬度
     * @return WGS84坐标数组
     */
    fun gcj02towgs84(location: LatLng): LatLng {
        if (out_of_china(location)) {
            return location
        }
        val lng = location.longitude
        val lat = location.latitude
        var dlat = transformlat(LatLng(lat - 35.0, lng - 105.0))
        var dlng = transformlng(LatLng(lat - 35.0, lng - 105.0))
        val radlat = lat / 180.0 * pi
        var magic = Math.sin(radlat)
        magic = 1 - ee * magic * magic
        val sqrtmagic = Math.sqrt(magic)
        dlat = dlat * 180.0 / (a * (1 - ee) / (magic * sqrtmagic) * pi)
        dlng = dlng * 180.0 / (a / sqrtmagic * Math.cos(radlat) * pi)
        val mglat = lat + dlat
        val mglng = lng + dlng
        return LatLng(lat * 2 - mglat, lng * 2 - mglng)
    }

    /**
     * 纬度转换
     *
     * @param lng
     * @param lat
     * @return
     */
    fun transformlat(location: LatLng): Double {
        val lng = location.longitude
        val lat = location.latitude
        var ret = -100.0 + 2.0 * lng + 3.0 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * Math.sqrt(Math.abs(lng))
        ret += (20.0 * Math.sin(6.0 * lng * pi) + 20.0 * Math.sin(2.0 * lng * pi)) * 2.0 / 3.0
        ret += (20.0 * Math.sin(lat * pi) + 40.0 * Math.sin(lat / 3.0 * pi)) * 2.0 / 3.0
        ret += (160.0 * Math.sin(lat / 12.0 * pi) + 320 * Math.sin(lat * pi / 30.0)) * 2.0 / 3.0
        return ret
    }

    /**
     * 经度转换
     *
     * @param lng
     * @param lat
     * @return
     */
    fun transformlng(location: LatLng): Double {
        val lng = location.longitude
        val lat = location.latitude
        var ret = 300.0 + lng + 2.0 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * Math.sqrt(Math.abs(lng))
        ret += (20.0 * Math.sin(6.0 * lng * pi) + 20.0 * Math.sin(2.0 * lng * pi)) * 2.0 / 3.0
        ret += (20.0 * Math.sin(lng * pi) + 40.0 * Math.sin(lng / 3.0 * pi)) * 2.0 / 3.0
        ret += (150.0 * Math.sin(lng / 12.0 * pi) + 300.0 * Math.sin(lng / 30.0 * pi)) * 2.0 / 3.0
        return ret
    }

    /**
     * 判断是否在国内，不在国内不做偏移
     *
     * @param lng
     * @param lat
     * @return
     */
    fun out_of_china(location: LatLng): Boolean {
        val lng = location.longitude
        val lat = location.latitude
        if (lng < 72.004 || lng > 137.8347) {
            return true
        } else if (lat < 0.8293 || lat > 55.8271) {
            return true
        }
        return false
    }
}
