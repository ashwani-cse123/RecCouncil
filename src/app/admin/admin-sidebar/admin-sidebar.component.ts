import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './admin-sidebar.component.html',
  styleUrl: './admin-sidebar.component.css',
})
export class AdminSidebarComponent {
  @Input() menuItems: any[] = [];
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  closeSidebar() {
  this.isSidebarOpen = false;
}

  constructor(private http: HttpClient, private route: Router) {}
  logof() {
    localStorage.removeItem('isLoggedIn');
    this.route.navigateByUrl('/').then(()=>{
      window.location.reload();
    });
    
  }
}
