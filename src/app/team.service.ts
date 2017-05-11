import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/filter'
import { Injectable } from '@angular/core'
import { Headers, Http } from '@angular/http'
import { Team } from './team'


let players = Array(1000).fill(0).map((c, i) => {
	return {
		id: i,
		name: `玩家${ i }`,
		teamid: Math.floor(20 * Math.random())
	}
})

let teams = Array(20).fill(0).map((c, i) => {
	return {
		id: i,
		name: `队伍${ i }`,
		players: players.filter(player => player.teamid === i)
	}
})

@Injectable()
export class TeamService {
	query(index: number): Promise<Team[]>{
		return Promise.resolve(teams.slice(index * 5, (index + 1) * 5))
	}
	get(id: number){
		console.log(id)
		let t = teams.filter(team => {
			//console.log(team, id, team.id)
			return team.id === id
		})
		return Promise.resolve(t[0])
	}
	getPlayer(id: number){
		return Promise.resolve(players.filter(player => player.id === id)[0])
	}
}
