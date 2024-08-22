import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogContent, MatDialogModule } from '@angular/material/dialog';
import { User } from '../../models/user.class';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

import {MatDividerModule} from '@angular/material/divider';
import {provideNativeDateAdapter} from '@angular/material/core';

import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatDialogActions, MatDialogContent, MatDialogModule, MatFormFieldModule, FormsModule, MatInputModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
  providers: [  
    MatDatepickerModule,
    MatNativeDateModule,
    provideNativeDateAdapter()
  ],
  
})
export class DialogAddUserComponent {
  user = new User();
  birthDate!: Date;
  // firestore: Firestore = inject(Firestore);
  // items$: Observable<any[]>;
  // constructor() {

  //   const aCollection = collection(this.firestore, 'users')
  //   this.items$ = collectionData(aCollection);
  // }


  
  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log(this.user);
  
    // this.firestore
    //   .collection('users')
    //   .add(this.user.toJSON)
    //   .then((result: any) => {
    //     console.log('Adding user finished', result);
    //   });
  }
  
  
  
  

}