import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  @Input() section:string;
  constructor(private location:Location) { }

  ngOnInit(): void {
  }

  back(){
    this.location.back()
  }
}
