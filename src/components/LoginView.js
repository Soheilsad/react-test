import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginView.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { setUserToken, setUserId, logoutUser } from "../redux/usercontext/userActions";
const LoginView = () => {
  const dispatch = useDispatch();
  const userToken = useSelector(state => state.user.token);
  const userId = useSelector(state => state.user.userId);
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    const response = await fetch("https://praxos-webapi.azurewebsites.net/api/loginFunction?code=gKnTOv19bYs5jBZ8TpREb35v5C0VA73xaXQtVLKL-WnWAzFuPy6UJw==", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("token", data.token);
      dispatch(setUserToken(data.token));
      dispatch(setUserId(data.userId));
      navigate("/"); // Handle the response accordingly
    } else {
      console.error("Failed to login"); // Handle the error accordingly
    }
  };

  return (
    <div className={styles.logoParent}>
      <div className={styles.logo}>
        <div className={styles.p}>P</div>
      </div>
      <div className={styles.logIn}>Log In</div>
      <div className={styles.pleaseFillIn}>
        Please fill in your username and password.
      </div>
      <div className={styles.inputField}>
        <div className={styles.selectedShape} />
        <div className={styles.message}>
          <img
            className={styles.exclamationIcon}
            alt=""
            src="/exclamation.svg"
          />
          <div className={styles.message1}>Message</div>
        </div>
        <div className={styles.field}>
          <div className={styles.iconLeft}>
            <img
              className={styles.emailMailIcon}
              alt=""
              src="/email-mail.svg"
            />
          </div>
          <div className={styles.indicator} />
              <input
            type="text"
            name="username"
            placeholder="Email address"
            value={credentials.username}
            onChange={handleInputChange}
            className={styles.inputField}
          />
          <div className={styles.indicatorRight} />
          <div className={styles.spacer} />
          <img
            className={styles.arrowDownIcon}
            alt=""
            src="/arrow-down.svg"
          />
        </div>
      </div>
      <div className={styles.inputField}>
        <div className={styles.selectedShape} />
        <div className={styles.message}>
          <img
            className={styles.exclamationIcon}
            alt=""
            src="/exclamation.svg"
          />
          <div className={styles.message1}>Message</div>
        </div>
        <div className={styles.field}>
          <div className={styles.iconLeft}>
            <img
              className={styles.emailMailIcon}
              alt=""
              src="/email-mail.svg"
            />
          </div>
          <div className={styles.indicator} />
          <input
        type="password"
        name="password"
        placeholder="Password"
        value={credentials.password}
        onChange={handleInputChange}
        className={styles.inputField}
      />          <div className={styles.indicatorRight} />
          <div className={styles.spacer} />
          <img
            className={styles.arrowDownIcon}
            alt=""
            src="/arrow-down.svg"
          />
        </div>
      </div>
      {/* Input fields for username and password */}


      <div className={styles.btnLogin}>
        {/* Submit button */}
        <button onClick={handleLogin} className={styles.submit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default LoginView;
