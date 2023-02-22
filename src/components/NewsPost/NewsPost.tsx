import React, { FC } from 'react';
import useGetUser from 'hooks/useGetUser';

import { INewsPost } from './NewsPost.types';
import styles from './NewsPost.module.sass';

const NewsPost: FC<INewsPost> = ({ id, userId, title, body }) => {
  const author = useGetUser(userId);
  return (
    <div className={styles.newsPost}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.body}>{body}</p>
      <p className={styles.author}>{author?.name ?? 'Anonym'}</p>
    </div>
  );
};

export default NewsPost;
