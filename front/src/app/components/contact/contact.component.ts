import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contactForm!: FormGroup;

  constructor() { 
    this.contactForm= new FormGroup({
      copainDeLaNuit: new FormControl(false, Validators.required),
      rdr: new FormControl(false, Validators.required),
      safeZone: new FormControl(false, Validators.required),
      jauge: new FormControl("", Validators.required),
      lieu: new FormControl("", Validators.required),
      nomEvent: new FormControl("", Validators.required),
      typeEvent: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required)
    })
  } 

  ngOnInit(){
    
  }
  
  onSubmit(){

  }
}
