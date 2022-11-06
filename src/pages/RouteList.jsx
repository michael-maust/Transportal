import {useRef, useState} from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonModal,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
  IonImg,
  IonSearchbar,
} from "@ionic/react";
import { Geolocation } from "@capacitor/geolocation";

// const getCurrentLocation = async () => {
//   const coordinates = await Geolocation.getCurrentPosition();
//   console.log('Current position: ', coordinates);
// }
import routePlaceholder from "../assets/pictures/routePlaceholder";
import CreateRouteModal from "../components/createRouteModal";

const RouteData = [];

const NoRoutesFound = () => {
  const modal = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ion-content
      class="ion-padding"
      style={{overflow: "hidden"}}
      fullscreen={true}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "8px",
          width: "full",
          height: "100%",
          position: "relative",
        }}
      >
        {routePlaceholder}
        <p
          style={{
            maxWidth: "400px",
            textAlign: "center",
            fontFamily: "Roboto-Medium",
            fontSize: "32px",
            padding: 0,
            margin: "12px",
          }}
        >
          No Routes Found
        </p>

        <IonButton
          onClick={() => setIsOpen((currentValue) => !currentValue)}
          color="primary"
          style={{
            width: "200px",
            position: "relative",
          }}
          id="open-modal"
        >
          Add Route
        </IonButton>

        <IonModal
          isOpen={isOpen}
          initialBreakpoint={0.25}
          breakpoints={[0, 0.25, 0.5, 0.25]}
          style={{
            width: "80%",
            height: "30%",
            minHeight: 0,
            maxHeight: "250px",
            top: "50%",
            bottom: 0,
            left: "10%",
            right: "10%",
            paddingTop: "100px",
          }}
        >
          <IonContent className="ion-padding" style={{height: "400px"}}>
            <div className="">TEST</div>
          </IonContent>
        </IonModal>
      </div>
    </ion-content>
  );
};

const RouteList = () => {
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');

  Geolocation.watchPosition({}, (data, error) => {
    console.log(data)
    if (data) {
      setLat(data.coords.latitude);
      setLng(data.coords.longitude);
    }
  });

  return (
    <IonPage scrollable={false}>
      <IonHeader class="ion-no-border">
        <IonToolbar>
          <IonTitle>Available Routes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent scrollable={false}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Available Routes</IonTitle>
          </IonToolbar>
        </IonHeader>
        <p>Lat: {lat}</p>
        <p>Lng: {lng}</p>
        {RouteData.length === 0 && <NoRoutesFound />}
      </IonContent>
    </IonPage>
  );
};

export default RouteList;
