import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  msg:string = "Nidhi";
  para:string = "Angular Live Development Server is listening on localhost:4200, open your browser on Browser application bundle generation complete.";
}
