import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { TeamModel } from '../../models/Teams'

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  loading = true
  teams:TeamModel[] = []
  constructor(private service:MainService) {
    this.service.getSection('teams').subscribe((data:any)=>{
      console.log(data)
      this.loading = false
      this.teams = data
    })
  }

  ngOnInit(): void {
  }

  viewTeam(id){
    this.service.navigate(`/teams/${id}`)
  }
  newTeam(){

  }
}
