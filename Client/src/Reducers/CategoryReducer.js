import { GETLISTITEM, GETLISTITEMS } from "../types";

const initialState = {
  lists: [],
  preview: {
    parentID: null,
    list: [],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GETLISTITEMS:
      return {
        ...state,
        lists: action.payload,
      };
    case GETLISTITEM:
      state.preview.parentID = action.payload.parentId;
      state.preview.list = state.lists.filter(
        (item) => item._id === action.payload.id
      );
      return {
        ...state,
      };
    default:
      return state;
  }
};
