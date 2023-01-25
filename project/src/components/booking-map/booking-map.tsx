import Map from './map';

function BookingMap():JSX.Element {

  return (
    <div className="booking-map">
      <div className="map">
        <div className="map__container">
          <Map coordinates={[50.5, 13]}/>
        </div>
      </div>
      <p className="booking-map__address">
              Вы&nbsp;выбрали: наб. реки Карповки&nbsp;5, лит&nbsp;П, м.
              Петроградская
      </p>
    </div>
  );
}

export default BookingMap;
