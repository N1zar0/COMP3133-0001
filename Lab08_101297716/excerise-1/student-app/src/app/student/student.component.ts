import { Component } from '@angular/core';

@Component({
  selector: 'student',
  template: '<h2>{{title}}</h2>',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  title = "My list of Students";
  getTitle(){
    return this.title;
  }
  getCurrentDate(){
    return new Date();
  }
}
