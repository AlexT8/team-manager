import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
}
