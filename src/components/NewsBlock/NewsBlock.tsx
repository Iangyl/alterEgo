import React from 'react';

import { newsBlockArticleClasses, newsBlockClasses } from './NewsBlock.config';
import { NewsBlockType } from './NewsBlock.types';
import styles from './NewsBlock.module.sass';

const NewsBlock = ({ type }: { type: NewsBlockType }) => {
  const classesCollection =
    newsBlockClasses[type === 'regular' ? 'main' : type];
  const articleClass = newsBlockArticleClasses[type];
  return (
    <article className={styles[articleClass]}>
      <h2 className={styles[classesCollection.title]}>
        FOR THE TEXAS ENVIRONMENTAL WORKERS UNION, THE FIGHT IS AGAINST FOSSIL
        FUELS AND THE BOSSES
      </h2>
      <p className={styles[classesCollection.paragraph]}>
        Brandon Marks and Chloe Torres joined the Texas Environmental Campaign
        to fight Big Oil. They’ve found themselves in a two-front battle against
        fossil fuels and NGO bosses.
      </p>
      <div className={styles.details}>
        BY <span className={styles.author}>JULES TAYLOR</span>{' '}
        <span className={styles.date}>FEBRUARY 21, 2023</span>
      </div>
    </article>
  );
};

export default NewsBlock;
