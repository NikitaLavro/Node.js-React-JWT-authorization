import React, { useContext, useEffect } from "react";
import { Context } from ".";
import LoginForm from "./components/LoginForm";
import { observer } from "mobx-react-lite";

function App() {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, []);

  return (
    <div className="App">
      <h1>
        {store.isAuth
          ? `User is logged in ${store.user.email}`
          : `Please log in`}
      </h1>
      <LoginForm />
    </div>
  );
}

export default observer(App);
