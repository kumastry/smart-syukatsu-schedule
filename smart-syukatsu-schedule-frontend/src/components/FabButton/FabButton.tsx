import {
    IonFabButton
} from '@ionic/react';
import { Add } from 'react-ionicons';

const FabButton = () => {
    return (
        <>
            <IonFabButton className='AddBotton' style={{ margin: 'auto' }}>
                <Add
                    color={'#00000'}
                    height="40px"
                    width="40px"
                />
            </IonFabButton>
        </>
    );
}

export default FabButton;
