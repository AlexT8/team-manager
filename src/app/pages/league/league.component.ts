import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { LeagueModel } from '../../models/League'
import { TeamModel } from '../../models/Teams'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {

  loading = true
  league:LeagueModel
  leagueTeams:TeamModel[]
  constructor(private service:MainService, private route:ActivatedRoute) {
    this.service.getSection('leagues').subscribe((league:any)=>{
      this.league = league.filter((league:LeagueModel) => league.Identificador == route.snapshot.params.id)
      this.league = this.league[0]
      this.service.getSection('teams').subscribe((teams:any)=>{
        this.loading = false
        this.leagueTeams = teams.filter((team:TeamModel)=>team.Liga == this.league.Identificador)
        console.log(this.leagueTeams)
      })
    })
  }

  ngOnInit(): void {
  }

  viewTeam(id){
    this.service.navigate(`/teams/${id}`)
  }
}
