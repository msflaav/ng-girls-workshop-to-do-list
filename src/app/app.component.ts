import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `Flavia's ToDo List`; 
  weekdays = ['flavia', 'monday', 'tuesday','wednesday'];
  items = ['one']
}
