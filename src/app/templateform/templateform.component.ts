import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  register(regData: NgForm) {
   alert('welcome to form class');
   console.log(regData.value);
   console.log(regData.valid);
  }

}
