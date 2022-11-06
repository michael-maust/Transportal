import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import RouteList from "./RouteList";
import logo from "../assets/pictures/logo";

const Welcome = () => {
  return (
    <IonPage>
      <IonContent>
        <div style={{marginLeft: "20px", marginRight: "20px"}}>
          <IonHeader class="ion-no-border" style={{marginLeft: "20px"}}>
            {logo}
            <h4
              style={{
                color: "#DF7A5E",
                marginTop: "-12px",
                fontFamily: "Roboto",
                fontSize: "24px",
              }}
            >
              DRIVE WITH CLARITY
            </h4>
            <h1
              style={{
                fontSize: "32px",
                marginTop: "40px",
                fontFamily: "Roboto",
                fontWeight: "400",
              }}
            >
              Welcome to Transportal!
            </h1>
          </IonHeader>
          <p
            className="welcome-p"
            style={{
              fontFamily: "Roboto-Italic",
              margin: "20px",
              weight: "300",
              fontSize: "16px",
              lineHeight: "24px",
              marginTop: "-5px",
              paddingBottom: "10px",
            }}
          >
            Transportal was built specifically for truck drivers like you. Our
            mission is to provide you greater clarity while you're driving. With
            Transportal, you can:
          </p>
          <ul
            style={{
              marginLeft: "20px",
              marginTop: "-20px",
              marginRight: "20px",
            }}
          >
            <li
              style={{
                marginBottom: "10px",
                fontSize: "14px",
                fontWeight: "400",
                fontFamily: "Roboto",
              }}
            >
              Manage all of your delivery routes in a single view
            </li>
            <li
              style={{
                marginBottom: "10px",
                fontSize: "14px",
                fontWeight: "400",
                fontFamily: "Roboto",
              }}
            >
              Track route earnings
            </li>
            <li
              style={{
                marginBottom: "10px",
                fontSize: "14px",
                fontWeight: "400",
                fontFamily: "Roboto",
              }}
            >
              Receive alerts for when it is time to rest
            </li>
            <li
              style={{
                marginBottom: "10px",
                fontSize: "14px",
                fontWeight: "400",
                fontFamily: "Roboto",
              }}
            >
              Find available rest spots along your route
            </li>
            <li
              style={{
                marginBottom: "10px",
                fontSize: "14px",
                fontWeight: "400",
                fontFamily: "Roboto",
              }}
            >
              Check weather condition along the route
            </li>
          </ul>
          <IonButton
            onClick={RouteList()}
            expand="block"
            className="welcome-button"
            color="primary"
            routerLink="/routes"
            style={{
              fontWeight: "bold",
              marginLeft: "30px",
              marginRight: "30px",
              marginTop: "40px",
              fontSize: "100%",
              maxWidth: "200px",
            }}
          >
            Continue
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
