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
	}

	ngOnInit() {
		this.route.params
			.switchMap(params => {
				return this.service.getPlayer(+params.id)
			})
			.subscribe(player => this.player = player)
	}

}
@Component({
	selector: 'my-app-player-list',
	template: `<span *ngFor="let player of players">
			<a routerLink="/player/{{ player.id }}">/{{ player.name }}</a>, 
			<a routerLink="{{ player.id }}" routerLinkActive="active">{{ player.name }}</a>
		</span>
		<router-outlet></router-outlet>`,
	styles: [`
		a{
			display: inline-block;
			margin: 2px 4px; border: 1px solid #333; padding: 2px 4px;
		}
		a:hover, a.active{
			background: #aaa
		}
	`]
})
export class PlayerListComponent{
	private players: Player[] = []
	constructor(
		private service: TeamService
	){}
	ngOnInit() {
		this.service.queryPlayers().then(players => this.players = players)
	}
}