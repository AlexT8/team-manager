import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { TeamModel } from '../../models/Teams'
import Swal from 'sweetalert2'

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
    this.service.navigate(`/new/team`)
  }


  delTeam(team){
    this.service.delTeam(team.id).subscribe(data =>{
      this.teams.splice(this.teams.indexOf(team), 1)
      Swal.fire({
        icon:'success',
        text:'Equipo eliminado exitosamente'
      })
    })
  }
}
