import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";

const RouteList = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>RouteList</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="bg-red-200 h-20 w-full">test</div>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">RouteList</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="RouteList page" />
      </IonContent>
    </IonPage>
  );
};

export default RouteList;
