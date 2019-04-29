import {Component,EventEmitter,Output} from '@angular/core';
import { Post } from '../post.model';

@Component({
	selector    : 'app-post-create',
	templateUrl : './post-create.component.html',
	styleUrls   : ['./post-create-component.css']
})
export class CreatePostComponent {
	
	enteredTitle = '';
	enteredContent = '';
	@Output() postCreated = new EventEmitter;
	onAddPost(form)
	{
		if(form.invalid)
			return;
		const post: Post ={title:form.value.title,content:form.value.content};
		this.postCreated.emit(post);
	}
}