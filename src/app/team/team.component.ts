import 'rxjs/add/operator/switchMap'
import { Component, OnInit, Input } from '@angular/core'
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
		console.log(this.route.params)
		this.route.params
			.switchMap(params => {
				return this.service.get(+params.id)
			})
			.subscribe(team => this.team = team)
	}
}

@Component({
	selector: 'my-app-team-without-http',
	template: `<a routerLink="/team/{{ team.id }}" routerLinkActive="active">{{ team.name }}</a>`,
	styles: [`:host{ display: block }
	.active{ background: #999 }`]
})
export class TeamWithoutHttpComponent {
	@Input() team: Team
	constructor(){
		console.log(arguments)
	}
}

@Component({
	selector: 'my-app-team-list',
	template: `<div>
		<a routerLink="{{ team.id }}" routerLinkActive="active" *ngFor="let team of teams">{{ team.name }}</a>
	</div>`,
	styles: [`
		div{ width: 150px }
		div a{
			display: inline-block;
			margin: 2px 4px; border: 1px solid #333; padding: 2px 4px;
		}
		div a:hover, div a.active{
			background: #aaa
		}
	`]
})
export class TeamListComponent{
	private teams: Team[] = []
	constructor(
		private service: TeamService
	){}
	ngOnInit() {
		this.service.query().then(teams => this.teams = teams)
	}
}