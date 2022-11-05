import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

// Route Imports
import Login from "./routes/login";
import Signup from "./pages/signup";
import Welcome from "./routes/welcome";
import Home from "./routes/home";
import RouteList from "./routes/routeList";
import RestSpots from "./routes/restSpots";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/routes" element={<RouteList />} />
          <Route path="/rest" element={<RestSpots />} />

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
