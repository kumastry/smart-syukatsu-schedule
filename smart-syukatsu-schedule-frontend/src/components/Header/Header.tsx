import React from 'react';
import { IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonButton, IonSearchbar, IonIcon } from '@ionic/react';
import text from './../../assets/text.json';
import { menu } from 'ionicons/icons';


type Props = {
    headerText: string
    isShowBackButton?: boolean
    backButtonText?: string
    backButtonHref?: string
}

const Header = ({ headerText, isShowBackButton = false, backButtonText = text.top, backButtonHref = "/home" }: Props) => {
    return (
        <>
            <IonHeader>
                <IonToolbar>
                    {isShowBackButton && <IonButtons slot="start">
                        <IonBackButton text={backButtonText} defaultHref={backButtonHref}></IonBackButton>
                    </IonButtons>}
                    <IonTitle>{headerText}</IonTitle>

                    <IonButtons slot="end">
                        <IonButton>
                            <IonIcon aria-hidden="true" icon={menu} />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>

                <IonToolbar>
                    <IonSearchbar placeholder={text.searchByCorp}></IonSearchbar>
                </IonToolbar>
            </IonHeader>
        </>
    );
}

export default Header;
