import { useAppSelector } from '../../hooks';
import { getFilterByLevel } from '../../store/filter-process/filter-process-selectors';

type FilterLevelOptionProps = {
  level: string;
  title: string;
};

function FilterLevelOption({level, title}: FilterLevelOptionProps):JSX.Element {
  const selectedLevel = useAppSelector(getFilterByLevel);

  return(
    <li className="filter__item">
      <input
        type="radio"
        name="level"
        id={level}
        checked={selectedLevel === level} readOnly
      />
      <label
        className="filter__label"
        htmlFor={level}
      >
        <span
          className="filter__label-text"
        >
          {title}
        </span>
      </label>
    </li>
  );
}

export default FilterLevelOption;
