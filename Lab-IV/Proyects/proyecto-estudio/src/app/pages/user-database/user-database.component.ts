import { Component } from '@angular/core';

interface usuario{

}

@Component({
  selector: 'app-user-database',
  templateUrl: './user-database.component.html',
  styleUrls: ['./user-database.component.css']
})
export class UserDatabaseComponent {
    list: usuario[] = [];
}
