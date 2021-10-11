import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-button',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewButtonComponent implements OnInit {

  @Output() new = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  action(){
    this.new.emit()
  }
}
