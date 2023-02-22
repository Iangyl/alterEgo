import React from 'react';
import PageWrapper from 'components/PageWrapper/PageWrapper';
import HomeSection from 'components/HomeSection/HomeSection';
import LatestNewsList from 'components/LatestNewsList/LatestNewsList';
import NewsBlock from 'components/NewsBlock/NewsBlock';

const Home = () => {
  return (
    <PageWrapper>
      <div style={{ display: 'flex', gap: '20px', boxSizing: 'border-box' }}>
        <HomeSection />
        <LatestNewsList>
          <NewsBlock type="short" />
          <NewsBlock type="short" />
          <NewsBlock type="short" />
        </LatestNewsList>
      </div>
    </PageWrapper>
  );
};

export default Home;
