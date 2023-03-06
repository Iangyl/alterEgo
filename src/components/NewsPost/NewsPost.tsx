import React, { FC } from 'react';
import useGetUser from 'hooks/useGetUser';
import { INewsPost } from './NewsPost.types';
import { useAppDispatch } from 'redux/hooks';
import { deleteNews } from 'redux/app/appSlice';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { useTranslation } from 'react-i18next';

import styles from './NewsPost.module.sass';

const NewsPost: FC<INewsPost> = ({ id, userId, title, body }) => {
  const author = useGetUser(userId);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const handleDelete = () => {
    dispatch(deleteNews({ id, userId, title, body }));
  };

  return (
    <div className={styles.newsPost}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.body}>{body}</p>
      <p className={styles.author}>
        {author?.name ?? 'Anonym'}
        <button onClick={handleDelete} className={styles.delete}>
          {t('Delete')}
          <DeleteTwoToneIcon />
        </button>
      </p>
    </div>
  );
};

export default NewsPost;
