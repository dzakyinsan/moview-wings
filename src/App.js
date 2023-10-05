import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Detail from "./routes/DetailMovie";

import "./App.css";

function App() {
  const pathName = window.location.pathname.split("/")[1];
  return (
    <div>
      <BrowserRouter>
        {pathName !== "login" && <Header />}
        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"/login"} exact component={Login} />
          <Route path={"/detail/:id"} exact component={Detail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
