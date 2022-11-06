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
import { useEffect, useState } from "react";
import { logIn } from "ionicons/icons";
import { supabase } from "../supabase";
import { useAuth } from "../contexts/Auth";
import { useHistory } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user2, setUser2] = useState("");
  const [session2, setSession2] = useState("");
  const navigate = useHistory();

  const { signIn } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    const userEmail = email;
    const userPassword = password;

    const { error } = await signIn({ userEmail, userPassword });

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
      <IonHeader >
        <IonToolbar>
          <IonTitle>Sign In</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <form onSubmit={handleSubmit}>
          <IonItem>
            <IonLabel>Email</IonLabel>
            <IonInput
              type="email"
              onIonChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Password</IonLabel>
            <IonInput
              type="password"
              onIonChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            ></IonInput>
          </IonItem>
          <IonButton expand="full" type="submit" color="secondary">
            <IonIcon icon={logIn} slot="start" />
            Sign In
          </IonButton>
        </form>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Sign In</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Sign In page" />
      </IonContent>
    </IonPage>
  );
};

export default SignIn;
