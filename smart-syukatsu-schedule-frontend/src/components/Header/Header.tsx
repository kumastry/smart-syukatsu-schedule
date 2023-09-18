import React from 'react';
import { IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonButton, IonSearchbar } from '@ionic/react';
import text from './../../assets/text.json';
import { MenuOutline } from 'react-ionicons'

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
                            <MenuOutline
                                color={'#00000'}
                                height="20px"
                                width="20px"
                            />
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
