import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonItem,
  IonInput,
  IonLabel,
  IonIcon,
} from "@ionic/react";
import {supabase} from "../supabase";
import {useState} from "react";
import {logIn} from "ionicons/icons";
import {useAuth} from "../contexts/Auth";
import {useHistory} from "react-router-dom";
import logo from "../assets/pictures/logo";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {signIn, signUp} = useAuth();
  const navigate = useHistory();

  async function register(e) {
    e.preventDefault();

    const userEmail = email;
    const userPassword = password;

    const {data, error} = await signUp({userEmail, userPassword});

    if (error) {
      alert("error signing in");
      console.log(error.message);
    } else {
      // Redirect user to Dashboard
      console.log("success");
      const {error} = await signIn({userEmail, userPassword});
      navigate.push("/welcome");
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
            Sign up to continue
          </h1>
        </IonHeader>

        <form onSubmit={register}>
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
              style={{
                maxWidth: "400px",
                width: "90vw",
                borderRadius: "8px",
                overflow: "hidden",
              }}
              type="submit"
              color="primary"
            >
              <IonIcon icon={logIn} slot="start" />
              Sign Up
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
              Already have an account?
            </p>
            <IonButton
              type="button"
              color="tertiary"
              buttonType=""
              routerLink="/signin"
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
              Sign In
            </IonButton>
          </div>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default SignUp;

function SignUp2() {
  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar>
          <IonTitle>SignUp</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* <form onSubmit={register}> */}
        <IonItem>
          <IonLabel>Email</IonLabel>
          <IonInput
            type="email"
            // onIonChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel>Password</IonLabel>
          <IonInput
            type="password"
            // onIonChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          ></IonInput>
        </IonItem>
        <IonButton expand="full" type="submit" color="secondary">
          <IonIcon icon={logIn} slot="start" />
          Sign Up
        </IonButton>
        {/* </form> */}
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">SignUp</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
}
