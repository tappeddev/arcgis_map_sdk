package dev.fluttercommunity.arcgis_map_sdk_android.model

import com.esri.arcgisruntime.tasks.networkanalysis.Route
import dev.fluttercommunity.arcgis_map_sdk_android.gson

class RouteResult(
    val name: String,
    val paths: List<List<LatLng>>,
    val totalLengthMeter: Double,
    val totalTimeMinutes: Double,
) {
    companion object {
        fun fromRoute(route: Route): RouteResult {
            return RouteResult(
                name = route.routeName ?: "Unnamed Route",
                paths = route.routeGeometry.parts.partsAsPoints.map { listOf(LatLng(it.x, it.y)) },
                totalLengthMeter = route.totalLength,
                totalTimeMinutes = route.travelTime
            )
        }
    }

    fun toJson(): Map<String, Any> {
        return mapOf(
            "name" to name,
            "paths" to gson.toJson(paths),
            "totalLengthMeter" to totalLengthMeter,
            "totalTimeMinutes" to totalTimeMinutes
        )
    }
}