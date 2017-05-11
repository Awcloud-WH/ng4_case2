import { BrowserModule } from '@angular/platform-browser'
import { NgModule, Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { PlayerComponent, PlayerListComponent } from './player/player.component'
import { TeamComponent, TeamListComponent, TeamWithoutHttpComponent } from './team/team.component'
import { NotFoundComponent } from './common/common.component'
import { TeamService } from './team.service'
@NgModule({
	declarations: [
		AppComponent,
		PlayerComponent, PlayerListComponent,
		TeamComponent, TeamListComponent, TeamWithoutHttpComponent,
		NotFoundComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AppRoutingModule
	],
	providers: [
		TeamService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
