import FilterDifficultyOptionsList from './filter-difficulty-options-list';
import FilterTypeOptionList from './filter-type-options-list';

function Filter():JSX.Element {
  return(
    <form className="filter" action="#" method="get">
      <FilterTypeOptionList/>
      <FilterDifficultyOptionsList/>
    </form>
  );
}

export default Filter;
