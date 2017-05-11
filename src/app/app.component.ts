import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { Team } from './team'
import { TeamService } from './team.service'

@Component({
	selector: 'my-app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'ng4 路由'
	teams: Team[]
	constructor(
		private teamService: TeamService,
		private route: ActivatedRoute
	){}
	ngOnInit(){
		this.teamService.query(0).then(teams => this.teams = teams)
		//	.then(teams => this.teams = teams)
		// this.route.queryParams.map(() => )
		// 	.subscribe(teams => this.teams = teams)
	}
}
