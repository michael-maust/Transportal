import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";

const ActiveRoute = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ActiveRoute</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">ActiveRoute</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="ActiveRoute page" />
      </IonContent>
    </IonPage>
  );
};

export default ActiveRoute;
