import { Component, Input, Output, EventEmitter } from '@angular/core';
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

  @Output() newItemEvent = new EventEmitter<string>();
  constructor(private firebaseService: FirebaseServicesService) {
    this.userList = this.getList();
  }

  getList(): User[] {
    return this.firebaseService.normalUsers;
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
