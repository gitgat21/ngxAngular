import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit {
  max: number = 100;
  value: number = 45;

  constructor() { }

  ngOnInit(): void {
  }

}
