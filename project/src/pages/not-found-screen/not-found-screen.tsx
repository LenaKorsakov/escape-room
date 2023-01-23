import Header from '../../components/header/header';
import { Link } from 'react-router-dom';

function NotFoundScreen():JSX.Element{
  return(
    <>
      <Header/>
      <main className="page-content decorated-page">
        <div className="container">
          <div className="page-content__title-wrapper page-content__title-wrapper--underlined">
            <h1 className="title title--size-m page-content__title">Страница не найдена</h1>
            <Link title="To the main page" to='//TODO'>
              <div className="title title--size-m">Перейти к квестам</div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default NotFoundScreen;

