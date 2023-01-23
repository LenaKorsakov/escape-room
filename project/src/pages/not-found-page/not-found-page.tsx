import Header from '../../components/header/header';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/app-route';

function NotFoundPage(): JSX.Element{
  return(
    <>
      <Header/>
      <main className="page-content decorated-page">
        <div className="container">
          <div className="page-content__title-wrapper page-content__title-wrapper--underlined">
            <h1 className="title--size-m">Страница не найдена</h1>
            <Link className="btn btn--accent header__side-item" title="To the main page" to={AppRoute.Main}>
              <div>Вернуться к каталогу квестов</div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default NotFoundPage;
