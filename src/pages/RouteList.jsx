import { useEffect, useRef, useState } from "react";
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
import routePlaceholder from "../assets/pictures/routePlaceholder";
import CreateRouteModal from "../components/createRouteModal";
import { supabase } from "../supabase";
import RouteCard from "../components/routeCard";

const RouteData = [""];

const NoRoutesFound = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [startCoords, setStartCoords] = useState([]);
  const [destinationCoords, setDestinationCoords] = useState([]);

  const persistRoute = (start, destination) => {
    setStartCoords(start);
    setDestinationCoords(destination);
    setIsOpen(false);
  };

  return (
    <ion-content
      class="ion-padding"
      style={{ overflow: "hidden" }}
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
          <IonContent className="ion-padding" style={{ height: "400px" }}>
            <CreateRouteModal
              onDismiss={() => setIsOpen(false)}
              persistRoute={persistRoute}
            />
          </IonContent>
        </IonModal>
      </div>
    </ion-content>
  );
};

const RouteList = () => {
  const [allRoutes, setAllRoutes] = useState([]);

  const getAllRoutes = async () => {
    let { data: Routes, error } = await supabase.from("Routes").select("*");

    setAllRoutes(Routes);
  };

  useEffect(() => {
    getAllRoutes();
  }, []);

  console.log(allRoutes);
  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar>
          <IonTitle>Available Routes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Available Routes</IonTitle>
          </IonToolbar>
        </IonHeader>
        {allRoutes ? (
          allRoutes.map((route) => (
            <RouteCard
              originCity="Kansas City"
              DestinationCity="Springfield"
              hours={"12 - 17"}
              miles={831}
              destinationAddress="2075 Princeton Ave, College Park, GA 30337"
            ></RouteCard>
          ))
        ) : (
          <NoRoutesFound />
        )}
      </IonContent>
    </IonPage>
  );
};

export default RouteList;
