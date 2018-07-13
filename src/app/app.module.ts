import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { PostComponent } from './post/post.component';

import { AppRoutingModule } from './app-routing.module';
import { CommentComponent } from './comment/comment.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [AppComponent, PostComponent, CommentComponent, ModalComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, AppRoutingModule],
  providers: [ApiService],
  bootstrap: [AppComponent] 
})
export class AppModule {
  
}
