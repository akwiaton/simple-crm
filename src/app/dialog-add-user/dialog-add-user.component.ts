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
  birthDate!: Date;
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>) { }
  


  
  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log(this.user);
    this.loading = true;
   
    this.dialogRef.close();
  }
  

}