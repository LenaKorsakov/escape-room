import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { IconrUrl, IconSize } from '../../const/icon-url';
//import { useState } from 'react';


type MapProps = {
coordinates: [number, number];
//center: [number, number];
}

const defaultIcon = new Icon({
  iconUrl: IconrUrl.Default,
  iconSize: IconSize.Size,
  iconAnchor: IconSize.Anchor
});

// const activeIcon = new Icon({
//   iconUrl: IconrUrl.Active,
//   iconSize: IconSize.Size,
//   iconAnchor: IconSize.Anchor
// });

function Map({coordinates}: MapProps): JSX.Element {
//const [activePlace, setActivePlace] = useState<Quest|null>(null);//предполагаю, что потребуется 2 разных компонента с картой: статичный с СПб и тот, где в качестве пропса будет приходить квест и вычисляться адрес, на котором был совершен клик

  return(
    <MapContainer
      center={coordinates}
      zoom={15}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
      />
      <Marker
        position={coordinates}
        icon={defaultIcon}
      >
      </Marker>
    </MapContainer>
  );
}

export default Map;