import React, {useState} from "react";
import {IonContent, IonList, IonButton} from "@ionic/react";
import TranpsortalMap from "./TransportalMap";
import {supabase} from "../supabase";
import {useAuth} from "../contexts/Auth";

function CreateRouteModal(props) {
  const [start, setStart] = useState([]);
  const [end, setEnd] = useState([]);
  const {user} = useAuth();

  const createRoute = async () => {
    props.onDismiss();
    props.persistRoute();

    console.log("USER");
    console.log(start);
    const {data, error} = await supabase.from("Routes").insert([
      {
        isActive: false,
        driver: user?.id,
        start_latitude: start.coordinates[1],
        start_longitude: start.coordinates[0],
        origin_address: start.name,
        destination_address: end.name,
        end_latitude: end.coordinates[1],
        end_longitude: end.coordinates[0],
      },
    ]);
  };

  return (
    <IonContent className="ion-padding">
      <IonList
        style={{
          paddingTop: "40px",
          display: "flex",
          justifyContent: "end",
          flexDirection: "column",
        }}
      >
        <TranpsortalMap
          persistRoute={props.persistRoute}
          start2={setStart}
          end={setEnd}
        />

        <div style={{marginTop: "20px", marginBottom: "20px"}}>
          <ion-label>Per Mile Rate</ion-label>
          <ion-input placeholder="Per Mile Rate"></ion-input>
        </div>

        <div style={{display: "grid", gridTemplateColumns: "repeat(2, 1fr"}}>
          <IonButton color="light" onClick={props.onDismiss}>
            Close
          </IonButton>
          <IonButton color="tertiary" onClick={createRoute}>
            Create Route
          </IonButton>
        </div>
      </IonList>
    </IonContent>
  );
}

export default CreateRouteModal;
