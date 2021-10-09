import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { PlayersComponent } from './pages/players/players.component';
import { LeaguesComponent } from './pages/leagues/leagues.component';
import { TeamsComponent } from './pages/teams/teams.component';

const routes: Routes = [
  {path:'', component:IndexComponent},
  {path:'players', component:PlayersComponent},
  {path:'leagues', component:LeaguesComponent},
  {path:'teams', component:TeamsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
