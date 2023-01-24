import { store } from '../store/index';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserData = {
  email: string;
  token: string;
}

export type AuthData = {
  login: string;
  password: string;
};
