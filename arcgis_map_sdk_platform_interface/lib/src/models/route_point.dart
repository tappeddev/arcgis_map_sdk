class RoutePoint {
  final String name;
  final double latitude;
  final double longitude;

  RoutePoint({
    required this.name,
    required this.latitude,
    required this.longitude,
  });

  Map<String, dynamic> toJson() {
    return {
      'name': name,
      'longitude': longitude,
      'latitude': latitude,
    };
  }
}
