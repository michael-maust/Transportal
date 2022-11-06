import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonButton,
  IonIcon,
} from "@ionic/react";

import showerIcon from "../assets/pictures/showerIcon";
import truckIcon from "../assets/pictures/truckIcon";
import {arrowForward} from "ionicons/icons";

function RestSpotCard({title, showersQuantity, availableSpaces, address}) {
  return (
    <IonCard>
      <IonCardHeader style={{paddingBottom: 0}}>
        <IonCardTitle
          color="primary"
          style={{textTransform: "uppercase", fontWeight: 700}}
        >
          {title}
        </IonCardTitle>
        <div
          style={{
            width: "90%",
            height: "2px",
            background: "#48484a",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        />

        <IonCardSubtitle
          style={{display: "flex", gap: "16px", marginTop: "-10px"}}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: "#FFE7DC",
              fontFamily: "Nunito",
              fontSize: "14px",
            }}
          >
            <div>{showerIcon}</div>
            <span
              style={{
                color: "#84A98C",
                fontFamily: "Nunito-Bold",
                fontSize: "14px",
              }}
            >
              {showersQuantity}
            </span>
            <p style={{fontWeight: 200}}> showers</p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: "#FFE7DC",
              fontFamily: "Nunito",
              fontSize: "14px",
            }}
          >
            <div>{truckIcon}</div>
            <span
              style={{
                color: "#84A98C",
                fontFamily: "Nunito-Bold",
                fontSize: "14px",
              }}
            >
              {availableSpaces}
            </span>
            <p style={{fontWeight: 200}}>current parking spaces</p>
          </div>
        </IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent style={{display: "flex", flexDirection: "column"}}>
        <div className="" style={{maxWidth: "300px"}}>
          <a
            style={{color: "#FFE7DC", whiteSpace: "normal"}}
            href={`http://maps.google.com/maps?q=${address}`}
          >
            {address}
          </a>
        </div>
        <div style={{display: "flex", justifyContent: "end"}}>
          <a
            style={{
              color: "#FFE7DC",
              whiteSpace: "normal",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              textDecoration: "none",
              color: "#84A98C",
              fontWeight: 700,
            }}
            href={`http://maps.google.com/maps?q=${address}`}
          >
            Start Route <IonIcon size="small" icon={arrowForward} />
          </a>
        </div>
      </IonCardContent>
    </IonCard>
  );
}
export default RestSpotCard;
