import {
  VERIFY_DATA_REQUEST,
  VERIFY_DATA_SUCCESS,
  VERIFY_DATA_FAILURE,
} from "./siType";
import axios from "axios";

export const verifyDataRequest = () => {
  return {
    type: VERIFY_DATA_REQUEST,
  };
};
export const verifyDataSuccess = (data) => {
  return {
    type: VERIFY_DATA_SUCCESS,
    payload: data,
  };
};
export const verifyDataFailure = (error) => {
  return {
    type: VERIFY_DATA_FAILURE,
    payload: error,
  };
};

export const verifyData = ( creds ) => {
  return (dispatch) => {
    dispatch(verifyDataRequest);
    console.log(creds);
    axios
      .post("http://3.140.210.76:8000/api/token/", creds)
      .then(function (response) {
        console.log(response);
        dispatch(verifyDataSuccess(response.data.message));
      })
      .catch(function (error) {
        console.log(error);
        dispatch(verifyDataFailure(error));
      });
  };
};
