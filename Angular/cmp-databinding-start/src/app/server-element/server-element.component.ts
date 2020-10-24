import { Component, OnInit, Input, OnChanges, ViewEncapsulation, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input() element: {type: string, name: string, content: string};

  constructor() {
    console.log("contructor called")
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges Called");
    console.log(changes)

  }

  ngOnInit(): void {
    console.log("ngoninit called")
  }

  

}
