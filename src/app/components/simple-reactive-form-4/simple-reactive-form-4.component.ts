import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormArray , Validators } from '@angular/forms';

@Component({
  selector: 'app-simple-reactive-form-4',
  templateUrl: './simple-reactive-form-4.component.html',
  styleUrls: ['./simple-reactive-form-4.component.scss']
})
export class SimpleReactiveForm4Component implements OnInit {
  myForm: FormGroup;
  hide: true;
  a = 0;

  constructor(private fb: FormBuilder) {
  }

  // @ts-ignore
  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
      ]],
      age: ['', [
        Validators.required,
        Validators.min(18),
        Validators.max(65),
        Validators.minLength(2)
      ]],
      agree: [false, [
        Validators.requiredTrue
      ]]
    });
  }

  get email() {
    return this.myForm.get('email');
  }

  get password() {
    return this.myForm.get('password');
  }

  get age() {
    return this.myForm.get('age');
  }

  get agree() {
    return this.myForm.get('agree');
  }

  display() {
    this.a = 1;
    console.log(this.myForm.value.email);
  }
}
