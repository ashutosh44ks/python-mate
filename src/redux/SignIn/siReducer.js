import {
  VERIFY_DATA_REQUEST,
  VERIFY_DATA_SUCCESS,
  VERIFY_DATA_FAILURE,
} from "./siType";

const initialState = {
  loading: false,
  data: [],
  error: "",
  status: ""
};



const siReducer = (state = initialState, action) => {
  switch (action.type) {
    case VERIFY_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case VERIFY_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        status: 1
      };
    case VERIFY_DATA_FAILURE:
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

 export default siReducer;