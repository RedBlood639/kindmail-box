import { GET_GATEGORIES, SERVERURL } from "../types";
import axios from "axios";
export const getCategories = () => (dispatch) => {
  let res = axios.get(`${SERVERURL}/api/category/getcategories`);
  console.log(res);
};
export const addCategory = (value) => (dispatch) => {
  let res = axios.post(`${SERVERURL}/api/category/create`, value);
};
