import { SpinnerCircular} from 'spinners-react';
import './loading-page.css';

function LoadingPage(): JSX.Element{
  return(
    <main className="page-content decorated-page">
      <div className="container">
        <div className="loader">
          <SpinnerCircular color="#ffffff" size="80"/>
        </div>
      </div>
    </main>
  );
}

export default LoadingPage;
