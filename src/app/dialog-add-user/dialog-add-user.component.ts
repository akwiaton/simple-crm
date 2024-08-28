import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogContent, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models/user.class';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

import {MatDividerModule} from '@angular/material/divider';
import {provideNativeDateAdapter} from '@angular/material/core';

import {MatProgressBarModule} from '@angular/material/progress-bar';

import { FirebaseServicesService } from '../firebase-services.service';





@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [MatProgressBarModule, MatButtonModule, MatDividerModule, MatDialogActions, MatDialogContent, MatDialogModule, MatFormFieldModule, FormsModule, MatInputModule, MatDatepickerModule, MatNativeDateModule],
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
  // birthDate!: Date;
  loading = false;

  @Output() addDialogClosed: EventEmitter<boolean> = new EventEmitter();

  firstName = "";
  lastName = "";
  birthDate = "";
  street = "";
  zipCode = "";
  city = "";

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>, private firebaseService: FirebaseServicesService) { }
  

addUser() {
 let user: User = {
  firstName: this.firstName,
  lastName: this.lastName,
  birthDate:  Number(this.birthDate),
  street: this.street,
  zipCode:  Number(this.zipCode),
  city: this.city,
 }
 this.loading = true;
 this.firebaseService.addUser(user);
 this.dialogRef.close();
 this.addDialogClosed.emit(false);
}
  
  // saveUser() {
  //   this.user.birthDate = this.birthDate.getTime();
  //   console.log(this.user);
  //   this.loading = true;
   
  //   this.dialogRef.close();
  // }
  

}