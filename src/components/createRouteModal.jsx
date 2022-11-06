import React, { useState } from "react";
import {
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
  IonImg,
  IonSearchbar,
  IonButton,
} from "@ionic/react";
import TranpsortalMap from "./TransportalMap";

function CreateRouteModal(props) {
  return (
    <IonContent className="ion-padding">
      <IonList>
        <IonButton color="light" onClick={props.onDismiss}>Close</IonButton>
        <TranpsortalMap persistRoute={props.persistRoute} />
      </IonList>
    </IonContent>
  );
}

export default CreateRouteModal;
