import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'simple-reactive-form-3',
  templateUrl: './simple-reactive-form-3.component.html',
  styleUrls: ['./simple-reactive-form-3.component.scss']
})
export class SimpleReactiveForm3Component implements OnInit {
  myForm: FormGroup;
  title = 'forms';
  f2: any;
  constructor(private fb: FormBuilder) {}
  // @ts-ignore
  ngOnInit() {
    this.myForm = this.fb.group({
      email: '',
      phone: this.fb.array([])
    });
  }
  get phoneForms(){
    return this.myForm.get('phone') as FormArray;
  }
  addPhone() {
    const phone = this.fb.group({
      area: [],
      prefix: [],
      line: [],
    });
    this.phoneForms.push(phone);
  }
  deletePhone(i) {
    this.phoneForms.removeAt(i);
  }
}
