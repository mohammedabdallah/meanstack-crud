import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
@Injectable({providedIn:'root'})
export class PostsService{

	private posts: Post[] = [];
	private postUpdated = new Subject<Post []> ();
	constructor(private http: HttpClient){}
	getPosts(){
		this.http.get<{message:string,posts:any}>("http://localhost:3000/api/posts")
		.pipe(map((postData)=>{
			return postData.posts.map(post=>{
				return {
					title:post.title,
					content:post.content,
					id:post._id
				};
			});
		}))
		.subscribe((transformPosts)=>{
			this.posts = transformPosts;
			this.postUpdated.next([...this.posts]);
		});
	}
	getPostUpdatedListner()
	{
		return this.postUpdated.asObservable();
	}
	Addpost(title,content)
	{
		const post: Post = {id:null,title:title,content:content};
		this.http.post<{message:string}>("http://localhost:3000/api/posts",post)
		.subscribe((response)=>{
			console.log(response.message);
			this.posts.push(post);
			this.postUpdated.next([...this.posts]);
		});
	}
	deletePost(postID:string){
		this.http.delete('http://localhost:3000/api/posts/'+postID).subscribe(()=>{
			console.log("deltete");
			this.posts = this.posts.filter(post => post.id != postID);
			this.postUpdated.next([...this.posts]);
		});
	}
}
