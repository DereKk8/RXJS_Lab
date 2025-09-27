import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserPostsComponent } from './components/user-posts/user-posts.component';
import { ApiService } from './services/api.service';
import { User, Post, Comment } from './interfaces';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [CommonModule, UserProfileComponent, UserPostsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('rxjs-app');
  
  selectedUser: User | null = null;
  userPosts: Post[] = [];
  commentsByPostId: { [postId: number]: Comment[] } = {};
  isLoading = false;
  isLoadingPosts = false;
  errorMessage = '';

  constructor(private apiService: ApiService) {}

  searchUser(input: HTMLInputElement | Event) {
    let username = '';
    
    if (input instanceof HTMLInputElement) {
      username = input.value.trim();
    } else {
      username = (input.target as HTMLInputElement).value.trim();
    }

    if (!username) {
      this.errorMessage = 'Please enter a username';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.selectedUser = null;

    this.apiService.searchUserByUsername(username).subscribe({
      next: (users) => {
        this.isLoading = false;
        if (users && users.length > 0) {
          this.selectedUser = users[0]; // Get the first user from results
          this.errorMessage = '';
          this.loadUserPosts(this.selectedUser.id); // Load posts for this user
        } else {
          this.errorMessage = `No user found with username: ${username}`;
        }
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.message || 'Failed to search user';
        console.error('Search error:', error);
      }
    });
  }

  loadUserPosts(userId: number) {
    this.isLoadingPosts = true;
    this.userPosts = [];
    this.commentsByPostId = {};

    this.apiService.getUserPosts(userId).subscribe({
      next: (posts) => {
        this.userPosts = posts;
        this.loadCommentsForPosts(posts);
      },
      error: (error) => {
        this.isLoadingPosts = false;
        console.error('Error loading posts:', error);
      }
    });
  }

  loadCommentsForPosts(posts: Post[]) {
    if (posts.length === 0) {
      this.isLoadingPosts = false;
      return;
    }

    // Load comments for all posts in parallel
    const commentRequests = posts.map(post => 
      this.apiService.getPostComments(post.id)
    );

    forkJoin(commentRequests).subscribe({
      next: (commentsArrays) => {
        // Organize comments by postId
        posts.forEach((post, index) => {
          this.commentsByPostId[post.id] = commentsArrays[index];
        });
        this.isLoadingPosts = false;
      },
      error: (error) => {
        this.isLoadingPosts = false;
        console.error('Error loading comments:', error);
      }
    });
  }
}
