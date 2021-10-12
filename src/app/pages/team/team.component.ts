import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/services/main.service';
import { TeamModel } from '../../models/Teams'
import { PlayerModel } from '../../models/Players'

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  loading = true
  team:TeamModel
  teamPlayers:PlayerModel[]
  constructor(private service:MainService, private route: ActivatedRoute) {
    var id = route.snapshot.params.id
    this.service.getSection('teams').subscribe((team:any)=>{
      this.team = team.filter((team:TeamModel) => team.id == id)[0]
      this.service.getSection('players').subscribe((players:any)=>{
        this.loading = false
        this.teamPlayers = players.filter((player:PlayerModel)=>player.teamId == this.team.id)
      })
    })
  }

  ngOnInit(): void {
  }

}
