import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { PlayersComponent } from './pages/players/players.component';
import { LeaguesComponent } from './pages/leagues/leagues.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { TeamComponent } from './pages/team/team.component';
import { LeagueComponent } from './pages/league/league.component';
import { PlayerComponent } from './pages/player/player.component';
import { NewPageComponent } from './pages/new/new.component';
import { SearchComponent } from './pages/search/search.component';
import { EditComponent } from './pages/edit/edit.component';

const routes: Routes = [
  {path:'', component:IndexComponent},
  {path:'players', component:PlayersComponent},
  {path:'players/:id', component:PlayerComponent},
  {path:'teams', component:TeamsComponent},
  {path:'teams/:id', component:TeamComponent},
  {path:'leagues', component:LeaguesComponent},
  {path:'leagues/:id', component:LeagueComponent},
  {path:'new', component:NewPageComponent},
  {path:'new/:section', component:NewPageComponent},
  {path:'search', component:SearchComponent},
  {path:'edit/:section/:id', component:EditComponent},
  {path:'**', redirectTo:'/', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
