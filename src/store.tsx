import { createStore, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './ducks';

type State = any;
type Actions = any;

export const store = configureStore();

export function configureStore(initialState: State = {}) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(thunk as ThunkMiddleware<State, Actions>)
    )
  );
}
