import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Posts } from '../posts';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  selected: number;
  @Input() posts: Posts;  //posts
  
  constructor(private apiService: ApiService ) {}

  ngOnInit() {
    
  }

  @Output() event = new EventEmitter(); 

  beingClicked(){ //Gets the selected postId
    this.selected = this.posts.id;
    // console.log(this.selected); //debugging purposes
    this.apiService.getComments(this.selected);
   // this.event.emit(this.selected);
  }


}

