import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import {PlayerModel} from '../../models/Players'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  loading = true
  players:PlayerModel[] = []

  constructor(private service:MainService) {
    this.service.getSection('players').subscribe((data:any)=>{
      this.players = data;
      this.loading = false
    })

  }

  ngOnInit(): void {
  }

  viewPlayer(id){
    this.service.navigate(`/players/${id}`)
  }
  newPlayer(){
    this.service.navigate(`/new/player`)
  }

  delPlayer(player){
    this.service.delPlayer(player.id).subscribe(data =>{
      this.players.splice(this.players.indexOf(player), 1)
      Swal.fire({
        icon:'success',
        text:'Jugador eliminado exitosamente'
      })
    })
  }
}
