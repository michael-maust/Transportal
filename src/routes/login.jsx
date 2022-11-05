import React from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonContent,
  IonTitle,
  IonToolbar,
  IonPage,
  IonHeader,
  IonButtons,
  IonMenuButton,
  IonFooter,
  IonMenu,
} from "@ionic/react";
import {logIn} from "ionicons/icons";

function Login() {
  const onSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          This is the menu content.
        </IonContent>
      </IonMenu>

      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Feeder</IonTitle>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonButtons slot="end">
              <IonButton>
                <IonIcon />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding" fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Feed</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonCard>
            <IonCardContent>
              <form onSubmit={onSubmit}>
                <IonItem>
                  <IonLabel position="floating">Email</IonLabel>
                  <IonInput type="email"></IonInput>
                </IonItem>

                <IonItem>
                  <IonLabel position="floating">Password</IonLabel>
                  <IonInput type="password"></IonInput>
                </IonItem>

                <div className="ion-margin-top">
                  <IonButton expand="full" type="submit" color="secondary">
                    <IonIcon icon={logIn} slot="start" />
                    Login
                  </IonButton>
                </div>
              </form>
            </IonCardContent>
          </IonCard>
        </IonContent>

        <IonFooter>
          <IonToolbar>
            <IonTitle>Footer</IonTitle>
          </IonToolbar>
        </IonFooter>
      </IonPage>
    </>
  );
}

export default Login;
