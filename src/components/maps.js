import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React, { useState, useRef, useCallback } from "react";
import MapGL, { Marker} from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import logo from "../assets/logo.svg";
import airplane from "../assets/airplane.svg";
import Menu from "./menu";

const MAPBOX_TOKEN = "pk.eyJ1IjoicGhpbG9kaW5nYSIsImEiOiJja2xzbHE0Y2ExZ3A5MnVud3didm94Y2k2In0.Bfw_sJ5n4ty_vbuLsi0Sog";
export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: -4.33193,
    longitude: 15.32887,
    zoom: 13,
    bearing: 90
  });
  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000, zoom: 13 };

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides
      });
    },
    [handleViewportChange]
  );

  return (
    <>
      <MapGL
        ref={mapRef}
        {...viewport}
        width="100%"
        height="100%"
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        // mapStyle="mapbox://styles/philodinga/cklwf1k423koq17p5gkzrijsd"
        mapStyle="mapbox://styles/philodinga/cklsldu5j1l4917lj5ksk3bmk"
      >
        <Menu/>
        <Marker key="kin" latitude={-4.33183} longitude={15.32887}>
          <button className="marker-btn">
            <img src={airplane} alt="ottawa" />
          </button>
        </Marker>

        <Marker key="kin" latitude={-4.3367224} longitude={15.3130776}>
          <button className="marker-btn">
            <img src={airplane} alt="ottawa" />
          </button>
        </Marker>

        <Marker key="kin" latitude={-4.3367224} longitude={15.3130776}>
          <button className="marker-btn">
            <img src={airplane} alt="ottawa" />
          </button>
        </Marker>

        <Marker key="kin" latitude={-4.3367224} longitude={15.3130776}>
          <button className="marker-btn">
            <img src={airplane} alt="ottawa" />
          </button>
        </Marker>
        <Geocoder
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          position="top-right"
        />
      </MapGL>
    </>
  );
}