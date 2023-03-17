import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'students',
  template: '<h2>{{getTitle()}} {{getCurrentDate()}}</h2>',
  styleUrls: ['./students-component.component.css'],
  providers: [DatePipe]
})
export class StudentsComponentComponent {
  title = "My List of Students";
  data = new Date();

  getTitle(){
    return this.title;
  }
  
  getCurrentDate(){
    return this.data;
  }

}
