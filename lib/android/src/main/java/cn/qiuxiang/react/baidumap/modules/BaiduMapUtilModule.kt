package cn.qiuxiang.react.baidumap.modules

import android.graphics.Point
import cn.qiuxiang.react.baidumap.mapview.BaiduMapView
import com.baidu.mapapi.model.LatLng
import com.facebook.react.bridge.*
import com.facebook.react.uimanager.NativeViewHierarchyManager
import com.facebook.react.uimanager.UIBlock
import com.facebook.react.uimanager.UIManagerModule

class BaiduMapUtilModule(context: ReactApplicationContext) : ReactContextBaseJavaModule(context) {


    override fun getName(): String {
        return "BaiduMapUtil"
    }

    @ReactMethod
    fun pointForCoordinate(tag: Int, coordinate: ReadableMap, promise: Promise) {
        val coord = LatLng(
                if (coordinate.hasKey("latitude")) coordinate.getDouble("latitude") else 0.0,
                if (coordinate.hasKey("longitude")) coordinate.getDouble("longitude") else 0.0
        )
        val context = reactApplicationContext
        val uiManager = context.getNativeModule<UIManagerModule>(UIManagerModule::class.java)
        uiManager.addUIBlock(object : UIBlock {
            override fun execute(nvhm: NativeViewHierarchyManager) {
                val view = nvhm.resolveView(tag) as? BaiduMapView
                if (view == null) {
                    promise.reject("Baidumap not found")
                    return
                }

                val pt = view.map.projection.toScreenLocation(coord)

                val ptJson = WritableNativeMap()
                ptJson.putDouble("x", pt.x.toDouble())
                ptJson.putDouble("y", pt.y.toDouble())

                promise.resolve(ptJson)
            }
        })
    }

    @ReactMethod
    fun coordinateForPoint(tag: Int, point: ReadableMap, promise: Promise) {
        val point = Point(
                if (point.hasKey("x")) point.getInt("x") else 0,
                if (point.hasKey("y")) point.getInt("y") else 0
        )
        val context = reactApplicationContext
        val uiManager = context.getNativeModule<UIManagerModule>(UIManagerModule::class.java)
        uiManager.addUIBlock(object : UIBlock {
            override fun execute(nvhm: NativeViewHierarchyManager) {
                val view = nvhm.resolveView(tag) as? BaiduMapView
                if (view == null) {
                    promise.reject("Baidumap not found")
                    return
                }

                val coordinate = view.map.projection.fromScreenLocation(point)

                val coordinateJson = WritableNativeMap()
                coordinateJson.putDouble("latitude", coordinate.latitude)
                coordinateJson.putDouble("longitude", coordinate.longitude)

                promise.resolve(coordinateJson)
            }
        })
    }
}