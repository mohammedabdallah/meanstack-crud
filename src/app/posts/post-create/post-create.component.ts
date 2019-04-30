import {Component} from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../post.service';

@Component({
	selector    : 'app-post-create',
	templateUrl : './post-create.component.html',
	styleUrls   : ['./post-create-component.css']
})
export class CreatePostComponent {
	
	enteredTitle = '';
	enteredContent = '';
	constructor(public PostsService:PostsService) { }
	onAddPost(form)
	{
		if(form.invalid)
			return;
		this.PostsService.Addpost(form.value.title,form.value.content);
		form.resetForm();
	}
}