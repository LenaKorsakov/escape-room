import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Header from '../../components/header/header';
import { AppRoute } from '../../const/app-route';
import { store } from '../../store';
import { fetchQuestByIdAction } from '../../store/api-actions';
import { Quest } from '../../@types/quest-types';
import NotFoundPage from '../not-found-page/not-found-page';
import LoadingPage from '../loading-page/loading-page';

function QuestPage(): JSX.Element {
  const [selectedQuest, setSelectedQuest] = useState<Quest|null>(null);
  const [errorWhileLoading, setErrorWhileLoading] = useState(false);

  const {id} = useParams() as {id: string};
  const questId = +id;

  useEffect(()=> {
    store.dispatch(fetchQuestByIdAction(questId)).unwrap().then(
      (quest) => {
        setSelectedQuest(quest);
      },
      () => {
        setErrorWhileLoading(true);
      }
    );
  }, [questId]);

  if (errorWhileLoading) {
    return (<NotFoundPage/>);
  }

  if (! selectedQuest) {
    return (<LoadingPage/>);
  }

  return(
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
