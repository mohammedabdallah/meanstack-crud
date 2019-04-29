import {Component} from '@angular/core';

@Component({
	selector    : 'app-post-create',
	templateUrl : './post-create.component.html',
})
export class CreatePostComponent {
	enteredValue = '';
	newPost = 'No Content';
	onAddPost()
	{
		this.newPost = this.enteredValue;
	}
}