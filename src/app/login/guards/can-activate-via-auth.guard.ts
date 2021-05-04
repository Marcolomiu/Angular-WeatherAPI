import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { LoginService } from '../services/firestore/login.service'
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class CanActivateViaAuthGuard implements CanActivate {
	
	constructor(private authService: LoginService, private router: Router) { }

	canActivate(): boolean {
		// If the user is not logged in we'll send them back to the home page
		
		if (!this.authService.isLoggedIn) {
			console.log('You’re not logged');
			this.router.navigate(['/login']);
			return false;
		}
		return true;
	}
}
