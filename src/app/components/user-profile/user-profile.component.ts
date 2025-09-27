import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../interfaces';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  @Input() user: User | null = null;

  
  get fullName(): string {
    if (!this.user) return '';
    return `${this.user.firstName} ${this.user.lastName}`.trim();
  }

  
  get hasValidUserData(): boolean {
    return !!(this.user && this.user.id && this.user.username);
  }
}
