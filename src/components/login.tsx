import React, { useState } from "react";
import store from "../store/store";
import authSlice from "../store/slices/auth";

const Login = () => {
  const [userName, setUserName] = useState("Dennis");
  const [password, setPassword] = useState("5804");
  const [displayLoginError, setDisplayLoginError] = useState(false);

  const confirmLogin = () => {
    if (userName === "Dennis" && password === "5804") {
      //... maybe fix
      store.dispatch(authSlice.actions.confirmLogin());
    } else {
      setDisplayLoginError(true);
    }
  };
  return (
    <div className="w-screen pt-4">
      {displayLoginError && (
        <div className="bg-red-500 text-white w-screen p-4 grid place-items-center ">
          Login Daten prüfen!
        </div>
      )}
      <strong className="w-screen text-white w-full ml-4">Benutzername</strong>
      <div className="w-full grid place-items-center">
        <input
          type="text"
          className="w-11/12 m-auto p-3 bg-transparent text-white rounded-lg border-2 border-neutral-400"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <strong className="w-screen text-white w-full ml-4">Passwort</strong>
      <div className="w-full grid place-items-center">
        <input
          className="w-11/12 m-auto p-3 bg-transparent text-white rounded-lg border-2 border-neutral-400"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-green-300 p-3 text-lg text-white uppercase w-11/12 rounded-md mt-4"
          onClick={confirmLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
