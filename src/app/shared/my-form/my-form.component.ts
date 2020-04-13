import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RouteReuseStrategy } from '@angular/router';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  registrationForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.createFormControls()
    this.createForm()
  }

  createFormControls() {
      this.firstName = new FormControl("", Validators.required);
      this.lastName = new FormControl("", Validators.required);
      this.email = new FormControl("", 
        [Validators.required , Validators.pattern("[^@]*@[^@]*")]);
      this.password = new FormControl("", 
        [Validators.required, Validators.minLength(8)]);
  }

  createForm() {
    this.registrationForm = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName
      }),
        email: this.email,
        password: this.password
    })
  }

  onSubmit() {
    if(this.registrationForm.valid) {
      console.log("submit");
      console.log(this.registrationForm.value);
    }
  }

}
