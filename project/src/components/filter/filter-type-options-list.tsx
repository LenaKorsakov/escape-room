import FilterTypeOption from './filter-type-option';
import { FILTER_BY_TYPE } from '../../const/filter-by-type';
import { MouseEvent } from 'react';
import { useAppDispatch } from '../../hooks';
import { changeType } from '../../store/filter-process/filter-process';
import { QuestType } from '../../const/quest-type';

function FilterTypeOptionList():JSX.Element {
  const dispatch = useAppDispatch();

  const handleFilterTypeOption = (event: MouseEvent<HTMLUListElement>) => {
    const selectedOption = event.target as HTMLLIElement;

    dispatch(changeType(selectedOption.id as QuestType));
  };

  return(
    <fieldset className="filter__section">
      <legend className="visually-hidden">Тематика</legend>
      <ul
        className="filter__list"
        onClick={handleFilterTypeOption}
      >
        {FILTER_BY_TYPE.map(({type, title, pictureHref}) => (
          <FilterTypeOption
            type={type}
            title={title}
            pictureHref={pictureHref}
            key={type}
          />
        ))}
      </ul>
    </fieldset>
  );
}

export default FilterTypeOptionList;
