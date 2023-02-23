import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './model/post';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  loadedPosts = []

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onCreatePost(postData: Post) {
    // Send Http request
    console.log(postData);
  }

  onFetchPosts() {
    // Send Http request
  }

  onClearPosts() {
    // Send Http request
  }
}
