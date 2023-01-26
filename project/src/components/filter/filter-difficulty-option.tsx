type FilterDifficultyOptionProps = {
  level: string;
  title: string;
};

function FilterDifficultyOption({level, title}: FilterDifficultyOptionProps):JSX.Element {
  return(
    <li className="filter__item">
      <input type="radio" name="level" id={level} />
      <label className="filter__label" htmlFor={level}>
        <span className="filter__label-text">{title}</span>
      </label>
    </li>
  );
}

export default FilterDifficultyOption;
