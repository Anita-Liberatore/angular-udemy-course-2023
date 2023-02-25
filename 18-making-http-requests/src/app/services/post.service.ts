import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../model/post';
import { catchError, map, Subject, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  error = new Subject<string>();

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content };

    this.http
      .post<{ [key: string]: Post }>(
        'https://angular-udemy-course-d7968-default-rtdb.firebaseio.com/posts.json',
        postData, {
            observe: 'response'
        }
      )
      .subscribe((response) => {
        console.log(response);
      }, error => {
        this.error.next(error.message)
      });
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty')
    searchParams = searchParams.append('custom', 'key')
    return this.http
      .get<{ [key: string]: Post }>(
        'https://angular-udemy-course-d7968-default-rtdb.firebaseio.com/posts.json',
        {
            headers: new HttpHeaders({'Custom-Header': 'hello'}),
            params: searchParams
        }
      )
      .pipe(
        map((responseData) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          console.log(postsArray);
          return postsArray;
        }),
        catchError(errorRes => {
           return throwError(errorRes)
        })
      );
  }

  deletePosts() {
    return this.http.delete(
      'https://angular-udemy-course-d7968-default-rtdb.firebaseio.com/posts.json', {
        observe: 'events'
      }
    ).pipe(tap(event => {
        console.log(event)
        if(event.type === HttpEventType.Sent) {
            
        }
        if(event.type === HttpEventType.Response) {
            console.log(event.body)
        }
    }));
  }
}
