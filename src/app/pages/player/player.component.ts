import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { ActivatedRoute } from '@angular/router';
import { PlayerModel } from '../../models/Players';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  player:PlayerModel
  loading = true;
  constructor(private service:MainService, private route: ActivatedRoute) {

    var id = route.snapshot.params.id
    this.service.getSection('players').subscribe((data:any)=>{
      this.loading = false
      this.player = data.filter((player:PlayerModel)=>player.id == id)[0];
      this.loading = false
    })
  }

  ngOnInit(): void {
  }

}
