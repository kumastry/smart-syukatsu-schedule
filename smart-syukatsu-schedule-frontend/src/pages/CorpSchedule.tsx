import { useState } from 'react';
import { Message, getMessage } from '../data/messages';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  IonToolbar,
  useIonViewWillEnter,
} from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import { useParams } from 'react-router';
import './ViewMessage.css';

function CorpSchedule() {
    const [message, setMessage] = useState<Message>();
    const params = useParams<{ id: string }>();

    useIonViewWillEnter(() => {
    });

    return (
      <IonPage id="view-message-page">
        <IonContent>

        </IonContent>
      </IonPage>
    );
  }

  export default CorpSchedule;
