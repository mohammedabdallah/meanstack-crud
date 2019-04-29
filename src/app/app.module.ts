import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule,MatCardModule,MatButtonModule,MatToolbarModule,MatExpansionModule } from '@angular/material';
import { AppComponent } from './app.component';
import { CreatePostComponent } from './posts/post-create/post-create.component';
import { HeaderComponent } from './header/header.component';
import { ListpostsComponent } from './posts/listposts/listposts.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePostComponent,
    HeaderComponent,
    ListpostsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
