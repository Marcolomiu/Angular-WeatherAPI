import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { CanActivateViaAuthGuard } from './login/guards/can-activate-via-auth.guard';

import { ActivitiesModule } from '../app/activities/activities.module';
import { LoginModule } from '../app/login/login.module';
import { LoginService } from './login/services/firestore/login.service';

//import { ListComponent } from './activities/list/list.component';
//import { CreateComponent } from './activities/create/create.component';

@NgModule({
declarations: [
	AppComponent
],
imports: [
	BrowserModule,
	AppRoutingModule,
	AngularFireModule.initializeApp(environment.firebase),
	FormsModule,
	ReactiveFormsModule,
	ActivitiesModule,
	LoginModule
],
providers: [CanActivateViaAuthGuard, LoginService],
bootstrap: [AppComponent]
})

export class AppModule { }
