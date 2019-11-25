import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';
// import { AngularFirestore } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-submit-reactive-form-5',
  templateUrl: './submit-reactive-form-5.component.html',
  styleUrls: ['./submit-reactive-form-5.component.scss']
})
export class SubmitReactiveForm5Component implements OnInit {
  myForm: FormGroup;
  loading = false;
  success = false;

  constructor(private fb: FormBuilder, private afs: AngularFirestore) {
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      message: ['', Validators.required]
    });
  }
}
