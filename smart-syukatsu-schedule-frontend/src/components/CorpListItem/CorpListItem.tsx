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
                        株式会社サンプル１
                    </h2>
                    <IonBadge className="CorpItem__event" color="success">面談</IonBadge>
                    <h3 className="CorpItem__time">
                        期日：2023年9月21日
                    </h3>
                    <h3 className="CorpItem__note">
                        ・○○さんとの定期面談 <br></br>
                        ・質問事項を考える  <br></br>
                        ・普段着で着ていく  <br></br>
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
