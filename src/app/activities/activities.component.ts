import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirestoreService } from '../services/firestore/firestore.service';

@Component({
	selector: 'app-activities',
	templateUrl: './activities.component.html',
	styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

	public activities = [];

	public documentId = null;
	public currentStatus = 1;
	public newActivityForm = new FormGroup({
		nombre: new FormControl('', Validators.required),
		fecha: new FormControl('', Validators.required),
		prediccion: new FormControl(''),
		id: new FormControl('')
	});

	public newActivity(form, documentId = this.documentId) {
		
		console.log(`Status: ${this.currentStatus}`);

		if (this.currentStatus == 1) {
			let data = {
				nombre: form.nombre,
				fecha: form.fecha,
				prediccion: null //Aquí va la petició a https://www.metaweather.com/api/
			}
			this.firestoreService.createActivity(data).then(() => {

				console.log('Documento creado exitósamente!');

				this.newActivityForm.setValue({
					nombre: '',
					fecha: '',
					prediccion: '',
					id: ''
				});
			}, (error) => {
				console.error(error);
			});
		} else {
			let data = {
				nombre: form.nombre,
				fecha: form.fecha,
				prediccion: null //Aquí va la petició a https://www.metaweather.com/api/
			}
			this.firestoreService.updateActivity(documentId, data).then(() => {
				this.currentStatus = 1;
				this.newActivityForm.setValue({
					nombre: '',
					fecha: '',
					prediccion: '',
					id: ''
				});
				console.log('Documento editado exitósamente');
				}, (error) => {
					console.log(error);
				}
			);
		}
	}

	constructor(private firestoreService: FirestoreService) { 
		this.newActivityForm.setValue({
			id: '',
			nombre: '',
			fecha: '',
			prediccion: ''
		});
	}

	ngOnInit() {
		this.firestoreService.getActivities().subscribe((activitiesSnapshot) => {
			this.activities = [];
			activitiesSnapshot.forEach((activityData: any) => {
				this.activities.push({
					id: activityData.payload.doc.id,
					data: activityData.payload.doc.data()
				});
			})
			console.log(this.activities);
		});
	}
}