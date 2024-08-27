import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServicesService {
  firestore: Firestore = inject(Firestore);

  constructor() { }

   getUsersRef() {
    return collection(this.firestore, 'users');
   }



   getSingleDocRef(colId:string, docId:string) {
    return doc(collection(this.firestore, colId), docId);
   }
}
