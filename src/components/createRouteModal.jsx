import React from "react";
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

function CreateRouteModal() {
  return (
    <IonContent className="ion-padding">
      <IonList>
        <IonButton color="light">Close</IonButton>
        <IonItem>
          <IonAvatar slot="start">
            <IonImg src="https://i.pravatar.cc/300?u=b" />
          </IonAvatar>
          <IonLabel>
            <h2>Connor Smith</h2>
            <p>Sales Rep</p>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonAvatar slot="start">
            <IonImg src="https://i.pravatar.cc/300?u=a" />
          </IonAvatar>
          <IonLabel>
            <h2>Daniel Smith</h2>
            <p>Product Designer</p>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonAvatar slot="start">
            <IonImg src="https://i.pravatar.cc/300?u=d" />
          </IonAvatar>
          <IonLabel>
            <h2>Greg Smith</h2>
            <p>Director of Operations</p>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonAvatar slot="start">
            <IonImg src="https://i.pravatar.cc/300?u=e" />
          </IonAvatar>
          <IonLabel>
            <h2>Zoey Smith</h2>
            <p>CEO</p>
          </IonLabel>
        </IonItem>
      </IonList>
    </IonContent>
  );
}

export default CreateRouteModal;
