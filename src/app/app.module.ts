import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { PlayerComponent } from './player/player.component'
import { TeamComponent } from './team/team.component'
import CommonComponents from './common/common.component'
import { TeamService } from './team.service'

console.log(CommonComponents)

@NgModule({
	declarations: [
		AppComponent,
		PlayerComponent,
		TeamComponent
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
