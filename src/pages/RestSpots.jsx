import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";

const RestSpots = () => {
  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar>
          <IonTitle>Rest Spots</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Rest Spots</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Rest Spots" />
      </IonContent>
    </IonPage>
  );
};

export default RestSpots;
