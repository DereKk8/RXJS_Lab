import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post, Comment } from '../../interfaces';

@Component({
  selector: 'app-user-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-posts.component.html',
  styleUrl: './user-posts.component.css'
})
export class UserPostsComponent {
  @Input() posts: Post[] = [];
  @Input() commentsByPostId: { [postId: number]: Comment[] } = {};

  
  get hasPosts(): boolean {
    return this.posts && this.posts.length > 0;
  }

  
  getCommentsForPost(postId: number): Comment[] {
    return this.commentsByPostId[postId] || [];
  }

  
  getTotalReactions(post: Post): number {
    return (post.reactions?.likes || 0) + (post.reactions?.dislikes || 0);
  }
}
