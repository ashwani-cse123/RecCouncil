import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { MedialControllsComponent } from "./medial-controlls/medial-controlls.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [MedialControllsComponent,RouterOutlet],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
 
}
