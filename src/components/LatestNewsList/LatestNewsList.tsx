import React from 'react';

const LatestNewsList = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return <aside>{children}</aside>;
};

export default LatestNewsList;
