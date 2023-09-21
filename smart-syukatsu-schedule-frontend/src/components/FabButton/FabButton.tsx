import { IonFabButton, IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";

const FabButton = () => {
  return (
    <>
      <IonFabButton className="AddBotton" style={{ margin: "auto" }}>
        <IonIcon aria-hidden="true" icon={add} />
      </IonFabButton>
    </>
  );
};

export default FabButton;
