import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './model/post';
import { map } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  loadedPosts: Post[] = []
  isLoading = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.http.post<{ [key: string]: Post }>('https://angular-udemy-course-d7968-default-rtdb.firebaseio.com/posts.json', 
    postData).subscribe(response => {
      console.log(response)
    });
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.isLoading = true;
    this.http.get<{ [key: string]: Post }>('https://angular-udemy-course-d7968-default-rtdb.firebaseio.com/posts.json')
    .pipe(map(responseData => {
      const postsArray: Post[] = [];
      for(const key in responseData) {
        if(responseData.hasOwnProperty(key)) {
          postsArray.push({ ...responseData[key], id: key})
        }
      }
      console.log(postsArray)
      return postsArray;
    })
    ).subscribe(posts => {
      this.isLoading = false;
      this.loadedPosts = posts;
    })
  }
}
