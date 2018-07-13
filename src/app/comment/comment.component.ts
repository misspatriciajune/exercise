import { Component, OnInit, Input } from '@angular/core';
// import { ApiService, Post, Comment } from '../api.service';
import { Comments } from '../comments';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comments: Comment;

  constructor() { }
  
  ngOnInit() {

  }

  

}
