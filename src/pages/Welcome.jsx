import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import logo from "../assets/pictures/logo";
const Welcome = () => {
  return (
    <IonContent fullscreen>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "8px", width: "full", height: "100%", position: "relative",}}>
          
          <div style={{marginTop: "-14em", marginLeft: "-8.5em"}}>{logo}</div>
          <h4 style={{color: "#DF7A5E", marginLeft: "-14.6em", marginTop: "-22px", fontFamily: "Roboto"}}>DRIVE WITH CLAIRTY</h4>
      
            <h1 style={{fontSize: "280%", fontFamily: "Roboto", fontWeight: "400", marginTop: "80px"}}>Welcome to Transportal!</h1>
        <p className="welcome-p" style={{fontFamily: 'Roboto-Italic', weight: "300", fontSize: "20px", lineHeight: "24px", marginTop: "-5px"}}>Transportal was built specifically for truck drivers like you. Our mission is to provide you greater clarity while you’re driving. With Transportal, you can:</p>
        <ul style={{marginLeft: "20px", marginTop: "-20px"}}>
          <li style={{marginBottom: "10px", fontSize: "20px", fontWeight: "400", fontFamily: "Roboto"}}>Manage all of your delivery routes in a single view</li>
          <li style={{marginBottom: "10px", fontSize: "20px", fontWeight: "400", fontFamily: "Roboto"}}>Track route earnings</li>
          <li style={{marginBottom: "10px", fontSize: "20px", fontWeight: "400", fontFamily: "Roboto"}}>Receive alerts for when it is time to rest</li>
          <li style={{marginBottom: "10px", fontSize: "20px", fontWeight: "400", fontFamily: "Roboto"}}>Find available rest spots along your route</li>
          <li style={{marginBottom: "10px", fontSize: "20px", fontWeight: "400", fontFamily: "Roboto"}}>Check weather condition along the route</li>
        </ul>
        <IonButton color="primary" routerLink="/routes" class="ion-color ion-color-primary md button button-solid ion-activatable ion-focusable hydrated ion-activated" style={{width: "200px", position: "relative", fontWeight: "bold"}}>Continue</IonButton>
      </div>
    </IonContent>
  );
};

export default Welcome;
