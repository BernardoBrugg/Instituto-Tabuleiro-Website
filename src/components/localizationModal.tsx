"use client";

import { GoogleMap, LoadScript, Marker, Polygon } from '@react-google-maps/api';

const containerStyle = {
  width: '70vw',
  height: '60vh'
};

const center = {
  lat: -27.7416018, 
  lng: -48.8071144
};

const parkPaths = [
  { lat: -27.8, lng: -48.9 },
  { lat: -27.8, lng: -48.7 },
  { lat: -27.6, lng: -48.7 },
  { lat: -27.6, lng: -48.9 },
];

const markers = [
  { lat: -27.7416018, lng: -48.8071144, title: 'Santo Amaro da Imperatriz - SC' },
];

export default function LocalizationModal() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const googleMapsUrl = 'https://www.google.com/maps/place/Trilha+da+Pousada+-+Hotel+Plaza+Caldas+da+Imperatriz/@-27.7393855,-48.8128669,16z/data=!4m9!1m2!2m1!1shotel+caldas+da+imperatriz!3m5!1s0x9520c952d5495a1f:0xf1c8733887f1b008!8m2!3d-27.7416018!4d-48.8071144!16s%2Fg%2F11gf16td_n?entry=ttu&g_ep=EgoyMDI1MTAwNy4wIKXMDSoASAFQAw%3D%3D';

  if (!apiKey) {
    return (
      <div className="flex items-center justify-center h-96 bg-gray-100 rounded-lg">
        <p className="text-gray-600">Erro: Chave da API do Google Maps não configurada. Verifique suas variáveis de ambiente.</p>
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
          {/* Polígono para marcar a área específica */}
          <Polygon
            paths={parkPaths}
            options={{
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              strokeColor: '#FF0000',
              strokeOpacity: 1,
              strokeWeight: 2,
            }}
          />
          {/* Marcadores */}
          {markers.map((marker, index) => (
            <Marker key={index} position={marker} title={marker.title} />
          ))}
        </GoogleMap>
      </LoadScript>
      <div className="mt-4 text-center">
        <button 
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          onClick={() => window.open(googleMapsUrl, '_blank')}
        >
          Ver no Google Maps
        </button>
      </div>
    </div>
  );
}