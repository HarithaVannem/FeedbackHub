//Action creator ..This will ask whether user us logged in befor or not

import axios from "axios";
import { FETCH_USER } from "./types";
export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");
  const userData = res.data;
  dispatch({ type: FETCH_USER, payload: userData });
};

export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post("/api/stripe", token);

  dispatch({ type: FETCH_USER, payload: res.data });
};
