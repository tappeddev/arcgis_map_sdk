import 'package:latlong2/latlong.dart';

class RouteManeuver {
  final LatLng? routeEdgePoint;
  final List<List<List<double>>>? paths;
  final String directionMessage;
  final double durationMinutes;

  RouteManeuver({
    required this.paths,
    required this.directionMessage,
    required this.durationMinutes,
  }) : routeEdgePoint = null;

  RouteManeuver.boundary({
    required this.routeEdgePoint,
    required this.directionMessage,
    required this.durationMinutes,
  }) : paths = null;

  factory RouteManeuver.fromJson(Map<dynamic, dynamic> jsonRouteManeuver) {
    final maneuverPaths = jsonRouteManeuver['paths'] as List;

    // The boundaries of a route are represented as a single point.
    if (maneuverPaths.length == 1) {
      final coordinates = maneuverPaths.first as List;

      final edgePoint = LatLng.fromJson(
        {
          "coordinates": [
            // TODO(Jean): Fix type warning!
            coordinates.first["longitude"],
            coordinates.first["latitude"]
          ],
        },
      );

      return RouteManeuver.boundary(
        routeEdgePoint: edgePoint,
        directionMessage: jsonRouteManeuver['directionMessage'] as String,
        durationMinutes: jsonRouteManeuver['durationMinutes'] as double,
      );
    }

    final List<List<LatLng>> jsonPaths = maneuverPaths
        .map(
          (innerList) => (innerList as List)
              .map(
                (point) => LatLng.fromJson(
                  {
                    // TODO(Jean): Fix type warning!
                    "coordinates": [point["longitude"], point["latitude"]],
                  },
                ),
              )
              .toList(),
        )
        .toList();

    final List<List<LatLng>> pairedRoutes = [];
    for (int i = 0; i < jsonPaths.length - 1; i++) {
      pairedRoutes.add([jsonPaths[i].last, jsonPaths[i + 1].first]);
    }

    final List<List<List<double>>> paths = pairedRoutes
        .map(
          (e) => [
            [e[0].longitude, e[0].latitude, 10.0],
            [e[1].longitude, e[1].latitude, 10.0],
          ],
        )
        .toList();

    return RouteManeuver(
      paths: paths,
      directionMessage: jsonRouteManeuver['directionMessage'] as String,
      durationMinutes: jsonRouteManeuver['durationMinutes'] as double,
    );
  }
}
