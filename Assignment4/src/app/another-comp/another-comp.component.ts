//in this component added @Input() and passed the title in @Input
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-another-comp',
 template: '<h1>{{title}}</h1>',
  //template:'<h1>In Child Component</h1>',
 // templateUrl:'./another-comp.component.html',
  styleUrls: ['./another-comp.component.css']
})
export class AnotherCompComponent implements OnInit {

  @Input() title : string;
  constructor() { }

  ngOnInit() {
  }

}
