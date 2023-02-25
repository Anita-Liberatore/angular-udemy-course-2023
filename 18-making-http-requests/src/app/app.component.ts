import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './model/post';
import { map } from 'rxjs';
import { PostsService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loadedPosts: Post[] = [];
  isLoading = false;
  isDelete = false;
  statusDelete!: string;

  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    this.onFetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postsService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    this.isLoading = true;
    this.postsService.fetchPosts().subscribe((posts) => {
      this.isLoading = false;
      this.loadedPosts = posts;
    });
  }

  onClearPosts() {
    this.postsService
      .deletePosts()
      .subscribe(
        () => (
          (this.isDelete = true), (this.statusDelete = 'Delete successful'), this.loadedPosts = []
        )
      );
  }
}
