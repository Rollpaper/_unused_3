import * as React from 'react';
import { FC, FormEventHandler, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchFeed, selectIsLoading } from '../ducks/feed';

export const InitForm: FC = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);

  const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>(evt => {
    evt.preventDefault();

    const urlElem = evt.currentTarget.elements.namedItem('url') as HTMLInputElement;
    // FIXME: validate URL
    const url = urlElem.value;

    dispatch(fetchFeed(url));
  }, [ dispatch ]);

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <input name="url" placeholder="URL" />
        <button disabled={isLoading}>Fetch</button>
      </form>
    </div>
  );
};
