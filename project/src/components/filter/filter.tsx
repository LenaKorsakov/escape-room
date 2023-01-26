import FilterLevelOptionsList from './filter-level-options-list';
import FilterTypeOptionList from './filter-type-options-list';

function Filter():JSX.Element {
  return(
    <form className="filter" action="#" method="get">
      <FilterTypeOptionList/>
      <FilterLevelOptionsList/>
    </form>
  );
}

export default Filter;
