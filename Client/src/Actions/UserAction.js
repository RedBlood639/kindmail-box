import axios from "axios";
import { SERVERURL, SETUSERINFO } from "../types";
import { OnshowAlert } from "./ShowAlertAction";
import { goBack, navigateTo } from "framework7-redux";
export const OnaddNodeType = (userinfo) => (dispatch) => {
  dispatch({ type: SETUSERINFO, payload: userinfo });
};
