import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { PlayersComponent } from './pages/players/players.component';
import { LeaguesComponent } from './pages/leagues/leagues.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { TeamComponent } from './pages/team/team.component';

const routes: Routes = [
  {path:'', component:IndexComponent},
  {path:'players', component:PlayersComponent},
  {path:'players/:id', component:PlayersComponent},
  {path:'teams', component:TeamsComponent},
  {path:'teams/:id', component:TeamComponent},
  {path:'leagues', component:LeaguesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
