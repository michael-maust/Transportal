import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
} from "@ionic/react";
import TranpsortalMap from "../components/TransportalMap";
import cornerArrow from "../assets/pictures/cornerArrow";
import ActiveRouteCard from "../components/activeRouteCard";

const originCity = "Kansas City";
const destinationCity = "Atlanta";

const ActiveRoute = () => {
  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar>
          <IonTitle>Active Routes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Active Route</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div
          style={{
            paddingRight: "20px",
            paddingLeft: "20px",
          }}
        >
          <div style={{display: "flex", flexDirection: "column", gap: 0}}>
            <p
              style={{
                color: "#DF7A5E",
                fontFamily: "Nunito",
                fontSize: "24px",
                margin: 0,
                fontWeight: 700,
              }}
            >
              {originCity}
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "20px",
              }}
            >
              {cornerArrow}
              <p
                style={{
                  color: "#DF7A5E",
                  fontFamily: "Nunito",
                  fontSize: "24px",
                  margin: 0,
                  fontWeight: 700,
                }}
              >
                {destinationCity}
              </p>
            </div>
          </div>

          <ActiveRouteCard
            map={
              <TranpsortalMap
                startCoords={[-106.4410954, 31.7867031]}
                destinationCoords={[-73.9866, 40.7306]}
                onlyShowMap={true}
              />
            }
            destinationAddress="2075 Princeton Ave, College Park, GA 30337"
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ActiveRoute;
