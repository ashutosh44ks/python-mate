import {
  POST_DATA_REQUEST,
  POST_DATA_SUCCESS,
  POST_DATA_FAILURE,
} from "./suType";

const initialState = {
  loading: false,
  data: [],
  error: "",
  status: ""
};



const suReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        status: 1
      };
    case POST_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        status: 0
      };
    default:
      return state;
  }
};

 export default suReducer;