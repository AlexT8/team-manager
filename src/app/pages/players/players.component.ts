import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import {PlayerModel} from '../../models/Players'

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
      console.log(data)
      this.players = data;
      this.loading = false
    })

  }

  ngOnInit(): void {
  }

  newPlayer(){
    console.log('new')
  }
}
