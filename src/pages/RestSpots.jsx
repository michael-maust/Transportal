import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useEffect } from "react";
import RestSpotCard from "../components/restSpotCard";
import { supabase } from "../supabase";
import { useState } from "react";

const RestSpots = () => {
  const [locations, setLocations] = useState();
  const getLocations = async () => {
    let { data: truck_stops, error } = await supabase
      .from("truck_stops")
      .select("*");

    setLocations(truck_stops);
  };

  useEffect(() => {
    getLocations();
  }, []);
  console.log("test locations");
  console.log(locations);
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
        {locations ? (
          locations.map((location) => (
            <RestSpotCard
              title={location.name}
              showersQuantity={location.showers}
              availableSpaces={location.parking_spots}
            ></RestSpotCard>
          ))
        ) : (
          <RestSpotCard
            title="Petro Travel Center"
            showersQuantity={4}
            availableSpaces={23}
            address="3181 Donald Lee Hollowell Pkwy NW, Atlanta, GA 30318"
          />
        )}
      </IonContent>
    </IonPage>
  );
};

export default RestSpots;
