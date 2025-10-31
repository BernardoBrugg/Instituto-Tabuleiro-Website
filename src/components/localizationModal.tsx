"use client";

import { GoogleMap, LoadScript, Marker, Polygon } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -27.7416018,
  lng: -48.8071144,
};

const parkPaths = [
  { lat: -27.8, lng: -48.9 },
  { lat: -27.8, lng: -48.7 },
  { lat: -27.6, lng: -48.7 },
  { lat: -27.6, lng: -48.9 },
];

const markers = [
  { lat: -27.7416018, lng: -48.8071144, title: "Parque" },
  { lat: -27.594, lng: -48.528, title: "Sede" },
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
