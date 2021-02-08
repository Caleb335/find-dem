import {
  LOADING_TRANSLATION,
  TRANSLATED_CURRENCY,
  ERROR_TRANSLATING,
} from "./types";

// the loading action creator
export const loading = () => {
  return {
    type: LOADING_TRANSLATION,
  };
};

// get translation action
export const getTranslation = (payload) => {
  return {
    type: TRANSLATED_CURRENCY,
    payload,
  };
};

// error translating the user's imput
export const errorTranslating = (error) => {
  return {
    type: ERROR_TRANSLATING,
    payload: error,
  };
};
