import { CommonModule } from '@angular/common';
import { Component, Input, numberAttribute, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { EventEmitter } from '@angular/core';
import { input , Output } from '@angular/core';
import { User } from '../../../models/user';
import { CountryCodePipe } from '../../pipes/country-code.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';


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

export class FirstLearnComponent implements OnInit,OnDestroy,OnChanges{
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

    // @Output() myEvent = new EventEmitter();
    @Output() myEvent = new EventEmitter<User>();


    sendData(){
      // this.myEvent.emit("I'm Transfer The Data Child To Parent Component");
      this.myEvent.emit({name:this.name,newSalary:25000});
    }

    currentDate = new Date();
    phoneNum = 9876543210;

    constructor(){
      console.log("Constructor Called");
    }

    ngOnChanges(changes: SimpleChanges): void {
      //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
      //Add '${implements OnChanges}' to the class.
      console.log("ngOnChanges Called",changes);
      
    }

    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      console.log("ngOnInit Called",this.name);
    }

    ngOnDestroy() {
      //Called once, before the instance is destroyed.
      //Add 'implements OnDestroy' to the class.
      console.log("Component Destroyed");
    }
    
} 
