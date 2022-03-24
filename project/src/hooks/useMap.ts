import React, {useEffect, useState, MutableRefObject} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {Map} from 'leaflet';
import {URL_MARKER_DEFAULT} from '../const';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, cords) {

	const [map, setMap] = useState<Map | null>(null);

	React.useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: cords[0].latitude,
          lng: cords[0].longitude,
        },
        zoom: cords[0].zoom,
      });
      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);
      setMap(instance);
    }
  }, [mapRef, map, cords]);

  return map;
}

export default useMap;
