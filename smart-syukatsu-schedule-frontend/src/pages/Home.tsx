import { useState } from 'react';
import {
  IonContent,
  IonList,
  IonPage,
  IonFooter, IonToolbar
} from '@ionic/react';
import './Home.css';

import Header from '../components/Header/Header';
import CorpListItem from '../components/CorpListItem/CorpListItem';
import FabButton from '../components/FabButton/FabButton';
import text from './../assets/text.json';
import { sampleHomePageData } from './../data/sampleData';

const Home: React.FC = () => {
  return (
    <IonPage id="home-page">
      <Header headerText={text.appTitle} />
      <IonContent fullscreen>
        <IonList>
          {
            sampleHomePageData.map((item) => {
              return <CorpListItem corpName={item.corpName} corpEvent={item.corpEvent} corpPeriod={item.corpPeriod} corpNote={item.corpNote} />;
            })
          }
        </IonList>
      </IonContent>

      <IonFooter>
        <IonToolbar>
          <FabButton />
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
