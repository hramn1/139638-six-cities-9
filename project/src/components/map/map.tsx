import React from 'react';
import {OffersType} from '../../mocks/offers';
import {points} from '../../mocks/offers';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {Map} from 'leaflet';
import {URL_MARKER_DEFAULT} from '../../const';


function MapW ({offers}: {offers:OffersType}) {
  const mapRef = React.useRef(null);
  const cords = offers.map((cord) => cord.city.location);

  const [map, setMap] = React.useState<Map | null>(null);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  React.useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: cords[5].latitude,
          lng: cords[5].longitude,
        },
        zoom: cords[5].zoom,
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


  React.useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.latitude,
            lng: point.longitude,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, defaultCustomIcon]);

  return(
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}
export default MapW;
