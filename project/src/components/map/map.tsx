import React from 'react';
import {OffersType} from '../../types/state';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT, LEAFLET_ICON_SIZE, LEAFLET_ANCOR_SIZE} from '../../const';
import {useAppSelector} from '../../hooks';

function MapW ({offers}: {offers:OffersType[]}) {
  const {chooseOffer} = useAppSelector((state) => state.chooseOffer);
  const mapRef = React.useRef(null);
  const cityMap = offers.map((coordinates) => coordinates.city.location)[0];
  const map = useMap(mapRef, cityMap);


  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: LEAFLET_ICON_SIZE,
    iconAnchor: LEAFLET_ANCOR_SIZE,
  });
  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: LEAFLET_ICON_SIZE,
    iconAnchor: LEAFLET_ANCOR_SIZE,
  });

  React.useEffect(() => {
    if (map && cityMap) {
      map.setView(new leaflet.LatLng(cityMap.latitude, cityMap.longitude), cityMap.zoom);
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: (offer.id === chooseOffer) ? currentCustomIcon : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [mapRef, map, cityMap, offers, chooseOffer, defaultCustomIcon, currentCustomIcon]);

  return(
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}
export default MapW;
