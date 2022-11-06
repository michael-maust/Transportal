import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonButton,
  IonInput,
  IonIcon,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import {useEffect, useState} from "react";
import {logIn} from "ionicons/icons";
import {supabase} from "../supabase";
import {useAuth} from "../contexts/Auth";
import {useHistory} from "react-router-dom";
import logo from "../assets/pictures/logo";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user2, setUser2] = useState("");
  const [session2, setSession2] = useState("");
  const navigate = useHistory();

  const {signIn} = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    const userEmail = email;
    const userPassword = password;

    const {error} = await signIn({userEmail, userPassword});

    if (error) {
      alert("error signing in");
      console.log(error.message);
    } else {
      // Redirect user to Dashboard
      console.log("success");

      navigate.push("/routes");
    }
  }

  return (
    <IonPage>
      <IonContent>
        <div style={{marginLeft: "20px", marginRight: "20px"}}></div>
        <IonHeader
          class="ion-no-border"
          style={{marginLeft: "20px", borderColor: "transparent"}}
        >
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
            Sign in to continue
          </h1>
        </IonHeader>

        <form onSubmit={handleSubmit}>
          <IonItem>
            <div
              style={{
                background: "#3d3d3e",
                width: "100%",
                display: "flex",
                alignItems: "center",
                padding: "6px 12px",
                borderRadius: "12px",
                marginTop: "24px",
                marginBottom: "24px",
              }}
            >
              <IonLabel style={{marginRight: "6px"}}>Email</IonLabel>
              <IonInput
                class="ion-no-border"
                type="email"
                onIonChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                style={{border: "none"}}
              ></IonInput>
            </div>
          </IonItem>
          <IonItem style={{background: "red"}}>
            <div
              style={{
                background: "#3d3d3e",
                width: "100%",
                display: "flex",
                alignItems: "center",
                padding: "6px 12px",
                borderRadius: "12px",
                marginTop: "24px",
                marginBottom: "24px",
              }}
            >
              <IonLabel style={{background: "transparent", marginRight: "6px"}}>
                Password
              </IonLabel>
              <IonInput
                style={{background: "transparent"}}
                type="password"
                onIonChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              ></IonInput>
            </div>
          </IonItem>
          <div
            style={{
              display: "flex",
              justifyContent: " center",
              marginTop: "24px",
              marinRight: "auto",
              marginLeft: "auto",
              width: "100%",
            }}
          >
            <IonButton
              expand="full"
              style={{maxWidth: "400px", width: "90vw", borderRadius: "12px"}}
              type="submit"
              color="primary"
            >
              <IonIcon icon={logIn} slot="start" />
              Sign In
            </IonButton>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "30px",
              flexDirection: "column",
            }}
          >
            <p
              style={{
                fontFamily: "Roboto-Bold",
                fontSize: "20px",
                marginBottom: "0",
              }}
            >
              Don't have an account?
            </p>
            <IonButton
              type="button"
              color="tertiary"
              buttonType=""
              routerLink="/signup"
              class="ion-color ion-color-primary md button  ion-activatable ion-focusable hydrated ion-activated"
              style={{
                width: "200px",
                position: "relative",
                fontWeight: "bold",
                background: "transparent !important",
                textDecoration: "underline",
                color: "#df7a5e",
              }}
            >
              Sign Up
            </IonButton>
          </div>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default SignIn;
