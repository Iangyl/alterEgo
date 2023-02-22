import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { IState } from './app.types';
import INews from 'lib/INews.types';

const initialState: IState = {
  news: [],
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<INews[]>) => {
      state.news = action.payload;
    },
    deleteNews: (state, action: PayloadAction<INews>) => {
      // delete
    },
  },
});

export const { setNews, deleteNews } = appSlice.actions;

export default appSlice.reducer;
