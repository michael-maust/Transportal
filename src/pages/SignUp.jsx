import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import supabase from "../supabase";

const SignUp = () => {
  const testSubmit = async () => {
    console.log(supabase);
    console.log(supabase.auth);
    console.log(supabase.auth.signUp);
    const { data, error } = await supabase.auth.signUp({
      email: "lukedev3@email.com",
      password: "example-password512",
    });

    if (error) {
      //setRMsg(error.message);
      console.log("error");
      console.log(error.message);
    } else {
      //setRMsg("User create successfully");
      //setUser(data.user);
      console.log("Success!");
    }
  };

  return (
    <div>
      <button onClick={testSubmit}>Click Me</button>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>SignUp</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonButton onClick={testSubmit}>Testing</IonButton>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">SignUp</IonTitle>
            </IonToolbar>
          </IonHeader>
          <ExploreContainer name="SignUp page" />
        </IonContent>
      </IonPage>
    </div>
  );
};

export default SignUp;
