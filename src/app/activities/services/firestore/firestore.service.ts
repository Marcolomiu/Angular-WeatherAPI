import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

	constructor(
		private firestore: AngularFirestore
	) {}

	//Crea una nueva activity
	public createActivity(data: {nombre: string, fecha: Date, prediccion: string}) {
		return this.firestore.collection('activities').add(data);
	}
	//Obtiene una activity
	public async getWeather(año: number, mes: number, dia: number): Promise<any> {

		let array = [];

		const response = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/753692/${año}/${mes}/${dia}/`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			},
		});
	
		console.log('Response:', response);

		/*
		if (response.status !== 200) {
			return false;
		}
		*/

		//return await response.json();
		array = await response.json();
		
		console.log('Array[0]:', array[0]);
		console.log('Array[0].weather_state_abbr:', array[0].weather_state_abbr);
		
		return array[0].weather_state_abbr;
	}

	//Obtiene una activity
	public getActivity(documentId: string) {
		return this.firestore.collection('activities').doc(documentId).snapshotChanges();
	}

	//Obtiene todas las activities
	public getActivities() {
		return this.firestore.collection('activities').snapshotChanges();
	}

	//Actualiza una activity
	public updateActivity(documentId: string, data: any) {
		return this.firestore.collection('activities').doc(documentId).set(data);
	}
}