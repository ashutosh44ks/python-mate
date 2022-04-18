import { useDispatch, useSelector } from "react-redux";
import { postData } from "../redux/";
import { useState, useEffect } from "react";

const SignUpContainer = ({ data, setData }) => {
  const dispatch = useDispatch();
  const su = useSelector((state) => state.su);
  const [msg, setMsg] = useState("");
  useEffect(() => {
    if (su.status === 1) setMsg(su.data);
    else if (su.status === 0) setMsg(su.data);
  }, [su]);
  return (
    <div className="su-container">
      <form
        autoComplete="on"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(postData(data));
        }}
      >
        <div>
          <label>First Name</label>
          <input
            name="first-name"
            type="text"
            value={data.first_name}
            onChange={(e) => setData({ ...data, first_name: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            name="last-name"
            type="text"
            value={data.last_name}
            onChange={(e) => setData({ ...data, last_name: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            name="password"
            type="password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            required
          />
        </div>
        <input type="submit" />
      </form>
      <div className="msg">{msg}</div>
    </div>
  );
};

export default SignUpContainer;
