import { BrowserModule } from '@angular/platform-browser'
import { NgModule, Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import * as PlayerComponents from './player/player.component'
import * as TeamComponents from './team/team.component'
import { NotFoundComponent } from './common/common.component'
import { TeamService } from './team.service'
@NgModule({
	declarations: [
		AppComponent,
		...Object.keys(PlayerComponents).map(key => PlayerComponents[key]).filter(component => typeof component === 'function'),
		...Object.keys(TeamComponents).map(key => TeamComponents[key]).filter(component => typeof component === 'function'),
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
