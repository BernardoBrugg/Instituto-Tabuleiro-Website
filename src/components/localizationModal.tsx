"use client";

import { GoogleMap, LoadScript, Marker, Polygon } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -27.9,
  lng: -48.8,
};

const parkPaths = [
  { lat: -28.2268047, lng: -48.8585605 },
  { lat: -28.2050228, lng: -48.8791598 },
  { lat: -28.1880783, lng: -48.894266 },
  { lat: -28.1771839, lng: -48.8997592 },
  { lat: -28.1517595, lng: -48.9134921 },
  { lat: -28.126329, lng: -48.9107455 },
  { lat: -28.0839314, lng: -48.8860263 },
  { lat: -28.008786, lng: -48.884653 },
  { lat: -27.9392978, lng: -48.9049969 },
  { lat: -27.8780125, lng: -48.922163 },
  { lat: -27.8598023, lng: -48.9379559 },
  { lat: -27.8318739, lng: -48.9709149 },
  { lat: -27.810012, lng: -48.9963208 },
  { lat: -27.7917903, lng: -49.0018139 },
  { lat: -27.7729581, lng: -48.9908276 },
  { lat: -27.7450074, lng: -48.9255963 },
  { lat: -27.7334605, lng: -48.8500653 },
  { lat: -27.734676, lng: -48.8020001 },
  { lat: -27.7292061, lng: -48.7491284 },
  { lat: -27.7255593, lng: -48.7223492 },
  { lat: -27.7352838, lng: -48.685957 },
  { lat: -27.7480459, lng: -48.6681042 },
  { lat: -27.7668825, lng: -48.6578045 },
  { lat: -27.7966497, lng: -48.662611 },
  { lat: -27.8792264, lng: -48.6811505 },
  { lat: -27.895006, lng: -48.6893902 },
  { lat: -27.9732628, lng: -48.7024365 },
  { lat: -27.9787205, lng: -48.7038098 },
  { lat: -28.0053984, lng: -48.7134228 },
  { lat: -28.0381305, lng: -48.728529 },
  { lat: -28.1199171, lng: -48.749815 },
  { lat: -28.1405054, lng: -48.7573681 },
  { lat: -28.1677485, lng: -48.771101 },
  { lat: -28.2149534, lng: -48.8020001 },
  { lat: -28.2303212, lng: -48.8147643 },
  { lat: -28.2347966, lng: -48.8398918 },
  { lat: -28.2268047, lng: -48.8585605 },
];

const markers = [
  { lat: -27.594, lng: -48.528, title: "Sede do Instituto Tabuleiro" },
];

export default function LocalizationModal() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return (
      <div className="flex items-center justify-center h-96 bg-gray-100 rounded-lg">
        <p className="text-gray-600">
          Erro: Chave da API do Google Maps não configurada. Verifique suas
          variáveis de ambiente.
        </p>
      </div>
    );
  }

  return (
    <div className="h-full">
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          mapTypeId="hybrid"
        >
          <Polygon
            paths={parkPaths}
            options={{
              fillColor: "#FF0000",
              fillOpacity: 0.35,
              strokeColor: "#FF0000",
              strokeOpacity: 1,
              strokeWeight: 2,
            }}
          />
          {markers.map((marker, index) => (
            <Marker key={index} position={marker} title={marker.title} />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
