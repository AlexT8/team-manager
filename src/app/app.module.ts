import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './material.module';
import { PlayersComponent } from './pages/players/players.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { LeaguesComponent } from './pages/leagues/leagues.component';
import { LoaderComponent } from './components/loader/loader.component';
import { TitleComponent } from './components/title/title.component';
import { NewButtonComponent } from './components/new/new.component';
import { TeamComponent } from './pages/team/team.component';
import { LeagueComponent } from './pages/league/league.component';
import { PlayerComponent } from './pages/player/player.component';
import { NewPageComponent } from './pages/new/new.component';
import { SearchComponent } from './pages/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlayersComponent,
    TeamsComponent,
    LeaguesComponent,
    LoaderComponent,
    TitleComponent,
    NewButtonComponent,
    TeamComponent,
    LeagueComponent,
    PlayerComponent,
    NewPageComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
