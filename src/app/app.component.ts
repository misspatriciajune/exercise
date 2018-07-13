import { Component, OnInit } from '@angular/core';
import { ApiService, Post, Comment } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Recruitment';
  dataIsAvailable: boolean;
  posts: Post[];  //posts
  comments: Comment[];  //comments
  selected: any;  //holds selected postId
  show:boolean = false;

  constructor(private apiService: ApiService) {
    this.dataIsAvailable = false;
  }

  ngOnInit() {
    this.apiService.getPosts().subscribe(posts => {
      this.posts = posts;
      this.dataIsAvailable = true;
    });
    this.apiService.getComments(2).subscribe(comments => {  //get all comments of the selected postId
      this.comments = comments;
    });
  }
  
  receiveClicked(event){
    this.selected = event;
    console.log("clicked id "+this.selected); //debugging purposes
    return this.selected;
  }

  showForm() {
    this.show = !this.show;
  }

}
