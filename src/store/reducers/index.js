import {
  TRANSLATED_CURRENCY,
  LOADING_TRANSLATION,
  ERROR_TRANSLATING,
} from "../types";

const initialState = {
  translatedResult: [],
  loading: false,
  error: null,
};

const rootReducer = (state = initialState, action) => {
  if (action.type === LOADING_TRANSLATION) {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === TRANSLATED_CURRENCY) {
    return {
      ...state,
      loading: false,
      translatedResult: action.payload,
    };
  }
  if (action.payload === ERROR_TRANSLATING) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }
  return state;
};

export default rootReducer;
