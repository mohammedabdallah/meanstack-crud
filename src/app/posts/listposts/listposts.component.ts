import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listposts',
  templateUrl: './listposts.component.html',
  styleUrls: ['./listposts.component.css']
})
export class ListpostsComponent implements OnInit {
  posts = [
  ];
  constructor() { }

  ngOnInit() {
  }

}
