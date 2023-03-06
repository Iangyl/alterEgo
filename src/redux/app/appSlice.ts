import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { ISession, IState } from './app.types';
import INews from 'lib/INews.types';

const initialState: IState = {
  news: [],
  session: {
    status: 'inactive',
    accessStatus: 'closed',
  },
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<INews[]>) => {
      state.news = action.payload;
    },
    deleteNews: (state, action: PayloadAction<INews>) => {
      state.news = state.news.filter((item) => item.id !== action.payload.id);
    },
    setSession: (state, action: PayloadAction<ISession>) => {
      state.session = action.payload;
    },
  },
});

export const { setNews, deleteNews, setSession } = appSlice.actions;

export default appSlice.reducer;
