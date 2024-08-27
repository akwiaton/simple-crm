import { Injectable, inject } from '@angular/core';
import { User } from '../models/user.class';
import { Firestore, collection, collectionData, doc, onSnapshot } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServicesService {
  normalUsers: User[] = [];

  unsubUsers;

  firestore: Firestore = inject(Firestore);

  constructor() {
    this.unsubUsers = this.subUserList();
    
   }
  
  
   subUserList() {
    return onSnapshot(this.getUsersRef(), (list)=> {
      this.normalUsers = [];
      list.forEach(element => {
       this.normalUsers.push(this.setUserObject(element.data(), element.id));
       });
     }); 
   }
   ngonDestroy() {
    this.unsubUsers();

   }

   setUserObject(obj: any, id: string): User {
      return {
        // id: id,
        firstName: obj.firstName || '',
        lastName: obj.lastName || '',
        birthDate: obj.birthDate || '',
        street: obj.street || '',
        zipCode: obj.zipCode || '',
        city: obj.city || ''
      }
}
   

   getCleanJSON( user: User) {
    return { 
    firstName: user.firstName,
    lastName: user.lastName,
    birthDate: user.birthDate,
    street: user.street,
    zipCode: user.zipCode,
    city: user.city
    }
}

   getUsersRef() {
    return collection(this.firestore, 'users');
   }



   getSingleDocRef(colId:string, docId:string) {
    return doc(collection(this.firestore, colId), docId);
   }
}

