import "./App.css";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css"; // Remove if nothing is visible
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import { setupIonicReact } from "@ionic/react";

import "./theme/variables.css";
import { useState } from "react";
import { UserContext } from "./contexts/UserContext";

import Signup from "./routes/Signup";
import Login from "./routes/login";

import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonSegment,
  IonSegmentButton,
  IonPage,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonRouterOutlet,
} from "@ionic/react";

import { IonReactRouter } from "@ionic/react-router";

import { Route, Redirect, Routes } from "react-router-dom";

import React from "react";

setupIonicReact();

const Settings = () => <div>Hello from Settings!</div>;

function App() {
  const [user, setUser] = useState("");
  const [session, setSession] = useState("");
  return (
    <div>
      <div>Hello World</div>
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route path="" component={Settings} />
            <Route path="/login" component={Login} />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </div>
  );
}

export default App;
