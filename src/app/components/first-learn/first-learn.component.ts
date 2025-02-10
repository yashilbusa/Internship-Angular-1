import { CommonModule } from '@angular/common';
import { Component, Input, numberAttribute, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { EventEmitter } from '@angular/core';
import { input , Output } from '@angular/core';
import { User } from '../../../models/user';
import { CountryCodePipe } from '../../pipes/country-code.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';
import { interval, map, Observable } from 'rxjs';




function formatname(value:string){
  return "Hello "+value;
}

@Component({
  selector: 'app-first-learn',
  standalone: true,
  imports: [FormsModule,CommonModule,CountryCodePipe,HighlightDirective],
  templateUrl: './first-learn.component.html',
  styleUrl: './first-learn.component.css'
})

export class FirstLearnComponent {
  name = "Yashil";
  salary = 10000;
  isdisabled = false;
  inputval = "Yashil";
  a=5;
  b=6;
  sc = 2;

  users = [
    {id:1,name:"Yashil",isSingle:true,salary:8000},
    {id:2,name:"Raj",isSingle:false,salary:5000},
    {id:3,name:"Meet",isSingle:false,salary:7000},
    {id:4,name:"Sudhir",isSingle:true,salary:3000}
  ]

  onChange(e:Event){
    const val = (e.target as HTMLInputElement).value;
    this.inputval = val;
    console.log(val);
  }

  message: string = ''; 
  isClicked = false; 

    getMessage() { 
        this.isClicked = !this.isClicked; 
        if (this.isClicked) { 
            this.message = "Welcome Yashil Busa"; 
        } else { 
            this.message = ''; 
        } 
    }

    @Input({alias:"username",transform:formatname}) friendname="";
    @Input({transform:numberAttribute}) s="";

    @Output() myEvent = new EventEmitter();
    // @Output() myEvent = new EventEmitter<User>();


    sendData(){
      this.myEvent.emit("I'm Transfer The Data Child To Parent Component");
      // this.myEvent.emit({name:this.name,newSalary:25000});
    }

    currentDate = new Date();
    phoneNum = 9876543210;

    student :any ={
      name:"Yashil",
      city:"Jamnagar",
      stuId: 16
    }

    currentTime: Observable<Date> = new Observable<Date>

    constructor(){
      console.log("Constructor Called");
      this.currentTime = interval(1000).pipe(
        map(()=>new Date())
      );
    }
} 
