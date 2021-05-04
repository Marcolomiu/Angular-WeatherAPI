import { Injectable, NgZone } from '@angular/core';
import { User } from "../user";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";

@Injectable({
providedIn: 'root'
})

export class LoginService {

	public user: User;
	userData: any; // Save logged in user data

	constructor(
		public afs: AngularFirestore,   // Inject Firestore service
		public afAuth: AngularFireAuth, // Inject Firebase auth service
		public router: Router,  
		public ngZone: NgZone // NgZone service to remove outside scope warning
	) {    
		// Setting logged in user in localstorage else null
		this.afAuth.authState.subscribe(user => {
			if (user) {
				this.userData = user;
				localStorage.setItem('user', JSON.stringify(this.userData));
				JSON.parse(localStorage.getItem('user'));
			} else {
				localStorage.setItem('user', null);
				JSON.parse(localStorage.getItem('user'));
			}
		})
	}

	// Returns true when user is looged in and email is verified
	get isLoggedIn(): boolean {
		const user = JSON.parse(localStorage.getItem('user'));
		return (user !== null) ? true : false;
	}

	async login(email: string, password: string) {

		console.log(email, password);
		try {
			const result = await this.afAuth.signInWithEmailAndPassword(
				email,
				password
			)
			console.log(result);

			if (result) {
				this.router.navigate(['/list']);
			}

			return result;
		} catch (error) {
			console.log(error);
		}
	}
}