import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import { useStorage } from "@ionic/react-hooks/storage";
import { images } from "../util/util";

const ImageCard = (props: any) => {
  return (
    <div className="module">
      <div
        style={{
           width: '-webkit-fill-available',
          height: '-webkit-fill-available',
          
          background:
            `url("${props.img}")`,
        }}
      />
    </div>
  );
};

const FAB = (props: any) => {
  return (
    <div className="fab">
      <p>Add</p>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Gallery</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="container">
          <div className="grid">
            {images.map((img) => {
              return <ImageCard img={img} />;
            })}
          </div>
        </div>
        <ExploreContainer />
      </IonContent>
      {/* <FAB /> */}
    </IonPage>
  );
};

export default Home;
