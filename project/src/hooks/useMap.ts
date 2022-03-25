import {useEffect, useState, MutableRefObject} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {Map} from 'leaflet';
import {Location} from '../mocks/offers';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, cityMap: Location) {
  const [map, setMap] = useState<Map | null>(null);
  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: cityMap.latitude,
          lng: cityMap.longitude,
        },
        zoom: cityMap.zoom,
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
  }, [mapRef, map, cityMap]);

  return map;
}

export default useMap;
