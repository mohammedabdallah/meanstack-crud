import {Component,EventEmitter,Output} from '@angular/core';
import { Post } from './posts/post.model';
import { Post } from './posts/post.model';

@Component({
	selector    : 'app-post-create',
	templateUrl : './post-create.component.html',
	styleUrls   : ['./post-create-component.css']
})
export class CreatePostComponent {
	
	enteredTitle = '';
	enteredContent = '';
	@Output() postCreated = new EventEmitter;
	onAddPost()
	{
		const post: Post ={title:this.enteredTitle,content:this.enteredContent};
		this.postCreated.emit(post);
	}
}