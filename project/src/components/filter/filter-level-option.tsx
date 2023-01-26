import { useAppSelector } from '../../hooks';
import { getFilterOptionByLevel } from '../../store/filter-process/filter-process-selectors';

type FilterLevelOptionProps = {
  level: string;
  title: string;
};

function FilterLevelOption({level, title}: FilterLevelOptionProps):JSX.Element {
  const selectedLevel = useAppSelector(getFilterOptionByLevel);

  return(
    <li className="filter__item">
      <input
        type="radio"
        name="level"
        id={level}
        checked={selectedLevel === level} readOnly
        disabled={selectedLevel === level} //TODO
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
