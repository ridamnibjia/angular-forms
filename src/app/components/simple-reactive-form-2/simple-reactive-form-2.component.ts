import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormArray, Validators, FormGroupName} from '@angular/forms';

@Component({
  selector: 'simple-reactive-form-2',
  templateUrl: './simple-reactive-form-2.component.html',
  styleUrls: ['./simple-reactive-form-2.component.scss']
})
export class SimpleReactiveForm2Component implements OnInit {
  myForm: FormGroup;
  mobile: FormGroupName;
  title = 'forms';
  contact: FormGroupName;
  phone: FormGroupName;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    const phone1 = this.fb.group({
      area: ['', [Validators.required,
        Validators.maxLength(3),
        Validators.minLength(3)]],
      numb: ['', [Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10)
      ]]
    });
    const mobile = this.fb.group({
      area: ['', [Validators.required,
        Validators.maxLength(3),
        Validators.minLength(3)
      ]],
      numb: ['', [Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10)]]
    })
    this.myForm = this.fb.group({
      name: ['Ridam Jain', [Validators.required, Validators.minLength(4)]],
      email: ['ridamnibjia21@gmail.com', [Validators.required, Validators.email]],
      phone: phone1,
      contact: mobile
    });
    this.myForm.valueChanges.subscribe(console.log);
  }
}
