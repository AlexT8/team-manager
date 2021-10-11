import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../../services/main.service';
import { Team, TeamModel } from '../../models/Teams'
import { Player } from '../../models/Players'
import { LeagueModel } from '../../models/League'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewPageComponent implements OnInit {

  team = new Team();
  player = new Player()
  section:string;
  leagues:LeagueModel[] 
  teams:TeamModel[]

  constructor(private service:MainService, private route:ActivatedRoute) {
    this.section = route.snapshot.params.section
    if(this.section!='') this.selectSection(this.section)
  }

  ngOnInit(): void {
  }

  //select the section to create the data 
  //and get the leagues in case of creating a team
  //or get the teams in case of creating a player
  selectSection(section){
    //setting the section to create
    this.section = section
    //search depending on the section selected
    var info = section=='player'?'teams':'leagues'
    this.service.getSection(info).subscribe((data:any)=>{
      section=='player'?this.teams=data:this.leagues=data
    })
  }

  //creating the new team / player
  new(){
    if(this.section=='team'){
      //add team
      this.service.newTeam(this.team).subscribe((data:any)=>{
        console.log(data)
        Swal.fire({
          icon:'success',
          text:'Equipo añadido con éxito'
        })
      })
    }else{
      //add player
      this.service.newPlayer(this.player).subscribe((data:any)=>{
        console.log(data)
        Swal.fire({
          icon:'success',
          text:'Jugador añadido con éxito'
        })
      })
    }
  }
}
