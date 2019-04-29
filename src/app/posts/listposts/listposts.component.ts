import { Component, OnInit,Input } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-listposts',
  templateUrl: './listposts.component.html',
  styleUrls: ['./listposts.component.css']
})
export class ListpostsComponent implements OnInit {
  @Input() posts: Post[] =[];
  constructor() { }

  ngOnInit() {
  }

}
