import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  companies:any;
  constructor() { }

  ngOnInit(): void {
    this.companies = [
      {name: 'Ajeet', country: 'India'},
      {name: 'chandan', country: 'Bharat'},
      {name: 'Pawan', country: 'India'}
    ]
  }

}
