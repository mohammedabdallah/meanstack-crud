import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../post.model';
import { PostsService } from '../post.service';


@Component({
  selector: 'app-listposts',
  templateUrl: './listposts.component.html',
  styleUrls: ['./listposts.component.css']
})
export class ListpostsComponent implements OnInit , OnDestroy {
  posts: Post[] =[];
  private postSub: Subscription;
  constructor(public PostsService:PostsService) { }

  ngOnInit() {
  	this.PostsService.getPosts();
  	this.postSub = this.PostsService.getPostUpdatedListner().subscribe((posts:Post[])=>{
  		this.posts = posts;
  	});
  }
  onDelete(postID:string){
    this.PostsService.deletePost(postID);
  }
  ngOnDestroy(){
    this.postSub.unsubscribe();
  }
}
