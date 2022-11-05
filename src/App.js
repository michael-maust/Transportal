// Route Imports
import Login from "./routes/login";
import Signup from "./routes/signup";
import Welcome from "./routes/welcome";
import Home from "./routes/home";
import RouteList from "./routes/routeList";
import RestSpots from "./routes/restSpots";

import React from "react";
import "./App.css";
import {IonReactRouter} from "@ionic/react-router";
import {Route} from "react-router-dom";

import {IonApp, IonRouterOutlet} from "@ionic/react";

import {setupIonicReact} from "@ionic/react";

import "./theme/variables.css";

setupIonicReact();

function App() {
  return (
    <div
      style={{margin: "0 1rem 0 1rem", paddingTop: "env(safe-area-inset-top)"}}
    >
      <h1 className="dark:text-white text-center">Transportal</h1>

      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/routes" element={<RouteList />} />
            <Route path="/rest" element={<RestSpots />} />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </div>
  );
}

export default App;
