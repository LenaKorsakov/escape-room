import { QuestInfo } from '../../@types/quest-types';
import Map from './map';

type bookingMapProps = {
  quest: QuestInfo;
}

function BookingMap({quest}: bookingMapProps):JSX.Element {
  const { locations } = quest;

  return (
    <div className="page-content__item">
      <div className="booking-map">
        <div className="map">
          <div className="map__container">
            <Map locations={locations}/>
          </div>
        </div>
        <p className="booking-map__address">
              Вы&nbsp;выбрали: {locations[0].address}
        </p>
      </div>
    </div>
  );
}

export default BookingMap;
