import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../../requestMethod";

const login = async (dispatch, user) => {
  dispatch(loginStart());

  try {
    const res = await publicRequest.post("users/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export { login };
