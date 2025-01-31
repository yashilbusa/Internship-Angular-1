import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstLearnComponent } from './first-learn/first-learn.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FirstLearnComponent,CommonModule], 
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

  receiveData(e:string){
    console.log(e);
  }

}
