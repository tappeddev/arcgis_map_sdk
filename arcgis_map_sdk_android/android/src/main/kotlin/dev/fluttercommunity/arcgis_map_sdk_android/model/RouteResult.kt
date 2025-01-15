package dev.fluttercommunity.arcgis_map_sdk_android.model

import com.esri.arcgisruntime.tasks.networkanalysis.Route
import dev.fluttercommunity.arcgis_map_sdk_android.gson

// TODO(Jean): Rename this
// ArcGIS already defines a RouteResult
class RouteResult(
    val name: String,
    val paths: List<List<LatLng>>,
    val maneuvers: List<RouteManeuver>,
    val totalLengthMeter: Double,
    val totalTimeMinutes: Double,
) {
    companion object {
        fun fromRoute(route: Route): RouteResult {
            return RouteResult(
                name = route.routeName,
                paths = route.routeGeometry.parts.partsAsPoints.map { listOf(LatLng(it.x, it.y)) },
                maneuvers = route.directionManeuvers.map { RouteManeuver.fromDirectionManeuver(it) },
                totalLengthMeter = route.totalLength,
                totalTimeMinutes = route.travelTime
            )
        }
    }

    fun toJson(): Map<String, Any> {
        return mapOf(
            "name" to name,
            "paths" to gson.toJson(paths),
            "maneuvers" to gson.toJson(maneuvers),
            "totalLengthMeter" to totalLengthMeter,
            "totalTimeMinutes" to totalTimeMinutes
        )
    }
}