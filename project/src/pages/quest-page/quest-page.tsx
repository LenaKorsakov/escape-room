import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Header from '../../components/header/header';
import NotFoundPage from '../not-found-page/not-found-page';
import { AppRoute } from '../../const/app-route';
import { quests } from '../../mocks/quests-mock';

function QuestPage(): JSX.Element {
  const {id} = useParams() as {id: string};
  const questId = +id;

  const quest = quests.find((item) => item.id === questId) ?? null;

  if(quest === null) {
    return (
      <NotFoundPage/>
    );
  }

  return(
    <>
      <Header />
      <main className="decorated-page quest-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source
              type="image/webp"
              srcSet={ `${quest.coverImgWebp}, ${quest.coverImgWebp} 2x`}
            />
            <img
              src={quest.coverImg}
              srcSet={`${quest.coverImg} 2x`}
              width={1366}
              height={768}
              alt=""
            />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="quest-page__content">
            <h1 className="title title--size-l title--uppercase quest-page__title">
              {quest.title}
            </h1>
            <p className="subtitle quest-page__subtitle">
              <span className="visually-hidden">Жанр:</span>{quest.type}
            </p>
            <ul className="tags tags--size-l quest-page__tags">
              <li className="tags__item">
                <svg width={11} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-person" />
                </svg>
                {quest.peopleMinMax[0]}–{quest.peopleMinMax[1]}&nbsp;чел
              </li>
              <li className="tags__item">
                <svg width={14} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-level" />
                </svg>
                {quest.level}
              </li>
            </ul>
            <p className="quest-page__description">
              {quest.description}
            </p>
            <Link
              className="btn btn--accent btn--cta quest-page__btn"
              to={`${AppRoute.Quest}/${quest.id}/booking`}
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
