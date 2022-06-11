import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  persons:any;
  constructor() { }

  ngOnInit(): void {
    this.persons = [
      {name: 'Ajeet', country: 'India'},
      {name: 'chandan', country: 'Bharat'},
      {name: 'Pawan', country: 'India'}
    ]
  }

}
