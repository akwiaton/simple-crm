import { Component, Input } from '@angular/core';
import { User } from '../../../models/user.class';
import { FirebaseServicesService } from '../../firebase-services.service';
import { UserComponent } from '../user.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {

  userList: User[] = [];

  constructor(private firebaseService: FirebaseServicesService) {
    this.userList = this.getList();
  }

  getList(): User[] {
    return this.firebaseService.normalUsers;
  }
}
