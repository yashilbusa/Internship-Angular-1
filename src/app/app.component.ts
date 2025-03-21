import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstLearnComponent } from './components/first-learn/first-learn.component';
import { CommonModule } from '@angular/common';
import { User } from '../models/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FirstLearnComponent,CommonModule,FormsModule], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-app';

  users =[  
    {id:1,name:"Yashil",isSingle:true,salary:8000},
    {id:2,name:"Raj",isSingle:false,salary:5000},
    {id:3,name:"Meet",isSingle:false,salary:7000},
    {id:4,name:"Sudhir",isSingle:true,salary:3000}
  ]

  receiveData(e:User){
    console.log(e);
  }

  clear(){
    this.users =[];
  }
}
