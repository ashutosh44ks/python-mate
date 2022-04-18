import { useDispatch, useSelector } from "react-redux";
import { verifyData } from "../redux/";
import { useState, useEffect } from "react";

const SignInContainer = ({ creds, setCreds }) => {
  const dispatch = useDispatch();
  const si = useSelector((state) => state.si);
  const [msg, setMsg] = useState("");
  useEffect(() => {
    if (si.status === 1) setMsg("Hi you are logged in!");
    else if (si.status === 0) setMsg("Invalid Login Details");
  }, [si]);
  return (
    <div className="si-container">
      <form
        autoComplete="on"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(verifyData(creds));
        }}
      >
        <div>
          <label>Email</label>
          <input
            name="emailcred"
            type="email"
            value={creds.email}
            onChange={(e) => setCreds({ ...creds, email: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            name="passwordcred"
            type="password"
            value={creds.password}
            onChange={(e) => setCreds({ ...creds, password: e.target.value })}
            required
          />
        </div>
        <input type="submit" />
      </form>
      <div className="msg">{msg}</div>
    </div>
  );
};

export default SignInContainer;
