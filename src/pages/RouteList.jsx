import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import routePlaceholder from "../assets/pictures/routePlaceholder";

const RouteData = [{}];

const NoRoutesFound = () => {
  return (
    <ion-content
      class="ion-padding"
      fullscreen={true}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {routePlaceholder}
      <p>
        Here's a small text description for the content. Nothing more, nothing
        less.
      </p>
    </ion-content>
  );
};

const RouteList = () => {
  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar>
          <IonTitle>Available Routes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Available Routes</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={<NoRoutesFound />}></ExploreContainer>
      </IonContent>
    </IonPage>
  );
};

export default RouteList;
