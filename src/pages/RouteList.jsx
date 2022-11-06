import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Geolocation } from "@capacitor/geolocation";
import ExploreContainer from "../components/ExploreContainer";
import { useState } from "react";

// const getCurrentLocation = async () => {
//   const coordinates = await Geolocation.getCurrentPosition();
//   console.log('Current position: ', coordinates);
// }

const RouteList = () => {
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');

  Geolocation.watchPosition({}, (data, error) => {
    console.log(data)
    setLat(data.coords.latitude);
    setLng(data.coords.longitude);
  });

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
        <p>Lat: {lat}</p>
        <p>Lng: {lng}</p>
      </IonContent>
    </IonPage>
  );
};

export default RouteList;
