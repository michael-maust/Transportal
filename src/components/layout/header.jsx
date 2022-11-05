import React from "react";
import {IonHeader, IonTitle, IonToolbar} from "@ionic/react";

function Header({children}) {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Header</IonTitle>
        </IonToolbar>
      </IonHeader>
    </>
  );
}
export default Header;
