import axios from "axios";
import {
  SERVERURL,
  GETLISTITEM,
  GETLISTITEMS,
  INITIAL,
  SCREENPLUS,
  SCREENINIT,
} from "../types";
import { OnshowAlert } from "./ShowAlertAction";
import { goBack, navigateTo } from "framework7-redux";
export const OnaddNodeType = (value, id, parentID) => (dispatch) => {
  axios
    .post(`${SERVERURL}/api/nodetype/create`, { value, id, parentID })
    .then((res) => {
      dispatch(ChooseRouter("HOME"));
      dispatch({ type: INITIAL, payload: [] });
      Promise.resolve();
    })
    .catch((err) => OnshowAlert("ERROR", "we can't add Basic Node Type."));
};
export const getListItems = (id = "") => (dispatch) => {
  axios
    .get(`${SERVERURL}/api/getlistitems`, { params: { id } })
    .then((res) => {
      dispatch({ type: GETLISTITEMS, payload: res.data });
    })
    .catch((err) => OnshowAlert("ERROR", "we can't have Datas."));
};
export const getListItem = (id, type) => (dispatch) => {
  console.log(id, type);

  axios
    .get(`${SERVERURL}/api/getlistitem`, { params: { id } })
    .then((res) => {
      dispatch(ChooseRouter(type));
      dispatch(getListItems(id));
      dispatch({ type: SCREENPLUS, payload: { parentID: id, type } });
      dispatch({ type: GETLISTITEM, payload: { id, list: res.data } });
      Promise.resolve();
    })
    .catch((err) => OnshowAlert("ERROR", "we can't have Datas."));
};
export const BackRouter2 = (routerlist) => (dispatch) => {
  if (routerlist.length === 1) {
    dispatch(goBack());
  } else {
    let router = routerlist[routerlist.length - 1];

    axios
      .get(`${SERVERURL}/api/getlistitem`, {
        params: { id: router.parentID },
      })
      .then((res) => {
        dispatch(getListItems(router.parentID));
        dispatch({
          type: GETLISTITEM,
          payload: { id: router.parentID, list: res.data },
        });
        dispatch(ChooseRouter(router.type));
        Promise.resolve();
      })
      .catch((err) => OnshowAlert("ERROR", "we can't have Datas."));
  }
};
export const BackRouter1 = (itself, Routerlist) => (dispatch) => {
  if (itself !== "") {
    if (Routerlist.length === 1) {
      dispatch({ type: INITIAL, payload: [] });
      dispatch({
        type: SCREENINIT,
        payload: [{ parentID: null, type: "NULL" }],
      });
      dispatch(getListItems());
      dispatch(ChooseRouter("HOME"));
      Promise.resolve();
    } else {
      Routerlist.pop();
      let router = Routerlist[Routerlist.length - 1];
      if (router.parentID === null) {
        dispatch({ type: INITIAL, payload: [] });
        dispatch({
          type: SCREENINIT,
          payload: [{ parentID: null, type: "NULL" }],
        });
        dispatch(getListItems());
        dispatch(ChooseRouter("HOME"));
        Promise.resolve();
      } else {
        axios
          .get(`${SERVERURL}/api/getlistitem`, {
            params: { id: router.parentID },
          })
          .then((res) => {
            dispatch(getListItems(router.parentID));
            dispatch({
              type: GETLISTITEM,
              payload: { id: router.parentID, list: res.data },
            });
            dispatch(ChooseRouter(router.type));
            Promise.resolve();
          })
          .catch((err) => OnshowAlert("ERROR", "we can't have Datas."));
      }
    }
  } else {
    dispatch(goBack());
  }
};
export const subItemRouter = () => (dispatch) => {
  dispatch(ChooseRouter("NODETYPE"));
  dispatch({ type: INITIAL, payload: [] });
  Promise.resolve();
};
export const ChooseRouter = (type) => (dispatch) => {
  switch (type) {
    case "HOME":
      return dispatch(navigateTo("/home/"));
    case "NODETYPE":
      return dispatch(navigateTo("/nodetype/"));
    case "BASIC":
      return dispatch(navigateTo("/nodetype/basic/"));
    case "INVOICE":
      return dispatch(navigateTo("/nodetype/invoice/"));
    default:
      break;
  }
};
