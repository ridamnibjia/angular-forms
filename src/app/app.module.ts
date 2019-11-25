import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule, MatInputModule, MatButtonModule, MatFormFieldModule, MatCheckbox, MatCheckboxModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SimpleReactiveFormComponent} from './components/simple-reactive-form/simple-reactive-form.component';
import {SimpleReactiveForm2Component} from './components/simple-reactive-form-2/simple-reactive-form-2.component';
import {SimpleReactiveForm3Component} from './components/simple-reactive-form-3/simple-reactive-form-3-component';
import { SimpleReactiveForm4Component } from './components/simple-reactive-form-4/simple-reactive-form-4.component';
import {SubmitReactiveForm5Component} from './components/submit-reactive-form-5/submit-reactive-form-5.component';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SimpleReactiveFormComponent,
    SimpleReactiveForm2Component,
    SimpleReactiveForm3Component,
    SimpleReactiveForm4Component,
    SubmitReactiveForm5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
