import * as React from 'react';
import { FC } from 'react';

type FeedItemProps = {
  id: string;
  payload: PhotoPayload;
};

type PhotoPayload = {
  method: 'photo';
  params: {
    caption: string;
    photo: string;
  }
};

export const FeedItem: FC<FeedItemProps> = ({ payload, id }) => {
  return (
    <div className="feed-item">
      <figure>
        <img src={payload.params.photo} alt={payload.params.caption} />
        <figcaption>
          {payload.params.caption}
        </figcaption>
      </figure>
    </div>
  );
};
