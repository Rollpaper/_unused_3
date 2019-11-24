import * as React from 'react';
import { FC } from 'react';
import { useSelector } from 'react-redux';

import { FeedItem } from './FeedItem';
import { InitForm } from './InitForm';
import { selectFeed } from './ducks/feed';

import './App.css';

export const App: FC = () => {
  const feed = useSelector(selectFeed);

  const keyword = localStorage.getItem('feed__keyword') || 'root';

  if (feed.data && feed.data[keyword] && Array.isArray(feed.data[keyword])) {
    return (
      <div className="feed">
        {feed.data[keyword].map(
          (item: any, idx: number) => <FeedItem key={item.id || idx} {...item} />
        )}
      </div>
    );
  } else {
    return (
      <InitForm />
    );
  }
};
