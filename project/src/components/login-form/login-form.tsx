import { FormEvent, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const/app-route';
import { LoginButtonText } from '../../const/login-button-text';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { getIsLoginLoading } from '../../store/user-process/user-process-selectors';
import { displayError } from '../../store/actions';
import { WarningMessage } from '../../const/warning-message';

type LocationState = {
  from: {
    pathname: string;
  };
}

function LoginForm(): JSX.Element {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const isLoginLoading = useAppSelector(getIsLoginLoading);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(emailRef.current && passwordRef.current) {
      dispatch(loginAction({
        email: emailRef.current?.value,
        password: passwordRef.current?.value
      }))
        .unwrap().then(
          () => {
            if((location.state as LocationState)?.from) {
              const { pathname } = (location.state as LocationState).from;

              navigate(pathname);
            } else {

              navigate(AppRoute.Main);
            }
          },
          () => {
            dispatch(displayError(WarningMessage.SendingError));
          }
        );}
  };

  return(
    <div className="login__form">
      <form
        className="login-form"
        action=""
        method="post"
        onSubmit={handleFormSubmit}
      >
        <div className="login-form__inner-wrapper">
          <h1 className="title title--size-s login-form__title">Вход</h1>
          <div className="login-form__inputs">
            <div className="custom-input login-form__input">
              <label className="custom-input__label" htmlFor="email">
                    E&nbsp;–&nbsp;mail
              </label>
              <input
                ref={emailRef}
                type="email"
                id="email"
                name="email"
                placeholder="Адрес электронной почты"
                required
              />
            </div>
            <div className="custom-input login-form__input">
              <label className="custom-input__label" htmlFor="password">
                    Пароль
              </label>
              <input
                ref={passwordRef}
                type="password"
                id="password"
                name="password"
                placeholder="Пароль"
                required
              />
            </div>
          </div>
          <button
            className="btn btn--accent btn--general login-form__submit"
            type="submit"
          >
            {isLoginLoading ? LoginButtonText.Clicked : LoginButtonText.Default}
          </button>
        </div>
        <label className="custom-checkbox login-form__checkbox">
          <input
            type="checkbox"
            id="id-order-agreement"
            name="user-agreement"
            required
          />
          <span className="custom-checkbox__icon">
            <svg width={20} height={17} aria-hidden="true">
              <use xlinkHref="#icon-tick" />
            </svg>
          </span>
          <span className="custom-checkbox__label">
                Я&nbsp;согласен с
            <a className="link link--active-silver link--underlined" href="/">
                  правилами обработки персональных данных
            </a>
                &nbsp;и пользовательским соглашением
          </span>
        </label>
      </form>
    </div>
  );
}

export default LoginForm;
