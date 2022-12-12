import { 
     IonButtons,
     IonContent,
     IonFooter,
     IonHeader, 
     IonMenuButton, 
     IonPage, 
     IonTitle,
     IonToolbar
} from '@ionic/react';
import React, {useEffect, useState} from 'react';
import BookBox from '../../components/BookBox';
import Info from '../../components/Info';
import './Book.css';

const URL_BOOK = 'https://example-data.draftbit.com/books?_limit=20';





const Book: React.FC = () => {


     const [open, setOpen] = useState(false);
     const [data, setData] = useState({} as any);
     const [books, setBooks] = useState([] as any);

     useEffect(() => {
          fetch(URL_BOOK)
          .then(res => res.json())
          .then(res => setBooks(res))
       
     }, [])
     

  return (
    <IonPage>
          <IonHeader>
               <IonToolbar>
               <IonTitle slot="start" color='warning'>MediaLibs</IonTitle>
               <IonTitle slot="end" color='warning'>Livres</IonTitle>
               </IonToolbar>
          </IonHeader>

          <IonContent>
               <BookBox booksprops={books} setOpen={setOpen} setData={setData} />
               <Info open={open} setOpen={setOpen} data={data} />
          </IonContent>

        <IonFooter>
        <IonToolbar>
          <IonButtons slot="start">
              <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  )
}

export default Book