import {IonApp} from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import "./index.css";

/* Theme variables */
import "./theme/variables.css";
import "./theme/global.css";
import SwitchTabBar from "./components/SwitchTabBar";
import {createContext, useState} from "react";
import {AuthProvider} from "./contexts/Auth";

// TODO: updating routing as such: https://stackoverflow.com/questions/62359500/hide-tabs-on-login-screen-in-ionic-react

const App = () => {
  const [user, setUser] = useState();
  const [test, setTest] = useState();
  console.log("test");
  console.log(test);
  return (
    <AuthProvider>
      <IonApp>
        <SwitchTabBar setUser={setUser} setTest={setTest} />
      </IonApp>
    </AuthProvider>
  );
};

export default App;
