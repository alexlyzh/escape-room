import {useEffect, useState} from 'react';
import {Map, TileLayer} from 'leaflet';

const LayerSettings = {
  URL_TEMPLATE: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  ATTRIBUTION: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
};

const useMap = (mapRef, location) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: location.latitude,
          lng: location.longitude,
        },
        zoom: location.zoom,
      });

      const layer = new TileLayer(LayerSettings.URL_TEMPLATE,{ attribution: LayerSettings.ATTRIBUTION });

      instance.addLayer(layer);

      setMap(instance);
    }
  }, [mapRef, map, location]);

  return map;
}

export default useMap;
