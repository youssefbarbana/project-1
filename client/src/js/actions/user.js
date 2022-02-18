import axios from "axios";
import {
  FAIL_USER,
  LOAD_USER,
  REGISTER_USER,
  LOGIN_USER,
  CURRENT_USER,
  LOGOUT_USER,
} from "../const/user";

export const registerUser = (user, navigate) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const result = await axios.post("/user/register", user); //{newUser,msg,token}
    //localStorage.setItem("token",result.data.token)
    dispatch({ type: REGISTER_USER, payload: result.data });
    navigate("/dashbord");
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data });
  }
};

export const loginUser = (user, navigate) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const result = await axios.post("/user/login", user); //{user,msg,token}
    dispatch({ type: LOGIN_USER, payload: result.data });
    navigate("/dashbord");
  } catch (error) {
    const { errors, msg } = error.response.data;
    if (Array.isArray(errors)) errors.forEach((err) => alert(err.msg));
    if (msg) {
      alert(msg);
    }
    dispatch({ type: FAIL_USER, payload: error.response.data });
    console.log(error);
  }
};

export const current = () => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  const options = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    let result = await axios.get("/user/current", options);
    //user
    dispatch({ type: CURRENT_USER, payload: result.data.user });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data });
    console.log(error);
  }
};

export const logout = () => {
  return {
    type: LOGOUT_USER,
  };
};
