import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-listposts',
  templateUrl: './listposts.component.html',
  styleUrls: ['./listposts.component.css']
})
export class ListpostsComponent implements OnInit {
  @Input() posts =[];
  constructor() { }

  ngOnInit() {
  }

}
