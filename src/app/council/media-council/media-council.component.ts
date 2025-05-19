import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-media-council',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule],
  templateUrl: './media-council.component.html',
  styleUrl: './media-council.component.css'
})
export class MediaCouncilComponent {
 members: any[] = [
    {
      name: 'Shivan Saroj',
      role: 'Member',
      image: 'https://source.unsplash.com/100x100/?man,student',
    },
    {
      name: 'Muskan Gupta',
      role: 'Member',
      image: 'https://source.unsplash.com/100x100/?girl,student',
    },
    {
      name: 'Sailesh Yadav',
      role: 'Member',
      image: 'https://source.unsplash.com/100x100/?woman,team',
    },
    {
      name: 'Mahreen Mansoori',
      role: 'Member',
      image: 'https://source.unsplash.com/100x100/?boy,creative',
    },
      
  ];
}
