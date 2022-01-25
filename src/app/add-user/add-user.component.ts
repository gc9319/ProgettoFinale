/*import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../classes/user/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  @Output() onAddUser = new EventEmitter();
  newUser:User = new User();

  constructor() { }

  ngOnInit(): void {
  }


  createUser(user:User){
    
    this.onAddUser.emit(user);
    this.newUser = new User();

  }

}
*/