import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
} from "@ionic/react";
import TranpsortalMap from "../components/TransportalMap";

const ActiveRoute = () => {
  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar>
          <IonTitle>Active Routes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">ActiveRoute</IonTitle>
          </IonToolbar>
        </IonHeader>
        <TranpsortalMap />
      </IonContent>
    </IonPage>
  );
};

export default ActiveRoute;
