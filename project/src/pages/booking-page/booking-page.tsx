import BackgroundPictureEmpty from '../../components/background-picture-empty/background-picture-empty';
import BookingForm from '../../components/booking-form/booking-form';
import BookingMap from '../../components/booking-map/booking-map';
import Header from '../../components/header/header';

function BookingPage():JSX.Element {

  return (
    <>
      <Header />
      <main className="page-content decorated-page">
        <BackgroundPictureEmpty/>
        <div className="container container--size-s">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle subtitle--size-l page-content__subtitle">
            Бронирование квеста
            </h1>
            <p className="title title--size-m title--uppercase page-content__title">
            Маньяк
            </p>
          </div>
          <BookingMap/>
          <BookingForm/>
        </div>
      </main>
    </>
  );
}

export default BookingPage;
