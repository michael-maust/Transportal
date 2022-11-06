import React, {useState} from "react";
import {IonContent, IonList, IonButton} from "@ionic/react";
import TranpsortalMap from "./TransportalMap";

function CreateRouteModal(props) {
  return (
    <IonContent className="ion-padding">
      <IonList
        style={{
          paddingTop: "40px",
          display: "flex",
          justifyContent: "end",
          flexDirection: "column",
        }}
      >
        <TranpsortalMap persistRoute={props.persistRoute} />

        <div style={{marginTop: "20px", marginBottom: "20px"}}>
          <ion-label>Per Mile Rate</ion-label>
          <ion-input placeholder="Per Mile Rate"></ion-input>
        </div>

        <div style={{display: "grid", gridTemplateColumns: "repeat(2, 1fr"}}>
          <IonButton color="light" onClick={props.onDismiss}>
            Close
          </IonButton>
          <IonButton color="tertiary" onClick={props.onDismiss}>
            Create Route
          </IonButton>
        </div>
      </IonList>
    </IonContent>
  );
}

export default CreateRouteModal;
