import {
  POST_DATA_REQUEST,
  POST_DATA_SUCCESS,
  POST_DATA_FAILURE,
} from "./suType";
import axios from "axios";

export const postDataRequest = () => {
  return {
    type: POST_DATA_REQUEST,
  };
};
export const postDataSuccess = (data) => {
  return {
    type: POST_DATA_SUCCESS,
    payload: data,
  };
};
export const postDataFailure = (error) => {
  return {
    type: POST_DATA_FAILURE,
    payload: error,
  };
};

export const postData = ( data ) => {
  return (dispatch) => {
    dispatch(postDataRequest);
    console.log(data);
    axios
      .post("http://13.127.127.40/api/user/", data)
      .then(function (response) {
        console.log(response);
        dispatch(postDataSuccess(response.data.message));
      })
      .catch(function (error) {
        console.log(error);
        dispatch(postDataFailure(error));
      });
  };
};
