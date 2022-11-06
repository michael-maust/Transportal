import {
  CreateAnimation,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import {IonReactRouter} from "@ionic/react-router";
import {speedometer, map, bed} from "ionicons/icons";
import RestSpots from "../pages/RestSpots";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Welcome from "../pages/Welcome";
import RouteList from "../pages/RouteList";
import ActiveRoute from "../pages/ActiveRoute";
import NoActiveRoutesFound from "../pages/NoActiveRoutes";
import {useRef} from "react";
import {useEffect, useState} from "react";
import {Route} from "react-router";
import {PrivateRoute} from "./PrivateRoute";

const SwitchTabBar = () => {
  const [showTabBar, setShowTabBar] = useState(false);
  const [activeTab, setActiveTab] = useState("tab0");
  const switchRefs = useRef([]);

  let pathArray = window.location.pathname.split("/");

  useEffect(() => {
    let showTabBar = ["signin", "signup", "welcome"].includes(pathArray[1]);
    setShowTabBar(showTabBar);
  }, [pathArray]);

  const tabs = [
    {
      label: "Routes",
      url: "/routes",
      icon: map,
      component: RouteList,
    },
    {
      label: "Active Route",
      url: "/activeRoute",
      icon: speedometer,
      component: ActiveRoute,
    },
    {
      label: "Rest",
      url: "/rest",
      icon: bed,
      component: RestSpots,
    },
  ];

  const revealAnimation = {
    property: "transform",
    fromValue: "translateY(30px)",
    toValue: "translateX(0px)",
  };

  const switchAnimation = {
    duration: 200,
    direction: "normal",
    iterations: "1",
    fromTo: [revealAnimation],
    easing: "ease-in-out",
  };

  const getTabButtonStyle = () => {
    const tabStyle = {
      backgroundColor: "#48484a",
      color: "#DF7A5E",
      transition: "0.5s all ease-in-out",
      borderRadius: "10px",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    };

    return tabStyle;
  };

  useEffect(() => {
    const tabIndex = activeTab.match(/\d+/)[0];
    switchRefs.current[tabIndex].animation.play();
  }, [activeTab]);

  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          {tabs.map((tab, index) => {
            return (
              <Route key={index} exact path={tab.url}>
                <tab.component />
              </Route>
            );
          })}

          <PrivateRoute component={RouteList} exact path="/" />

          <Route exact path="/signin">
            <SignIn />
          </Route>

          <Route exact path="/signup">
            <SignUp />
          </Route>

          <Route exact path="/welcome">
            <Welcome />
          </Route>
        </IonRouterOutlet>

        <IonTabBar
          hidden={showTabBar}
          slot="bottom"
          onIonTabsDidChange={(e) => setActiveTab(e.detail.tab)}
        >
          {tabs.map((tab, index) => {
            const tabStyle = getTabButtonStyle(tab);
            const isActive = activeTab === `tab${index}`;

            return (
              <IonTabButton
                key={index}
                style={isActive ? tabStyle : {color: "#C1C1C2"}}
                tab={`tab${index}`}
                href={tab.url}
              >
                <IonIcon icon={tab.icon} />

                {isActive && (
                  <CreateAnimation
                    ref={(ref) => (switchRefs.current[index] = ref)}
                    {...switchAnimation}
                  >
                    <IonLabel>{tab.label}</IonLabel>
                  </CreateAnimation>
                )}
              </IonTabButton>
            );
          })}
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};

export default SwitchTabBar;
