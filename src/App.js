import Axios from "axios";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./redux/Store";
import SignUpContainer from "./Components/SignUpContainer";
import SignInContainer from "./Components/SignInContainer";

const App = () => {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });

  return (
    <Provider store={store}>
      <div className="main">
        <SignUpContainer data={data} setData={setData} />
        <SignInContainer creds={creds} setCreds={setCreds} />
      </div>
    </Provider>
  );
};

export default App;
