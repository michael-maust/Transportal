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

          <div style={{marginBottom: "50px"}}>
            {/* TODO: connect to database to fetch active route */}
            <ActiveRouteCard
              miles={805}
              hours={12}
              ratePerMile={0.65}
              map={
                <TranpsortalMap
                  startCoords={[-84.390264, 33.748992]}
                  destinationCoords={[-94.578142, 39.100105]}
                  onlyShowMap={true}
                />
              }
              destinationAddress="2075 Princeton Ave, College Park, GA 30337"
            />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ActiveRoute;
