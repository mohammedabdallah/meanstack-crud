import {Component} from '@angular/core';

@Component({
	selector    : 'app-post-create',
	templateUrl : './post-create.component.html',
})
export class CreatePostComponent {
	newPost = 'No Content';
	onAddPost(postInput)
	{
		this.newPost = postInput.value;
	}
}