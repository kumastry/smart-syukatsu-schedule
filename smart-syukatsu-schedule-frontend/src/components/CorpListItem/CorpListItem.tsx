import React from "react";
import { IonItem, IonLabel, IonBadge } from "@ionic/react";

type Props = {
  id: string;
  corpName: string;
  corpEvent: string; // 一旦string型
  corpPeriod: string; // 一旦string型
  corpNote: string;
};

const CorpListItem = ({
  id,
  corpName,
  corpEvent,
  corpPeriod,
  corpNote,
}: Props) => {
  return (
    <>
      <IonItem routerLink={`/corp/${id}`} detail={true}>
        <IonLabel className="CorpItem">
          <h2 className="CorpItem__name">{corpName}</h2>
          <IonBadge className="CorpItem__event" color="success">
            {corpEvent}
          </IonBadge>
          <h3 className="CorpItem__time">期日：{corpPeriod}</h3>
          <h3 className="CorpItem__note">{corpNote}</h3>
        </IonLabel>
      </IonItem>
    </>
  );
};

export default CorpListItem;
