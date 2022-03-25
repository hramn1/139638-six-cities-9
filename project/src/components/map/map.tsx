import React from 'react';
import {OffersType} from '../../mocks/offers';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import {URL_MARKER_DEFAULT} from '../../const';


function MapW ({offers}: {offers:OffersType}) {
  const mapRef = React.useRef(null);
  const cityMap = offers.map((cord) => cord.city.location)[0];
  const cords = offers.map((cord) => cord.location);
  const map = useMap(mapRef, cityMap);
  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });


  React.useEffect(() => {
    if (map && cityMap) {
      map.setView(new leaflet.LatLng(cityMap.latitude, cityMap.longitude), cityMap.zoom);
      cords.forEach((point) => {
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
  }, [mapRef, map, cityMap, cords, defaultCustomIcon]);

  return(
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}
export default MapW;
