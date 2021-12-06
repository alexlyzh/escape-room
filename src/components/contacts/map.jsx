import {useEffect, useRef} from 'react';
import 'leaflet/dist/leaflet.css'
import {Icon, Marker} from 'leaflet';
import useMap from '../../hooks/use-map';
import {ContactsMapContainer, ContactsMap} from './contacts.styled';

const location = {
  latitude: 59.968322,
  longitude: 30.317359,
  zoom: 15,
};

const markerIcon = new Icon({
  iconUrl: './icon-blip.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const Map = () => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);

  useEffect(() => {
    let marker;

    if (map) {
      marker = new Marker({
        lat: location.latitude,
        lng: location.longitude,
      });

      marker.setIcon(markerIcon).addTo(map);
    }

    return () => marker && marker.remove();
    }, [map]);

  return (
    <ContactsMapContainer>
      <ContactsMap ref={mapRef}/>
    </ContactsMapContainer>
  );
}

export {Map};
