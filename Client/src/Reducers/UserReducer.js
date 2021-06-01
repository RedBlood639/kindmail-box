import { SETUSERINFO } from "../types";

const initialState = {
  user: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SETUSERINFO:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
