import {
  COMPAREROOT,
  GET_GATEGORIES,
  GET_PREVIEW,
  INITIALCONTENT,
  ISPREVIEWER,
} from "../types";

const initialState = {
  lists: [],
  preview: {
    _id: "",
    name: "",
    totalName: "",
    description: "",
    iscontent: false,
    subs: [],
    parentId: null,
  },
  root: "",
  ispreviewer: false,
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
    case ISPREVIEWER:
      return {
        ...state,
        ispreviewer: action.payload,
      };
    case INITIALCONTENT:
      return {
        ...state,
        preview: initialState.preview,
      };
    case COMPAREROOT:
      return {
        ...state,
        root: action.payload,
      };
    default:
      return state;
  }
};
