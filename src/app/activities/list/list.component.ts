import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirestoreService } from '../services/firestore/firestore.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  public activities = [];


	constructor(private firestoreService: FirestoreService) {	}

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
