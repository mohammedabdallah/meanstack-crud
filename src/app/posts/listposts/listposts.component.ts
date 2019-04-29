import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listposts',
  templateUrl: './listposts.component.html',
  styleUrls: ['./listposts.component.css']
})
export class ListpostsComponent implements OnInit {
  posts = [
	  {title:'First post',content:'first post title'},
	  {title:'Seocnd post',content:'second post title'},
	  {title:'third post',content:'third post title'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
