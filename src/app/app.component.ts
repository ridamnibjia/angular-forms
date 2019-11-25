import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import get = Reflect.get;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myForm: FormGroup;
  title = 'forms';
 private userModel = [{
  }];
  f2: any;
 constructor(private fb: FormBuilder) {}
 // @ts-ignore
  ngOnInit() {
   this.myForm = this.fb.group({
     name : 'R',
     email: 'ridamnibjia21@gmail.com',
     phone: '9414032461',
     city: 'Ahmedabad'
   });
    // this.myForm = this.fb.group({
    //   email: '',
    //   phone: this.fb.array([])
    // });


   //  const phone = this.fb.group({
   //    area: '',
   //    prefix: '',
   //    line: '',
   //  });
   //  this.f2 = this.fb.group({
   //   email: '',
   //   cellPhone: phone,
   //   homePhone: phone
   // });
   //  this.myForm.valueChanges.subscribe(console.log);
   //  this.f2.valueChanges.subscribe(console.log);
 }
  get phoneForms(){
    return this.myForm.get('phone') as FormArray;
  }
  addPhone() {
    const phone = this.fb.group({
      area: [],
      prefix: [],
      line: [],
    })
    this.phoneForms.push(phone);
  }
  deletePhone(i) {
    this.phoneForms.removeAt(i);
  }
}
