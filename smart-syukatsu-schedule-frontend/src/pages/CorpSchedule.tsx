import { useState } from "react";
import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonToolbar,
  useIonViewWillEnter,
  IonFooter,
  IonBadge,
} from "@ionic/react";
import { useParams } from "react-router";

import Header from "../components/Header/Header";
import text from "./../assets/text.json";
import FabButton from "../components/FabButton/FabButton";
import { sampleCorpSchedules } from "./../data/sampleData";
import { chevronDown } from "ionicons/icons";

import type { CorpScheduleData } from "./../data/sampleData";

function CorpSchedule() {
  const [schedules, SetSchedules] = useState<CorpScheduleData[]>([]);
  const params = useParams<{ id: string }>();

  useIonViewWillEnter(() => {
    SetSchedules(
      sampleCorpSchedules.filter((item) => {
        return item.corpId === params.id;
      }),
    );
  });

  return (
    <IonPage id="corp-schedules-page">
      <Header headerText={text.schedule} isShowBackButton={true} />
      <IonContent fullscreen>
        <h1 style={{ margin: "1rem" }}>企業名（仮）</h1>
        {/**IonAccordionを使う**/}
        {schedules.map((item, key) => {
          return (
            <IonItem key={key}>
              <IonLabel>{item.corpPeriod.slice(5)}</IonLabel>
              <IonLabel>17:00-18:00</IonLabel>
              <IonBadge color="success">{item.corpEvent}</IonBadge>
              <IonIcon aria-hidden="true" icon={chevronDown} />
            </IonItem>
          );
        })}
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <FabButton />
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
}

export default CorpSchedule;
