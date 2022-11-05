import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Login from "./routes/login";
import Signup from "./routes/signup";
import Welcome from "./routes/welcome";
import Home from "./routes/home";
import RouteList from "./routes/routeList";
import RestSpots from "./routes/restSpots";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App />}>
          <Route path="/login" exact element={<Login />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/welcome" exact element={<Welcome />} />
          <Route path="/routes" exact element={<RouteList />} />
          <Route path="/rest" exact element={<RestSpots />} />
          <Route
            path="*"
            element={
              <main style={{padding: "1rem"}}>
                <p>There's nothing here!</p>
                <Link to="/">Back home!</Link>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
