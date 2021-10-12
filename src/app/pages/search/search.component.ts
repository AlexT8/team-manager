import { Component, OnInit } from '@angular/core';
import { TeamModel } from '../../models/Teams'
import {PlayerModel} from '../../models/Players'
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  result = []
  sectionSearched:string

  teams:TeamModel[]
  players:PlayerModel[]

  playersSearched:PlayerModel[] = []
  teamsSearched:TeamModel[] = []

  constructor(private service:MainService) {

    this.service.getSection('players').subscribe((data:any)=>{
      this.players = data;
    })
    this.service.getSection('teams').subscribe((data:any)=>{
      this.teams = data
    })
  }

  ngOnInit(): void {
  }

  view(section, id){
    if(section=='player') this.service.navigate(`players/${id}`)
    else this.service.navigate(`teams/${id}`)
  }

  search(value){
    this.teamsSearched = []
    this.playersSearched = []
    if(!value) return //if there is no value does not search anything
    
    this.teams.map(team=>{
      if(team['Nombre del equipo'].toLocaleLowerCase().includes(value)) this.teamsSearched.push(team)
    })
    this.players.map(player=>{
      if(player['Nombre del Jugador'].toLocaleLowerCase().includes(value)) this.playersSearched.push(player)
    })
  }

}
