package dev.fluttercommunity.arcgis_map_sdk_android.model

import com.esri.arcgisruntime.geometry.Point
import com.esri.arcgisruntime.geometry.Polyline
import com.esri.arcgisruntime.tasks.networkanalysis.DirectionManeuver

class RouteManeuver private constructor(
    val paths: List<List<LatLng>>,
    val directionMessage: String,
    val durationMinutes: Double,
) {
    companion object {
        fun fromDirectionManeuver(maneuver: DirectionManeuver): RouteManeuver {
            val directionMessage = maneuver.directionText
            val estimatedTimeMinutes = maneuver.duration

            return when (maneuver.geometry) {
                is Point -> {
                    // The first and last entry are the start and end Point.
                    val pointGeometry = (maneuver.geometry as Point)
                    RouteManeuver(
                        paths = listOf(
                            listOf(LatLng(pointGeometry.x, pointGeometry.y)),
                        ),
                        directionMessage = directionMessage,
                        durationMinutes = estimatedTimeMinutes,
                    )
                }

                is Polyline -> {
                    // The geometries between the start and end point.
                    val path = (maneuver.geometry as Polyline).parts.partsAsPoints.map {
                        listOf(LatLng(it.x, it.y))
                    }
                    RouteManeuver(
                        paths = path,
                        directionMessage = directionMessage,
                        durationMinutes = estimatedTimeMinutes,
                    )
                }

                else -> throw IllegalArgumentException(
                    "Unsupported geometry type: ${maneuver.geometry?.javaClass?.name}"
                )
            }
        }
    }
}