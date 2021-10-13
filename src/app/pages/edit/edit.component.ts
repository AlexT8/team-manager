import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamModel } from 'src/app/models/Teams';
import { MainService } from '../../services/main.service';
import { PlayerModel } from '../../models/Players';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  section = this.route.snapshot.params.section
  id = this.route.snapshot.params.id

  data;
  loading = true
  constructor(private service:MainService, private route: ActivatedRoute) {

    //get name of the team or player depending the URL parameters
    if(this.section=='teams'){
      this.service.getSection('teams').subscribe((data:any)=>{
        this.data = data.filter((team:TeamModel)=>team.id == this.id)[0]
        console.log(this.data)
        this.loading = false
      })
    }else if(this.section=='players'){
      this.service.getSection('players').subscribe((data:any)=>{
        this.data = data.filter((player:PlayerModel)=>player.id == this.id)[0]
        this.loading = false
      })
    }else{
      this.service.navigate('')
    }
  }

  ngOnInit(): void {
  }

  //edit function to edit teams and players
  edit(){
    if(!this.validateEmptyName()) return
    //the function gets the section to be edited and pass the data to edit
    //this function works on teams and players
    this.service.editData(this.section, this.data).subscribe(data=>{
      console.log(data)
      Swal.fire({
        icon:'success',
        text:`${this.section == 'teams'?'Equipo':'Jugador'} editado exitosamente`
      })
    })
  }

  //verify if the name value is empty
  validateEmptyName(){
    if(!this.data['Nombre del equipo'] && !this.data['Nombre del Jugador']) return false
    else return true
  }
}
