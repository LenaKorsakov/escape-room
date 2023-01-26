import { useAppSelector } from '../../hooks';
import { getFilterByType } from '../../store/filter-process/filter-process-selectors';

type FilterTypeOptionProps = {
  type: string;
  title: string;
  pictureHref: string;
};

function FilterTypeOption({type, title, pictureHref}: FilterTypeOptionProps):JSX.Element {
  const selectedType = useAppSelector(getFilterByType);

  return(
    <li className="filter__item">
      <input
        type="radio"
        name="type"
        id={type}
        checked={selectedType === type} readOnly
      />
      <label
        className="filter__label"
        htmlFor={type}
      >
        <svg
          className="filter__icon"
          width={26}
          height={30}
          aria-hidden="true"
        >
          <use xlinkHref={pictureHref} />
        </svg>
        <span
          className="filter__label-text"
        >
          {title}
        </span>
      </label>
    </li>
  );
}

export default FilterTypeOption;
