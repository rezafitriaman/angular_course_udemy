import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users = [
    {
      id: 1,
      name: 'Max'
    },
    {
      id: 2,
      name: 'Reza'
    },
    {
      id: 3,
      name: 'Pedro'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
