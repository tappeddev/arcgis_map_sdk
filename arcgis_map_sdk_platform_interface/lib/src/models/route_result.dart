import 'dart:convert';

import 'package:arcgis_map_sdk_platform_interface/arcgis_map_sdk_platform_interface.dart';

class RouteResult {
  final String name;
  final List<List<List<double>>> paths;
  final double totalLengthMeter;
  final double totalTimeMinutes;

  RouteResult({
    required this.name,
    required this.paths,
    required this.totalLengthMeter,
    required this.totalTimeMinutes,
  });

  factory RouteResult.fromJson(Map<dynamic, dynamic> jsonRouteResult) {
    final rawPath = jsonDecode(jsonRouteResult["paths"] as String);

    final List<List<LatLng>> jsonPaths = (rawPath as List)
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

    return RouteResult(
      name: jsonRouteResult['name'] as String,
      paths: paths,
      totalLengthMeter: jsonRouteResult['totalLengthMeter'] as double,
      totalTimeMinutes: jsonRouteResult['totalTimeMinutes'] as double,
    );
  }
}
