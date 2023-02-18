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

  if (store.isLoading) {
    return <div>Loading...</div>;
  }

  if (!store.isAuth) {
    return <LoginForm />;
  }

  return (
    <div className="App">
      <h1>
        {store.isAuth
          ? `User is logged in ${store.user.email}`
          : `Please log in`}
      </h1>
      <button
        onClick={() => {
          store.logout();
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default observer(App);
