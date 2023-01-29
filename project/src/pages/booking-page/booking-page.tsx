import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import BackgroundPictureEmpty from '../../components/background-picture-empty/background-picture-empty';
import BookingForm from '../../components/booking-form/booking-form';
import BookingMap from '../../components/booking-map/booking-map';
import Header from '../../components/header/header';
import LoadingPage from '../loading-page/loading-page';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { store } from '../../store';
import { displayError } from '../../store/actions';
import { fetchQuestBookingInfoByIdAction } from '../../store/api-actions';

import { WarningMessage } from '../../const/warning-message';
import { QuestInfo } from '../../@types/quest-types';
import { getSelectedQuest } from '../../store/quests-process/quests-process-selectors';

function BookingPage():JSX.Element {
  const selectedQuest = useAppSelector(getSelectedQuest);
  const {peopleMinMax} = selectedQuest;

  const dispatch = useAppDispatch();

  const [bookedQuest, setBookedQuest] = useState<QuestInfo|null>(null);
  // eslint-disable-next-line no-console
  console.log(bookedQuest);

  const {id} = useParams() as {id: string};

  const questId = +id;
  useEffect(() => {
    store.dispatch(fetchQuestBookingInfoByIdAction(questId)).unwrap().then(
      (quest) => {
        setBookedQuest(quest);
      },
      () => {
        dispatch(displayError(WarningMessage.LoadingError));
      }
    );

  }, [questId, dispatch]);

  return (
    !bookedQuest ? <LoadingPage/> :
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
                {selectedQuest.title}
              </p>
            </div>
            <BookingMap quest={bookedQuest}/>
            <BookingForm
              quest={bookedQuest}
              peopleMinMax={peopleMinMax}
            />
          </div>
        </main>
      </>
  );
}

export default BookingPage;
