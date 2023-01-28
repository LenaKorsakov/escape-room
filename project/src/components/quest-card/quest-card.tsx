import { Link } from 'react-router-dom';
import { QuestPreview } from '../../@types/quest-types';
import { AppRoute } from '../../const/app-route';
import { capitalizeFirstLetter } from '../../utiles/format';

type QuestCardProps = {
  quest: QuestPreview;
}

function QuestCard({quest}: QuestCardProps): JSX.Element {
  const {id, title, previewImg, previewImgWebp, level, peopleMinMax} = quest;
  const [peopleMin, peopleMax] = peopleMinMax;

  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source
            type="image/webp"
            srcSet={`${previewImgWebp}, ${previewImgWebp} 2x`}
          />
          <img
            src={previewImg}
            srcSet={`${previewImg} 2x`}
            width={344}
            height={232}
            alt={title}
          />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link className="quest-card__link" to={`${AppRoute.Quest}/${id}`}>
            {capitalizeFirstLetter(title)}
          </Link>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width={11} height={14} aria-hidden="true">
              <use xlinkHref="#icon-person" />
            </svg>
            {peopleMin}–{peopleMax}&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width={14} height={14} aria-hidden="true">
              <use xlinkHref="#icon-level" />
            </svg>
            {capitalizeFirstLetter(level)}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default QuestCard;
