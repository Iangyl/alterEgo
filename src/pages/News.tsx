import React, { useEffect, useMemo, useState } from 'react';

import PageWrapper from 'components/PageWrapper/PageWrapper';
import NewsList from 'components/NewsList/NewsList';
import NewsPost from 'components/NewsPost/NewsPost';
import { useAppSelector } from 'redux/hooks';
import AppLoader from 'components/Loader/Loader';

const News = () => {
  const news = useAppSelector((state) => state.news);

  return (
    <PageWrapper>
      <NewsList news={news} />
    </PageWrapper>
  );
};

export default News;
