import {
  GETLISTITEM,
  GETLISTITEMS,
  INITIAL,
  SCREENPLUS,
  SCREENINIT,
} from "../types";

const initialState = {
  lists: [],
  preview: {
    itself: "",
    list: [],
  },
  screenlist: [{ parentID: null, type: "NULL" }],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GETLISTITEMS:
      return {
        ...state,
        lists: action.payload,
      };
    case GETLISTITEM:
      state.preview.itself = action.payload.id;
      state.preview.list = action.payload.list;
      return {
        ...state,
      };
    case INITIAL:
      return {
        ...state,
        preview: {
          itself: "",
          list: [],
        },
      };
    case SCREENPLUS:
      let data = {};
      data.parentID = action.payload.parentID;
      data.type = action.payload.type;
      state.screenlist.push(data);
      return {
        ...state,
      };
    case SCREENINIT:
      return {
        ...state,
        screenlist: action.payload,
      };
    default:
      return state;
  }
};
