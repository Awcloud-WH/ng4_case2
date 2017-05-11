import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'not-found-common',
  template: `404 page`,
  styleUrls: ['./common.component.css']
})
class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export default [
  NotFoundComponent
]