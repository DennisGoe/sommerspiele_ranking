import React from "react";
import Login from "../components/login";
import store from "../store/store";
import { useSelector } from "react-redux";
import AddRemovePage from "./addRemovePage";

const AdminPage = () => {
  const authStatus = useSelector(() => store.getState().auth.auth);
  return (
    <div className="bg-neutral-700 w-full h-screen">
      {!authStatus && <Login />}
      {authStatus && <AddRemovePage />}
    </div>
  );
};

export default AdminPage;
