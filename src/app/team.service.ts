import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/map'

import { Injectable } from '@angular/core'
import { Headers, Http } from '@angular/http'
import { Team } from './team'
import { Player } from './player'

@Injectable()
export class TeamService {
	constructor(
		private http: Http
	){
		console.log(http)
	}
	query(): Promise<Team[]>{
		return this.http.get('/assets/teams.json')
			.toPromise()
			.then(response => {
				return response.json() as Team[]
			})
	}
	queryPlayers(): Promise<Player[]>{
		return this.query()
			.then(teams => [].concat(...teams.map(team => team.players)))
	}
	get(id: number){
		return this.query()
			.then(teams => teams.find(team => team.id === id))
	}
	getPlayer(id: number){
		return this.queryPlayers()
			.then(players => players.find(player => player.id === id))
	}
}
