import React, {useRef, useState} from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonModal,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
  IonImg,
  IonSearchbar,
} from "@ionic/react";
import routePlaceholder from "../assets/pictures/routePlaceholder";

const NoActiveRoutesFound = () => {

  const modal = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ion-content
      class="ion-padding"
      style={{overflow: "hidden"}}
      fullscreen={true}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "8px",
          width: "full",
          height: "100%",
          position: "relative",
        }}
      >
        <IonHeader style={{marginTop: "-245px", marginBottom: "280px"}} class="ion-no-border md header-md header-collapse-none hydrated">
          <ion-toolbar class="toolbar-title-default md in-toolbar hydrated">
              <ion-title class="md title-default hydrated" style={{marginLeft: "-0.6em"}}>
                Active Routes
              </ion-title>
          </ion-toolbar>
        </IonHeader>
        {routePlaceholder}
        <p
          style={{
            maxWidth: "400px",
            textAlign: "center",
            fontFamily: "Roboto-Medium",
            fontSize: "32px",
            padding: 0,
            margin: "12px",
          }}
        >
          No Routes Found
        </p>
        <p style={{fontFamily: "Roboto-Italic", marginBottom: "-5px"}}>Start a route from the</p>
        <IonButton color="primary" routerLink="/routes" class="ion-color ion-color-primary md button button-solid ion-activatable ion-focusable hydrated ion-activated" style={{width: "200px", position: "relative", fontWeight: "bold"}}>Routes Page</IonButton>

        
      </div>
    </ion-content>
  );
};

export default NoActiveRoutesFound;