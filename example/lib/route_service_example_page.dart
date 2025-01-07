import 'package:arcgis_map_sdk/arcgis_map_sdk.dart';
import 'package:flutter/material.dart';
import 'package:arcgis_example/main.dart';

class RouteServiceExamplePage extends StatefulWidget {
  const RouteServiceExamplePage({super.key});

  @override
  State<RouteServiceExamplePage> createState() =>
      _RouteServiceExamplePageState();
}

class _RouteServiceExamplePageState extends State<RouteServiceExamplePage> {
  final tappedHQ = const LatLng(48.1234963, 11.5910182);
  final routeTargets = [
    LatLng(
      48.204473809410615,
      11.4513423666358,
    ),
    LatLng(
      47.999994378117485,
      11.351004003301153,
    ),
  ];

  ArcgisMapController? _controller;

  final AppBar _appBar = AppBar(
    centerTitle: true,
    title: Text("Route Service Example"),
  );

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: _appBar,
      body: Stack(
        children: [
          ArcgisMap(
            mapStyle: MapStyle.twoD,
            apiKey: arcGisApiKey,
            basemap: BaseMap.osmDarkGray,
            showLabelsBeneathGraphics: true,
            initialCenter: tappedHQ,
            zoom: 8,
            rotationEnabled: true,
            onMapCreated: (controller) {
              _controller = controller;
            },
            defaultUiList: [
              DefaultWidget(
                viewType: DefaultWidgetType.compass,
                position: WidgetPosition.topRight,
              ),
            ],
            // TODO(Review): This seems to work but probably only in san diego
            // Use this url to implement the methods and remove it afterwards
            closestFacilitiesUrl:
                "https://sampleserver6.arcgisonline.com/arcgis/rest/services/NetworkAnalysis/SanDiego/NAServer/ClosestFacility",
            //closestFacilitiesUrl: "https://route.arcgis.com/arcgis/rest/services/World/ClosestFacility/NAServer/ClosestFacility_World",
            routeServiceUrl:
                "https://route-api.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World",
          ),
          Positioned(
            bottom: 100,
            right: 10,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                FloatingActionButton(
                  heroTag: "zoom-in",
                  onPressed: () {
                    _controller?.zoomIn(
                      lodFactor: 1,
                      animationOptions: AnimationOptions(
                        duration: 1000,
                        animationCurve: AnimationCurve.easeIn,
                      ),
                    );
                  },
                  backgroundColor: Colors.grey,
                  child: const Icon(Icons.add),
                ),
                const SizedBox(height: 10),
                FloatingActionButton(
                  heroTag: "zoom-out",
                  onPressed: () {
                    _controller?.zoomOut(
                      lodFactor: 1,
                      animationOptions: AnimationOptions(
                        duration: 1000,
                        animationCurve: AnimationCurve.easeIn,
                      ),
                    );
                  },
                  backgroundColor: Colors.grey,
                  child: const Icon(Icons.remove),
                ),
                const SizedBox(height: 10),
                FloatingActionButton(
                  heroTag: "center-camera",
                  backgroundColor: Colors.red,
                  child: const Icon(Icons.place_outlined),
                  onPressed: () {
                    _controller?.moveCamera(
                      point: tappedHQ,
                      zoomLevel: 8.0,
                      threeDHeading: 30,
                      threeDTilt: 60,
                      animationOptions: AnimationOptions(
                        duration: 1500,
                        animationCurve: AnimationCurve.easeIn,
                      ),
                    );
                  },
                ),
              ],
            ),
          ),
          Positioned(
            bottom: 100,
            left: 10,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                FloatingActionButton(
                  heroTag: "route-to-target-one",
                  onPressed: () async {
                    final routeResult = await _controller?.calculateRoute(
                      from: LatLng(
                        tappedHQ.latitude,
                        tappedHQ.longitude,
                      ),
                      to: routeTargets[0],
                    );

                    if (routeResult == null) return;

                    if (!mounted) return;

                    showManeuverDialog(routeResult);

                    addRouteToMap(
                      routeResult: routeResult,
                      routeColor: Colors.green,
                    );
                  },
                  backgroundColor: Colors.green,
                  child: const Icon(Icons.looks_one_sharp),
                ),
                const SizedBox(width: 20),
                FloatingActionButton(
                  heroTag: "route-to-target-two",
                  onPressed: () async {
                    final routeResult = await _controller?.calculateRoute(
                      from: LatLng(
                        tappedHQ.latitude,
                        tappedHQ.longitude,
                      ),
                      to: routeTargets[1],
                    );

                    if (routeResult == null) return;

                    if (!mounted) return;

                    showManeuverDialog(routeResult);

                    addRouteToMap(
                      routeResult: routeResult,
                      routeColor: Colors.yellow,
                    );
                  },
                  backgroundColor: Colors.yellow,
                  child: const Icon(Icons.looks_two_sharp),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Future<void> addRouteToMap({
    required RouteResult routeResult,
    Color routeColor = Colors.blue,
  }) async {
    final polyLineSymbol = SimpleLineSymbol(
      color: routeColor,
      width: 3,
    );

    final paths = routeResult.paths;
    if (paths.isEmpty) return;

    await _controller?.removeGraphic(
      layerId: "features-layer",
      objectId: "polyline-graphics",
    );

    await _controller?.addGraphic(
      layerId: "features-layer",
      graphic: PolylineGraphic(
        paths: paths,
        symbol: polyLineSymbol,
        attributes: Attributes(
          {
            'id': "polyline-graphics",
            'name': "route_result",
          },
        ),
      ),
    );
  }

  Future<void> showManeuverDialog(RouteResult routeResult) async {
    await showGeneralDialog(
      context: context,
      barrierDismissible: true,
      barrierLabel: "Directions",
      pageBuilder: (_, __, ___) {
        final topSpacing =
            _appBar.preferredSize.height + MediaQuery.of(context).padding.top;

        return Align(
          alignment: Alignment.topCenter,
          child: Material(
            color: Colors.transparent,
            child: SizedBox(
              height: 300.0,
              child: Padding(
                padding: EdgeInsets.only(
                  top: topSpacing,
                  right: 16.0,
                  left: 16.0,
                ),
                child: Card(
                  color: Colors.white,
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Padding(
                        padding: const EdgeInsets.only(
                          left: 16.0,
                          top: 16.0,
                          right: 16.0,
                          bottom: 8.0,
                        ),
                        child: Text(
                          "${routeResult.totalLengthMeter.floor() / 1000} km - ${routeResult.totalTimeMinutes.floor()} min.",
                        ),
                      ),
                      Expanded(
                        child: ListView.builder(
                          itemCount: routeResult.maneuvers.length,
                          shrinkWrap: true,
                          itemBuilder: (context, index) {
                            final message =
                                routeResult.maneuvers[index].directionMessage;

                            final duration =
                                routeResult.maneuvers[index].durationMinutes;

                            final hours = duration ~/ 60;
                            final minutes = (duration % 60).toInt();
                            final seconds =
                                ((duration - duration.toInt()) * 60).toInt();

                            final formattedTime =
                                '${hours.toString().padLeft(2, '0')}:'
                                '${minutes.toString().padLeft(2, '0')}:'
                                '${seconds.toString().padLeft(2, '0')}';

                            final isSelected = index == 0;

                            return ListTile(
                              key: ValueKey("maneuver-$index"),
                              title: Text(message),
                              subtitle: Text("Duration $formattedTime"),
                              selected: isSelected,
                              titleTextStyle: TextStyle(
                                fontWeight: isSelected
                                    ? FontWeight.bold
                                    : FontWeight.normal,
                                color: Colors.black,
                                fontSize: 18.0,
                              ),
                              selectedColor: Colors.blue,
                            );
                          },
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ),
        );
      },
    );
  }
}
