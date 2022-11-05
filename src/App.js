import React from "react";

import {Redirect, Route} from "react-router-dom";
import {IonApp, IonRouterOutlet} from "@ionic/react";
import {IonReactRouter} from "@ionic/react-router";

import Home from "./routes/home";

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

/* Theme variables */
import "./theme/variables.css";

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/" exact={true}>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact={true}>
          <Home />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;

// import React from "react";

// // Route Imports
// import Login from "./routes/login";
// import Signup from "./routes/signup";
// import Welcome from "./routes/welcome";
// import Home from "./routes/home";
// import RouteList from "./routes/routeList";
// import RestSpots from "./routes/restSpots";

// import {
//   IonApp,
//   IonHeader,
//   IonToolbar,
//   IonTitle,
//   IonContent,
//   IonButton,
//   IonSegment,
//   IonSegmentButton,
//   IonPage,
//   IonTabs,
//   IonTabBar,
//   IonTabButton,
//   IonLabel,
//   IonRouterOutlet,
// } from "@ionic/react";

// import {IonReactRouter} from "@ionic/react-router";

// import {Route, Redirect} from "react-router-dom";

// /* Core CSS required for Ionic components to work properly */
// import '@ionic/core/css/core.css';

// /* Basic CSS for apps built with Ionic */
// import '@ionic/core/css/normalize.css';
// import '@ionic/core/css/structure.css';
// import '@ionic/core/css/typography.css';

// /* Optional CSS utils that can be commented out */
// import '@ionic/core/css/padding.css';
// import '@ionic/core/css/float-elements.css';
// import '@ionic/core/css/text-alignment.css';
// import '@ionic/core/css/text-transformation.css';
// import '@ionic/core/css/flex-utils.css';
// import '@ionic/core/css/display.css';

// const Brew = () => (
//   <IonPage>
//     <IonSegment>
//       <IonSegmentButton>Espresso</IonSegmentButton>
//       <IonSegmentButton>Macchiato</IonSegmentButton>
//       <IonSegmentButton checked>Flat white</IonSegmentButton>
//     </IonSegment>
//     <IonButton expand="full">Brew</IonButton>
//   </IonPage>
// );

// const Settings = () => <IonPage>Settings</IonPage>;

// function App() {
//   return (
//     <IonApp>
//       <IonReactRouter>
//         <IonHeader>
//           <IonToolbar>
//             <IonTitle>Smart Brewer</IonTitle>
//           </IonToolbar>
//         </IonHeader>
//         <IonContent>
//           <IonTabs>
//             <IonRouterOutlet>
//               <Route path="/login" component={Brew} exact />
//               <Route path="/home" component={Settings} exact />
//               <Redirect from="/" to="/brew" />
//             </IonRouterOutlet>
//             <IonTabBar slot="bottom">
//               <IonTabButton tab="brew" href="/brew">
//                 <IonLabel>Brew</IonLabel>
//               </IonTabButton>
//               <IonTabButton tab="settings" href="/settings">
//                 <IonLabel>Settings</IonLabel>
//               </IonTabButton>
//             </IonTabBar>
//           </IonTabs>
//         </IonContent>
//       </IonReactRouter>
//     </IonApp>
//   );
// }

// export default App;

// // Route Imports
// import Login from "./routes/login";
// import Signup from "./routes/signup";
// import Welcome from "./routes/welcome";
// import Home from "./routes/home";
// import RouteList from "./routes/routeList";
// import RestSpots from "./routes/restSpots";

// <Route path="/login" element={<Login />} />
// <Route path="/signup" element={<Signup />} />
// <Route path="/welcome" element={<Welcome />} />
// <Route path="/home" element={<Home />} />
// <Route path="/routes" element={<RouteList />} />
// <Route path="/rest" element={<RestSpots />} />
