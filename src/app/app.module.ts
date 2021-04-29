import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { ActivitiesModule } from '../app/activities/activities.module';
//import { ListComponent } from './activities/list/list.component';
//import { CreateComponent } from './activities/create/create.component';

@NgModule({
declarations: [
	AppComponent,

],
imports: [
	BrowserModule,
	AppRoutingModule,
	AngularFireModule.initializeApp(environment.firebase),
	FormsModule,
	ReactiveFormsModule,
	ActivitiesModule,
],
providers: [],
bootstrap: [AppComponent]
})

export class AppModule { }
