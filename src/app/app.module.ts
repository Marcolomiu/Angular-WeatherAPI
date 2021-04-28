import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { ActivitiesComponent } from './activities/activities.component';

@NgModule({
declarations: [
	AppComponent,
	ActivitiesComponent
],
imports: [
	BrowserModule,
	AppRoutingModule,
	AngularFireModule.initializeApp(environment.firebase),
	FormsModule,
	ReactiveFormsModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
