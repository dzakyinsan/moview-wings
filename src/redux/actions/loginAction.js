import Swal from "sweetalert2";

import { USER_LOGIN_SUCCESS, USER_LOGIN_FAILED, USER_LOGOUT } from "./types";

export const onUserLogin = (email, password, is_18) => {
  return (dispatch) => {
    if (!email || !password) {
      dispatch({
        type: USER_LOGIN_FAILED,
        payload: "email and password must be entered",
      });
    } else if (!is_18) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Minimal umur 18 tahun",
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch({
        type: USER_LOGIN_FAILED,
        payload: "minimal umur 18 tahun",
      });
    } else {
      localStorage.setItem("email", email);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Signed in successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch({ type: USER_LOGIN_SUCCESS, payload: { username: email } });
    }
  };
};

export const onUserLogout = () => {
  return (dispatch) => {
    Swal.fire({
      title: "Are you sure want to logout?",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "grey",
      confirmButtonText: "Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Logged out!");
        localStorage.clear();
        dispatch({ type: USER_LOGOUT });
      }
    });
  };
};
