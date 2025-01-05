class PointOfInterest {
  final String identifier;
  final double latitude;
  final double longitude;

  PointOfInterest({
    required this.identifier,
    required this.latitude,
    required this.longitude,
  });

  Map<String, dynamic> toJson() {
    return {
      'identifier': identifier,
      'longitude': longitude,
      'latitude': latitude,
    };
  }
}
