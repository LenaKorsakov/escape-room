import HeaderLogin from '../../components/header/header-login';
import LoginForm from '../../components/login-form/login-form';

function LoginPage(): JSX.Element {
  return(
    <>
      <HeaderLogin />
      <main className="decorated-page login">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source
              type="image/webp"
              srcSet="img/content/maniac/maniac-size-m.webp, img/content/maniac/maniac-size-m@2x.webp 2x"
            />
            <img
              src="img/content/maniac/maniac-size-m.jpg"
              srcSet="img/content/maniac/maniac-size-m@2x.jpg 2x"
              width={1366}
              height={768}
              alt=""
            />
          </picture>
        </div>
        <div className="container container--size-l">
          <LoginForm/>
        </div>
      </main>
    </>
  );
}

export default LoginPage;
