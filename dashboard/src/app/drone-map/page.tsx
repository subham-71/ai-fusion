"use client"
import React, { useEffect } from "react";
import { useRef } from "react";
import { Map, Source, Layer } from "react-map-gl";
import {
  clusterLayer,
  clusterCountLayer,
  unclusteredPointLayer,
} from "./layers";

const MAP_BOX_TOKEN =
  "pk.eyJ1IjoidHVzaHhyMTYiLCJhIjoiY2wxY2cwN2pnMDAycTNrb2I3cGU2YTE5YyJ9.8YV_FHg4cI9QPi--CHdS6g";

export default function MapComp() {
  const mapRef = useRef(null);
  
  useEffect(() => {
    setInterval(() => {
      function hideCopyright() {
        const copy = document.getElementsByClassName(
          "mapboxgl-control-container"
        );

        if (copy.length !== 0) {
          const toBeDeleted = copy.item(0);
          console.log(toBeDeleted);
          toBeDeleted.remove();
        }
      }
      hideCopyright();
    }, 500);
  }, []);

  const onClick = (event) => {
    const feature = event.features[0];
    const clusterId = feature.properties.cluster_id;

    const mapboxSource = mapRef.current.getSource("earthquakes");

    mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
      if (err) {
        return;
      }

      mapRef.current.easeTo({
        center: feature.geometry.coordinates,
        zoom,
        duration: 500,
      });
    });
  };

  return (
    <>
      <Map
        style={{ width: "60vw", height: "550px" }}
        initialViewState={{
          latitude: 40.67,
          longitude: -103.59,
          zoom: 4,
        }}
        mapStyle="mapbox://styles/mapbox/light-v9"
        mapboxAccessToken={MAP_BOX_TOKEN}
        interactiveLayerIds={[clusterLayer.id]}
        onClick={onClick}
        ref={mapRef}
      >
        <Source
          id="earthquakes"
          type="geojson"
          data="https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson"
          cluster={true}
          clusterMaxZoom={14}
          clusterRadius={50}
        >
          <Layer {...clusterLayer} />
          <Layer {...clusterCountLayer} />
          <Layer {...unclusteredPointLayer} />
        </Source>
      </Map>
    </>
  );
}
