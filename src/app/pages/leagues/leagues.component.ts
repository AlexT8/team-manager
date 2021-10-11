import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { LeagueModel } from '../../models/League'

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {

  loading = true
  leagues:LeagueModel[]
  constructor(private service:MainService) {
    this.service.getSection('leagues').subscribe((data:any) => {
      this.leagues = data
      this.loading = false
    })
  }

  ngOnInit(): void {
  }

  viewLeague(id){
    this.service.navigate(`/leagues/${id}`)
  }
}
