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

function ActiveRouteCard({
  destinationAddress,
  hours,
  miles,
  ratePerMile = 0,
  map,
}) {
  return (
    <IonCard
      class="no-padding ion-no-margin no-margin ion-no-padding"
      style={{
        padding: "0 !important",
        margin: "0 !important",
      }}
    >
      <IonCardHeader class="no-padding" style={{paddingBottom: 0, margin: 0}}>
        <div
          style={{overflow: "hidden", borderRadius: "20px", maxHeight: "400px"}}
        >
          {map}
        </div>

        <IonCardSubtitle
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "5px",
            justifyContent: "space-around",
          }}
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
              }).format(miles ?? 0 * ratePerMile ?? 0)}
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
        <div style={{display: "flex", justifyContent: "end"}}></div>
      </IonCardContent>
    </IonCard>
  );
}
export default ActiveRouteCard;
