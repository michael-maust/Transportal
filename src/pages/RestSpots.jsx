import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import RestSpotCard from "../components/restSpotCard";

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
        <RestSpotCard
          title="Petro Travel Center"
          showersQuantity={4}
          availableSpaces={23}
          address="3181 Donald Lee Hollowell Pkwy NW, Atlanta, GA 30318"
        />
        <RestSpotCard
          title="Petro Travel Center"
          showersQuantity={4}
          availableSpaces={23}
          address="3181 Donald Lee Hollowell Pkwy NW, Atlanta, GA 30318"
        />
        <RestSpotCard
          title="Petro Travel Center"
          showersQuantity={4}
          availableSpaces={23}
          address="3181 Donald Lee Hollowell Pkwy NW, Atlanta, GA 30318"
        />
        <RestSpotCard
          title="Petro Travel Center"
          showersQuantity={4}
          availableSpaces={23}
          address="3181 Donald Lee Hollowell Pkwy NW, Atlanta, GA 30318"
        />
        <RestSpotCard
          title="Petro Travel Center"
          showersQuantity={4}
          availableSpaces={23}
          address="3181 Donald Lee Hollowell Pkwy NW, Atlanta, GA 30318"
        />
      </IonContent>
    </IonPage>
  );
};

export default RestSpots;
