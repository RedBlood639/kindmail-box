import { showAlert } from "framework7-redux";

export const OnshowAlert = (title, content) => (dispatch) => {
  dispatch(showAlert(content, title));
};
