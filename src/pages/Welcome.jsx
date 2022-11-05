import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Logo from "./assets/pictures/logo.jsx"
const Welcome = () => {
  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar>
          <IonTitle>
          <img style={{marginTop: "90px", marginLeft: "10px"}} src={Logo()} alt="Logo"/>
          <h4 style={{color: "#DF7A5E", marginTop: "-22px", fontFamily: "Roboto", marginLeft: "10px"}}>DRIVE WITH CLAIRTY</h4>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader class="ion-no-border">
            <h1 style={{fontSize: "290%", marginLeft: "30px", marginTop: "40px", fontFamily: "Roboto", fontWeight: "400"}}>Welcome to Transportal!</h1>
        </IonHeader>
        <p style={{fontFamily: 'Roboto-Italic', margin: "30px", weight: "300", fontSize: "20px", lineHeight: "24px", marginTop: "-5px"}}>Transportal was built specifically for truck drivers like you. Our mission is to provide you greater clarity while you’re driving. With Transportal, you can:</p>
        <ul style={{marginLeft: "20px", marginTop: "-20px"}}>
          <li style={{marginBottom: "10px", fontSize: "20px", fontWeight: "400", fontFamily: "Roboto"}}>Manage all of your delivery routes in a single view</li>
          <li style={{marginBottom: "10px", fontSize: "20px", fontWeight: "400", fontFamily: "Roboto"}}>Track route earnings</li>
          <li style={{marginBottom: "10px", fontSize: "20px", fontWeight: "400", fontFamily: "Roboto"}}>Receive alerts for when it is time to rest</li>
          <li style={{marginBottom: "10px", fontSize: "20px", fontWeight: "400", fontFamily: "Roboto"}}>Find available rest spots along your route</li>
          <li style={{marginBottom: "10px", fontSize: "20px", fontWeight: "400", fontFamily: "Roboto"}}>Check weather condition along the route</li>
        </ul>
      </IonContent>
      <IonButton className="welcome-button" color="primary" style={{fontWeight: "bold", marginLeft: "30px", marginRight: "30px", marginBottom: "25px", marginTop: "35", fontSize: "100%"}}>Continue</IonButton>
    </IonPage>
  );
};

export default Welcome;
