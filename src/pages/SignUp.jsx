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
import { supabase } from "../supabase";
import { useState } from "react";
import { logIn } from "ionicons/icons";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      console.log("error");
      console.log(error.message);
    } else {
      console.log("success");
      console.log(data.user);
    }
  };
  //   const testSubmit = async () => {
  //     console.log(supabase);
  //     console.log(supabase.auth);
  //     console.log(supabase.auth.signUp);
  //     const { data, error } = await supabase.auth.signUp({
  //       email: "lukedev33@email.com",
  //       password: "example-password512",
  //     });

  //     if (error) {
  //       //setRMsg(error.message);
  //       console.log("error");
  //       console.log(error.message);
  //     } else {
  //       //setRMsg("User create successfully");
  //       //setUser(data.user);
  //       console.log("Success!");
  //     }
  //   };

  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar>
          <IonTitle>SignUp</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <form onSubmit={register}>
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
            Sign Up
          </IonButton>
        </form>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">SignUp</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default SignUp;
