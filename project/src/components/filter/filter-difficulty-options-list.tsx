import FilterDifficultyOption from './filter-difficulty-option';
import { FILTER_BY_DIFFICULTY } from '../../const/filter-by-difficulty';

function FilterDifficultyOptionsList():JSX.Element {
  return(
    <fieldset className="filter__section">
      <legend className="visually-hidden">Сложность</legend>
      <ul className="filter__list">
        {FILTER_BY_DIFFICULTY.map(({level, title}) => (
          <FilterDifficultyOption
            level={level}
            title={title}
            key={level}
          />
        ))}
      </ul>
    </fieldset>
  );
}

export default FilterDifficultyOptionsList;
