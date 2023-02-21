import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { IState } from './news.types';
import INews from 'lib/INews.types';

const initialState: IState = {
  news: [],
};

export const newsSlice = createSlice({
  name: 'news',
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

export const { setNews, deleteNews } = newsSlice.actions;

export default newsSlice.reducer;
