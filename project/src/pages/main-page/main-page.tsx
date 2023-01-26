import Filter from '../../components/filter/filter';
import Header from '../../components/header/header';
import QuestCard from '../../components/quest-card/quest-card';
import LoadingPage from '../loading-page/loading-page';

import { useAppSelector } from '../../hooks';
import { getAllQuests, isQuestsLoading } from '../../store/quests-process/quests-process-selectors';
import { getFilterOptionByLevel, getFilterOptionByType } from '../../store/filter-process/filter-process-selectors';
import { filterQuestByLevel, filterQuestByType } from '../../utiles/filter-predicates';
import EmptyPlug from '../../components/map/empty-plug/empty-plug';
import { EmptyPlugText } from '../../const/empty-plug-text';

function MainPage():JSX.Element {
  const isLoading = useAppSelector(isQuestsLoading);

  const quests = useAppSelector(getAllQuests);
  const selectedType = useAppSelector(getFilterOptionByType);
  const selectedLevel = useAppSelector(getFilterOptionByLevel);

  const filteredQuests = quests
    .filter((quest) => filterQuestByType(quest, selectedType))
    .filter((quest) => filterQuestByLevel(quest, selectedLevel));

  return (
    isLoading ? <LoadingPage/>
      :
      <>
        <Header />
        <main className="page-content">
          <div className="container">
            <div className="page-content__title-wrapper">
              <h1 className="subtitle page-content__subtitle">
            квесты в Санкт-Петербурге
              </h1>
              <h2 className="title title--size-m page-content__title">
            Выберите тематику
              </h2>
            </div>
            <div className="page-content__item">
              <Filter />
            </div>
            <h2 className="title visually-hidden">Выберите квест</h2>
            <div className="cards-grid">
              { filteredQuests.length ?
                filteredQuests.map((quest) => (
                  <QuestCard
                    key={quest.id}
                    quest={quest}
                  />
                ))
                : <EmptyPlug text={EmptyPlugText.NoQuestsByFilter}/>}
            </div>
          </div>
        </main>
      </>
  );
}

export default MainPage;
