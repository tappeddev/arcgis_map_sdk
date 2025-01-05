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
      48.205636645145659,
      11.395690217614174,
    ),
  ];

  ArcgisMapController? _controller;
  RouteResult? routeResultOne;
  RouteResult? routeResultTwo;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(centerTitle: true, title: Text("Route Service Example")),
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
            // TODO(GO AHEAD): This seems to work but probably only in san diego
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
                    routeResultOne = await _controller?.calculateRoute(
                      from: LatLng(
                        tappedHQ.latitude,
                        tappedHQ.longitude,
                      ),
                      to: routeTargets[0],
                    );

                    addRouteToMap(
                      routeResult: routeResultOne!,
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
                    routeResultTwo = await _controller?.calculateRoute(
                      from: LatLng(
                        tappedHQ.latitude,
                        tappedHQ.longitude,
                      ),
                      to: routeTargets[1],
                    );

                    addRouteToMap(
                      routeResult: routeResultTwo!,
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
}
