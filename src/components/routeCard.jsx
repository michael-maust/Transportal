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

import mileIcon from "../assets/pictures/mileIcon";
import dollarIcon from "../assets/pictures/dollarIcon";
import {arrowForward, time} from "ionicons/icons";

function RouteCard({
  originCity,
  DestinationCity,
  destinationAddress,
  hours,
  miles,
  ratePerMile = 0,
}) {
  return (
    <IonCard>
      <IonCardHeader style={{paddingBottom: 0}}>
        <IonCardTitle
          color="primary"
          style={{
            textTransform: "uppercase",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "16px",
          }}
        >
          <p>{originCity}</p>
          <IonIcon size="small" icon={arrowForward} />
          <p> {DestinationCity}</p>
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
            <IonIcon size="small" icon={time} />
            <span
              style={{
                color: "#84A98C",
                fontFamily: "Nunito-Bold",
                fontSize: "14px",
                whiteSpace: "nowrap",
              }}
            >
              {hours}
            </span>
            <p style={{fontWeight: 200, transformFont: "lowercase"}}>hrs</p>
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
            <div>{mileIcon}</div>
            <span
              style={{
                color: "#84A98C",
                fontFamily: "Nunito-Bold",
                fontSize: "14px",
              }}
            >
              {miles}
            </span>
            <p style={{fontWeight: 200}}>miles</p>
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
            <div>{dollarIcon}</div>
            <span
              style={{
                color: "#84A98C",
                fontFamily: "Nunito-Bold",
                fontSize: "14px",
              }}
            >
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(miles * ratePerMile)}
            </span>
          </div>
        </IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent style={{display: "flex", flexDirection: "column"}}>
        <div className="" style={{maxWidth: "300px"}}>
          <a
            style={{color: "#FFE7DC", whiteSpace: "normal"}}
            href={`http://maps.google.com/maps?q=${destinationAddress}`}
          >
            {destinationAddress}
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
            href={`http://maps.google.com/maps?q=${destinationAddress}`}
          >
            Start Route <IonIcon size="small" icon={arrowForward} />
          </a>
        </div>
      </IonCardContent>
    </IonCard>
  );
}
export default RouteCard;
