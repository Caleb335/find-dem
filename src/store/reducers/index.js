import {
  TRANSLATED_CURRENCY,
  LOADING_TRANSLATION,
  ERROR_TRANSLATING,
} from "../types";

const initialState = {
  translatedResult: {
    amount: "100",
    currency_code: "GBP",
    language: "en",
  },
  loading: false,
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_TRANSLATION:
      return {
        ...state,
        loading: true,
      };
    case TRANSLATED_CURRENCY:
      return {
        ...state,
        loading: false,
        translatedResult: action.payload,
      };
    case ERROR_TRANSLATING:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
