import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerComponent } from './player/player.component';
import { TeamComponent } from './team/team.component';
//import { NotFoundComponent } from './common/common.component';

const routes: Routes = [
	{
		path: 'team/:id',
		component: TeamComponent,
		children: [
			{
				path: 'player/:id',
				component: PlayerComponent
			}
		]
	},
	{
		path: '',
		children: []
	},
	// {
	//   path: '**',
	//   //component: NotFoundComponent
	// }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
