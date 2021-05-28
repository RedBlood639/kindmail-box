import { GET_GATEGORIES, GET_PREVIEW } from "../types";

const initialState = {
  lists: [],
  preview: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GATEGORIES:
      return {
        ...state,
        lists: action.payload,
      };
    case GET_PREVIEW:
      return {
        ...state,
        preview: action.payload,
      };
    default:
      return state;
  }
};
