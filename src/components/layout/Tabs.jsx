import React from "react";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
} from "@ionic/react";
import {home, settings} from "ionicons/icons";
import {Route} from "react-router-dom";
import {IonReactRouter} from "@ionic/react-router";

import Dashboard from "../../routes/dashboard";
import Login from "../../routes/login";

const Tabs = () => (
  <IonReactRouter>
    <IonTabs>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/app/dashboard">
          <IonIcon icon={home} />
          <IonLabel>home</IonLabel>
        </IonTabButton>

        <IonTabButton tab="settings" href="/login">
          <IonIcon icon={settings} />
          <IonLabel>Settings</IonLabel>
        </IonTabButton>
      </IonTabBar>

      <IonRouterOutlet>
        <Route path="" element={<Login />} />
        <Route path="/app/dashboard" element={<Dashboard />} />
      </IonRouterOutlet>
    </IonTabs>
  </IonReactRouter>
);

export default Tabs;
