import axios from "axios";
import { SERVERURL, GETLISTITEM, GETLISTITEMS, INITIAL } from "../types";
import { OnshowAlert } from "./ShowAlertAction";
import { goBack, navigateTo } from "framework7-redux";
// .delete(`${SERVERURL}/api/category/delete`, { data: { deleteID: id } })
// .get(`${SERVERURL}/api/category/preview`, { params: { id } })
export const OnaddNodeType = (value) => (dispatch) => {
  axios
    .post(`${SERVERURL}/api/nodetype/create`, value)
    .then((res) => {
      dispatch(getListItems());
    })
    .catch((err) => OnshowAlert("ERROR", "we can't add Basic Node Type."));
};
export const getListItems = () => (dispatch) => {
  axios
    .get(`${SERVERURL}/api/getlistitems`)
    .then((res) => {
      dispatch({ type: GETLISTITEMS, payload: res.data });
    })
    .catch((err) => OnshowAlert("ERROR", "we can't have Datas."));
};
export const getListItem = (parentId, id, type) => (dispatch) => {
  dispatch({ type: GETLISTITEM, payload: { parentId, id } });
  dispatch(ChooseRouter(type));
};

export const ChooseRouter = (type) => (dispatch) => {
  switch (type) {
    case "BASIC":
      dispatch(navigateTo("/notetype/basic/"));
      break;
    case "INVOICE":
      dispatch(navigateTo("/notetype/invoice/"));
      break;
    default:
      break;
  }
};
export const BackRouter = (parentId) => (dispatch) => {
  dispatch(goBack());
  if (parentId === null) {
    // dispatch({ type: INITIAL, payload: [] });
  }
};
