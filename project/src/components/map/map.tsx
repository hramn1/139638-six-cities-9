import React from 'react';
import {OffersType} from '../../mocks/offers';
import {points} from '../../mocks/offers';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {Map} from 'leaflet';
import useMap from "../../hooks/useMap";
import {URL_MARKER_DEFAULT} from '../../const';


function MapW ({offers, cityMap}: {offers:OffersType}) {
  const mapRef = React.useRef(null);
  const cords = offers.map((cord) => cord.city.location);
  const map = useMap(mapRef, cords);
  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });


  React.useEffect(() => {
    if (map && cords[0]) {
      map.setView(new leaflet.LatLng(cords[0].latitude, cords[0].longitude), cords[0].zoom);
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
  }, [mapRef, map, cords, defaultCustomIcon]);

  return(
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}
export default MapW;
