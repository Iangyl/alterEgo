import { useState, useCallback, useEffect } from 'react';

import INews from 'lib/INews.types';
import { newsAPI } from 'utils/constants';

const useGetNews = () => {
  const [news, setNews] = useState<INews[]>();

  const getNews = useCallback(async () => {
    try {
      const response = await fetch(newsAPI);
      const result = await response.json();

      setNews(result);
    } catch (error: unknown) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getNews();
  }, []);

  return news;
};

export default useGetNews;
