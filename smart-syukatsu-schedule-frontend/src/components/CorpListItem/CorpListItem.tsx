import React from 'react';
import {
    IonItem,
    IonLabel,
    IonBadge
} from '@ionic/react';
import { ChevronForwardOutline } from 'react-ionicons'

type Props = {
    corpName :string
    corpEvent: string // 一旦string型
    corpPeriod: string // 一旦string型
    corpNote: string
}

const CorpListItem = ({corpName, corpEvent, corpPeriod, corpNote} : Props) => {
    return (
        <>
            <IonItem>
                <IonLabel className="CorpItem">
                    <h2 className="CorpItem__name">
                        {corpName}
                    </h2>
                    <IonBadge className="CorpItem__event" color="success">{corpEvent}</IonBadge>
                    <h3 className="CorpItem__time">
                        期日：{corpPeriod}
                    </h3>
                    <h3 className="CorpItem__note">
                        {corpNote}
                    </h3>
                </IonLabel>

                <ChevronForwardOutline
                    color={'#D9D9D9'}
                    height="20px"
                    width="20px"
                />
            </IonItem>
        </>
    );
}

export default CorpListItem;
