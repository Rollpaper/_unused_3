export const FEED_REQUEST = 'FEED_REQUEST';
export const FEED_SUCCESS = 'FEED_SUCCESS';
export const FEED_FAILURE = 'FEED_FAILURE';

export const fetchFeed = url => async dispatch => {
  dispatch({
    type: FEED_REQUEST,
    payload: url,
  });
  try {
    const response = await fetch(url);
    const json = await response.json();
    dispatch({
      type: FEED_SUCCESS,
      payload: json,
    });
  } catch (e) {
    dispatch({
      type: FEED_FAILURE,
      error: {
        code: e.name,
        message: e.message,
      },
    });
  }
};

const initialState = {
  status: 'idle',
  url: null,
  data: null,
  error: null,
};

export function selectFeed(state) {
  return state.feed;
}

export function selectIsLoading(state) {
  return state.feed.status !== 'idle';
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
  case FEED_REQUEST:
    return {
      ...state,
      status: 'loading',
      url: action.url,
    };
  case FEED_SUCCESS:
    return {
      ...state,
      status: 'idle',
      error: null,
      data: action.payload,
    };
  case FEED_FAILURE:
    return {
      ...state,
      status: 'idle',
      error: action.error,
    };
  default:
    return state;
  }
};
