import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Header from '../../components/header/header';
import LoadingPage from '../loading-page/loading-page';

import { store } from '../../store';
import { displayError } from '../../store/actions';
import { fetchQuestByIdAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks';

import { Quest } from '../../@types/quest-types';

import { AppRoute } from '../../const/app-route';
import { WarningMessage } from '../../const/warning-message';

function QuestPage(): JSX.Element {
  const [selectedQuest, setSelectedQuest] = useState<Quest|null>(null);
  const dispatch = useAppDispatch();

  const {id} = useParams() as {id: string};
  const questId = +id;

  useEffect(()=> {
    store.dispatch(fetchQuestByIdAction(questId)).unwrap().then(
      (quest) => {
        setSelectedQuest(quest);
      },
      () => {
        dispatch(displayError(WarningMessage.LoadingError));
      }
    );
  }, [questId, dispatch]);


  return(
    !selectedQuest ? <LoadingPage/> :
      <>
        <Header />
        <main className="decorated-page quest-page">
          <div className="decorated-page__decor" aria-hidden="true">
            <picture>
              <source
                type="image/webp"
                srcSet={ `${selectedQuest.coverImgWebp}, ${selectedQuest.coverImgWebp} 2x`}
              />
              <img
                src={selectedQuest.coverImg}
                srcSet={`${selectedQuest.coverImg} 2x`}
                width={1366}
                height={768}
                alt=""
              />
            </picture>
          </div>
          <div className="container container--size-l">
            <div className="quest-page__content">
              <h1 className="title title--size-l title--uppercase quest-page__title">
                {selectedQuest.title}
              </h1>
              <p className="subtitle quest-page__subtitle">
                <span className="visually-hidden">Жанр:</span>{selectedQuest.type}
              </p>
              <ul className="tags tags--size-l quest-page__tags">
                <li className="tags__item">
                  <svg width={11} height={14} aria-hidden="true">
                    <use xlinkHref="#icon-person" />
                  </svg>
                  {selectedQuest.peopleMinMax[0]}–{selectedQuest.peopleMinMax[1]}&nbsp;чел
                </li>
                <li className="tags__item">
                  <svg width={14} height={14} aria-hidden="true">
                    <use xlinkHref="#icon-level" />
                  </svg>
                  {selectedQuest.level}
                </li>
              </ul>
              <p className="quest-page__description">
                {selectedQuest.description}
              </p>
              <Link
                className="btn btn--accent btn--cta quest-page__btn"
                to={`${AppRoute.Quest}/${selectedQuest.id}/booking`}
              >
            Забронировать
              </Link>
            </div>
          </div>
        </main>
      </>
  );
}

export default QuestPage;
