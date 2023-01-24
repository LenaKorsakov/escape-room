import { AxiosInstance } from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { dropToken, saveToken } from '../services/token';

import { ApiRoutes } from '../const/api-routes';
import { Action } from '../const/action';

import { QuestPreview, Quest } from '../@types/quest-types';
import { UserData, AuthData, AppDispatch, State } from '../@types/store-types';

export const fetchQuestPreviewsAction = createAsyncThunk<
  QuestPreview[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(Action.FetchAllQuests,
  async (_arg, {extra: api}) => {
    const { data } = await api.get<QuestPreview[]>(ApiRoutes.Quests);

    return data;
  }
);

export const fetchQuestByIdAction = createAsyncThunk<
Quest,
number,
{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(Action.FetchQuestById,
  async (id, { extra: api}) => {
    const { data } = await api.get<Quest>(`${ApiRoutes.Quests}/${id}`);

    return data;
  }
);

export const loginAction = createAsyncThunk<
  UserData,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
  >(Action.UserLogIn,
    async ({ email, password }, { extra: api}) => {
      const { data } = await api.post<UserData>(ApiRoutes.Login, { email, password});
      saveToken(data.token);

      return data;
    }
  );

export const logoutAction = createAsyncThunk<
    void,
    undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
  >(Action.UserLogOut,
    async (_arg, { extra: api}) => {
      await api.delete(ApiRoutes.Logout);
      dropToken();
    }
  );

export const checkAuthorizationStatusAction = createAsyncThunk<
    UserData,
    undefined,
    {
      dispatch: AppDispatch;
      state: State;
      extra: AxiosInstance;
    }
    >(Action.CheckAuthorizationStatus,
      async (_arg, { extra: api}) => {
        const { data } = await api.get<UserData>(ApiRoutes.Login);

        return data;
      }
    );
