import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  userId: number;
}

export interface Comment {
  id: number;
  content: string;
  postId: number;
  userId: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  // Mock data for demonstration
  private mockUsers: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' }
  ];

  private mockPosts: Post[] = [
    { id: 1, title: 'Getting Started with RXJS', content: 'Learn the basics of reactive programming...', userId: 1 },
    { id: 2, title: 'Advanced Operators', content: 'Deep dive into RXJS operators...', userId: 2 },
    { id: 3, title: 'Error Handling', content: 'Best practices for handling errors in RXJS...', userId: 1 }
  ];

  private mockComments: Comment[] = [
    { id: 1, content: 'Great tutorial!', postId: 1, userId: 2 },
    { id: 2, content: 'This helped me understand observables better.', postId: 1, userId: 3 },
    { id: 3, content: 'Thanks for sharing', postId: 2, userId: 1 },
    { id: 4, content: 'Looking forward to more content.', postId: 2, userId: 3 }
  ];

  /**
   * Get all users - simulates REST API call
   * This will be replaced with actual HTTP calls when REST API is ready
   */
  getUsers(): Observable<User[]> {
    return of(this.mockUsers).pipe(
      delay(500) // Simulate network delay
    );
  }

  /**
   * Get all posts - simulates REST API call
   * This will be replaced with actual HTTP calls when REST API is ready
   */
  getPosts(): Observable<Post[]> {
    return of(this.mockPosts).pipe(
      delay(500) // Simulate network delay
    );
  }

  /**
   * Get all comments - simulates REST API call
   * This will be replaced with actual HTTP calls when REST API is ready
   */
  getComments(): Observable<Comment[]> {
    return of(this.mockComments).pipe(
      delay(500) // Simulate network delay
    );
  }

  /**
   * Get posts by user ID
   */
  getPostsByUserId(userId: number): Observable<Post[]> {
    return of(this.mockPosts.filter(post => post.userId === userId)).pipe(
      delay(500)
    );
  }

  /**
   * Get comments by post ID
   */
  getCommentsByPostId(postId: number): Observable<Comment[]> {
    return of(this.mockComments.filter(comment => comment.postId === postId)).pipe(
      delay(500)
    );
  }
}