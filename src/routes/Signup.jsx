import {
  IonButton,
  IonPage,
  IonCard,
  IonCardContent,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  useIonAlert,
  useIonLoading,
} from "@ionic/react";
import { logIn } from "ionicons/icons";
import supabase from "../supabase";
import React, { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");
  const [Rmsg, setRmsg] = useState("");
  const [alert] = useIonAlert();
  const [present, dismiss] = useIonLoading();

  const Register = async () => {
    const { data, error } = await supabase.auth.signUp(
      {
        email,
        password,
      },
      {
        data: {
          username,
        },
      }
    );

    if (error) {
      //setRMsg(error.message);
      console.log(error.message);
    } else {
      //setRMsg("User create successfully");
      setUser(data.user);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    //await present({ message: "Loading..." }); // TODO: Add truck animation icon for loading
    console.log("testing");
    console.log(event.target.value);
    // TODO: replace with proper user check
    /*
    setTimeout(() => {
      dismiss();
      if (Math.random() < 0.5) {
        alert({
          header: "Invalid credentials",
          message: "There is no user with that name and password.",
          buttons: [{ text: "Ok" }],
        });
      } else {
        navigate("/app/dashboard");
      }
    }, 1500);
    */
  };

  return (
    <IonPage>
      <IonCard>
        <IonCardContent>
          <form onSubmit={Register}>
            <IonItem>
              <IonLabel position="floating">Email</IonLabel>
              <IonInput
                type="email"
                onIonChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              ></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Password</IonLabel>
              <IonInput
                type="password"
                onIonChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              ></IonInput>
            </IonItem>

            <div className="ion-margin-top">
              <IonButton expand="full" type="submit" color="secondary">
                <IonIcon icon={logIn} slot="start" />
                Sign Up
              </IonButton>
            </div>
          </form>
        </IonCardContent>
      </IonCard>
    </IonPage>
  );
}

export default Signup;
