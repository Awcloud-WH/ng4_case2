import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerComponent, PlayerListComponent } from './player/player.component';
import { TeamComponent, TeamListComponent } from './team/team.component';
import { NotFoundComponent } from './common/common.component';

const routes: Routes = [
	{ path: 'team', children: [
		{ path: '', component: TeamListComponent },
		{ path: ':id', component: TeamComponent, children: [
			{ path: 'player/:id', component: PlayerComponent }
		] }
	] },
	{ path: 'player', children: [
		{ path: '', component: PlayerListComponent },
		{ path: ':id', component: PlayerComponent }
	]},
	{ path: '', redirectTo: '/team', pathMatch: 'full' },
	{ path: '**', component: NotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: false })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
