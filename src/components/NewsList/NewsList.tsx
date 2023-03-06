import React, { useEffect, useMemo, useState } from 'react';
import { Button } from '@mui/material';

import styles from './NewsList.module.sass';
import AppLoader from 'components/Loader/Loader';
import NewsPost from 'components/NewsPost/NewsPost';
import INews from 'lib/INews.types';

const NewsList = ({ news }: { news: INews[] }) => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [isHidden, setIsHidden] = useState(false);

  const newsToShow = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return news.slice(0, endIndex);
  }, [currentPage, news]);

  const handleClick = () => setCurrentPage(1 + currentPage);

  useEffect(() => {
    if (news.length === newsToShow.length && news.length !== 0) {
      setIsHidden(true);
    }
  }, [newsToShow]);

  return (
    <section className={styles.newsList}>
      <h1>News</h1>
      <div className={styles.list}>
        {newsToShow ? (
          newsToShow.map((item) => <NewsPost key={item.id} {...item} />)
        ) : (
          <AppLoader />
        )}
        <div>
          {!isHidden && (
            <Button onClick={handleClick} variant="contained">
              Upload more
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsList;
