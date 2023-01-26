import FilterLevelOption from './filter-level-option';
import { FILTER_BY_LEVEL } from '../../const/filter-by-difficulty';
import { MouseEvent } from 'react';
import { useAppDispatch } from '../../hooks';
import { changeLevel } from '../../store/filter-process/filter-process';
import { QuestLevel } from '../../const/quest-level';

function FilterLevelOptionsList():JSX.Element {
  const dispatch = useAppDispatch();

  const handleFilteLevelOptionClick = (event: MouseEvent<HTMLUListElement>) => {
    const selectedOption = event.target as HTMLLIElement;

    dispatch(changeLevel(selectedOption.id as QuestLevel));

  };

  return(
    <fieldset className="filter__section">
      <legend className="visually-hidden">Сложность</legend>
      <ul
        className="filter__list"
        onClick={handleFilteLevelOptionClick}
      >
        {FILTER_BY_LEVEL.map(({level, title}) => (
          <FilterLevelOption
            level={level}
            title={title}
            key={level}
          />
        ))}
      </ul>
    </fieldset>
  );
}

export default FilterLevelOptionsList;
