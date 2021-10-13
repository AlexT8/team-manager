import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TeamModel } from '../models/Teams';
import { PlayerModel } from '../models/Players';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  

  constructor(private http:HttpClient, private router:Router) { }

  // get link passing path by parameter
  link(path:String){
    return `https://footbal-api.herokuapp.com/${path}`
  }
  //navigate through app
  navigate(link:string){
    this.router.navigate([link])
  }

  //get data from API depending path
  getSection(section:string){
    return this.http.get(this.link(section))
  }

  //add teams / players
  newTeam(team:TeamModel){
    return this.http.post(this.link('teams'), team)
  }
  newPlayer(player:PlayerModel){
    return this.http.post(this.link('players'), player)
  }

  //delete teams / players
  delTeam(id){
    return this.http.delete(this.link(`teams/${id}`))
  }
  delPlayer(id){
    return this.http.delete(this.link(`players/${id}`))
  }

  //edit player or team depending parameters
  editData(section, data){
    return this.http.patch(`${this.link(section)}/${data.id}`, data)
  }
}
