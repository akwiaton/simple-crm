import { Component, inject, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog} from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../../models/user.class';

import {MatCardModule} from '@angular/material/card';
import { FirebaseServicesService } from '../firebase-services.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatTooltipModule, MatDialogModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input() user: any;
  readonly dialog = inject(MatDialog);

  // user = new User();

  constructor(public firebaseService: FirebaseServicesService) { 
    
  }

openDialog() {
  this.dialog.open(DialogAddUserComponent);
}

}
