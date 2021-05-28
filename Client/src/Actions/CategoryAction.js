import { GET_GATEGORIES, GET_PREVIEW, SERVERURL } from "../types";
import axios from "axios";
import { showAlert } from "framework7-redux";

export const getCategories = () => (dispatch) => {
  axios
    .get(`${SERVERURL}/api/category/getcategories`)
    .then((res) => {
      dispatch({ type: GET_GATEGORIES, payload: res.data });
    })
    .catch((err) => {
      dispatch(showAlert(err, "ERROR!"));
    });
};
export const addCategory = (value) => (dispatch) => {
  axios
    .post(`${SERVERURL}/api/category/create`, value)
    .then((res) => {
      dispatch(getCategories());
    })
    .catch((err) => {
      dispatch(showAlert(err, "ERROR!"));
    });
};
export const previewCategory = (id) => (dispatch) => {
  axios
    .get(`${SERVERURL}/api/category/preview`, { params: { id } })
    .then((res) => {
      dispatch({ type: GET_PREVIEW, payload: res.data });
    })
    .catch((err) => {
      dispatch(showAlert(err, "ERROR!"));
    });
};
