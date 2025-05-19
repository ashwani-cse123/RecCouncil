import { Component } from '@angular/core';
import { AdminSidebarComponent } from "../admin-sidebar/admin-sidebar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-medial-controlls',
  standalone: true,
  imports: [AdminSidebarComponent,RouterOutlet],
  templateUrl: './medial-controlls.component.html',
  styleUrl: './medial-controlls.component.css'
})
export class MedialControllsComponent {
 sidebarItems = [
    {
      label: 'Dashboard',
      link: '/admin/dashboard',
      icon: 'fas fa-tachometer-alt',
    },
      {
      label: 'Profile',
      link: '/admin/mediacontrolls/profile',
      icon: 'fa-solid fa-user',
    },
    {
      label: 'Event',
      link: '',
      icon: 'fa-solid fa-calendar-week',
    },
    {
      label: 'Letest News',
      icon: 'fa-solid fa-calendar-week',
      children: [
        {
          label: 'Add News',
          link: '/admin/add-news',
          icon: 'fas fa-plus',
        },
        {
          label: 'Delete News',
          link: '/admin/delete-news',
          icon: 'fas fa-trash',
        },
      ],
    },
    {
      label: 'Team',
      icon: 'fas fa-users',
      children: [
        {
          label: 'Update Convenors',
          link: '/admin/update-convenors',
          icon: 'fas fa-user-tie',
        },
        {
          label: 'Update Heads',
          link: '/admin/update-heads',
          icon: 'fas fa-user-cog',
        },
        {
          label: 'Update Members',
          link: '/admin/update-members',
          icon: 'fas fa-user-friends',
        },
      ],
    },
    {
      label: 'Update Gallery',
      icon: 'fas fa-images',
      children: [
        {
          label: 'Update Month-wise',
          link: '/admin/gallery/month-wise',
          icon: 'fas fa-calendar',
        },
        {
          label: 'Update Year-wise',
          link: '/admin/gallery/year-wise',
          icon: 'fas fa-calendar-alt',
        },
      ],
    },
    { label: 'Inbox', link: '/admin/inbox', icon: 'fas fa-inbox' },
  ];
}
