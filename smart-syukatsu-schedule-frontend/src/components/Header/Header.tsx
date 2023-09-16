import React from 'react';
import { IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonIcon } from '@ionic/react';
import text from './../../assets/text.json'

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
                </IonToolbar>
            </IonHeader>
        </>
    );
}

export default Header;
