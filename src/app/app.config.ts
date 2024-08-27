import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync(), 
    provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"simple-crm-34171","appId":"1:142048922003:web:3954ff3c107a2bb6a6c066","databaseURL":"https://simple-crm-34171-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"simple-crm-34171.appspot.com","apiKey":"AIzaSyBY9gIZqVdmCpZi7gqM6uygXX7ZPcEfCrk","authDomain":"simple-crm-34171.firebaseapp.com","messagingSenderId":"142048922003"})), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase())]
};
