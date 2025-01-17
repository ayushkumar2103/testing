import React from "react";
import { Map, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./CovidMap.css";
const CovidMap = ({ countries }) => {
  const mapStyle = {
    fillColor: "white",
    weight: 1,
    color: "black",
    fillOpacity: 1,
  };

  const onEachCountry = (country, layer) => {
    layer.options.fillColor = country.properties.color;
    const name = country.properties.ADMIN;
    const confirmedText = country.properties.confirmedText;
    const activeText =country.properties.activeText;
    const recoveredText =country.properties.recoveredText;
    const deathText=country.properties.deathText;
    layer.bindPopup(`${name} ${confirmedText} ${activeText} ${recoveredText} ${deathText}`);
  };

  return (
    <Map style={{ height: "90vh" }} zoom={2} center={[20, 60]}>
      <GeoJSON
        style={mapStyle}
        data={countries}
        onEachFeature={onEachCountry}
      />
    </Map>
  );
};

export default CovidMap;
