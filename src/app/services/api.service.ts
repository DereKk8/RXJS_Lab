import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User, Post, Comment } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseUrl = 'https://dummyjson.com';

  constructor(private http: HttpClient) {}


  searchUserByUsername(username: string): Observable<User[]> {
    const url = `${this.baseUrl}/users/filter?key=username&value=${username}`;
    return this.http.get<{users: User[]}>(url).pipe(
      map(response => response.users),
      catchError(this.handleError)
    );
  }

  
  getUserPosts(userId: number): Observable<Post[]> {
    const url = `${this.baseUrl}/posts/user/${userId}`;
    return this.http.get<{posts: Post[]}>(url).pipe(
      map(response => response.posts),
      catchError(this.handleError)
    );
  }


  getPostComments(postId: number): Observable<Comment[]> {
    const url = `${this.baseUrl}/comments/post/${postId}`;
    return this.http.get<{comments: Comment[]}>(url).pipe(
      map(response => response.comments),
      catchError(this.handleError)
    );
  }

 
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Something went wrong. Please try again.';
    
    if (error.status === 0) {
      errorMessage = 'No internet connection';
    } else if (error.status === 404) {
      errorMessage = 'Data not found';
    } else if (error.status >= 500) {
      errorMessage = 'Server error. Please try again later';
    }

    console.error('API Error:', error);
    return throwError(() => new Error(errorMessage));
  }
}
