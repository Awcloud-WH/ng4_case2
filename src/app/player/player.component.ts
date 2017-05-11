import 'rxjs/add/operator/switchMap'
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { Team } from '../team'
import { Player } from '../player'
import { TeamService } from '../team.service'

@Component({
	selector: 'my-app-player',
	templateUrl: './player.component.html',
	styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
	player: Player
	constructor(
		private service: TeamService,
		private route: ActivatedRoute
	) {
		console.log(this)
	}

	ngOnInit() {
		this.route.params
			.switchMap(params => {
				console.log(params)
				return this.service.getPlayer(+params.id)
			})
			.subscribe(player => this.player = player)
	}

}
