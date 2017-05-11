import 'rxjs/add/operator/switchMap'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { Team } from '../team'
import { TeamService } from '../team.service'

@Component({
	selector: 'my-app-team',
	templateUrl: './team.component.html',
	styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
	team: Team
	constructor(
		private route: ActivatedRoute,
		private service: TeamService
	){}

	ngOnInit(){
		this.route.params
			.switchMap(params => this.service.get(+params.id))
			.subscribe(team => this.team = team)
	}
}
