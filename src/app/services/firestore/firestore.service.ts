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