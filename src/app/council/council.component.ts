import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-council',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './council.component.html',
  styleUrl: './council.component.css'
})
export class CouncilComponent {

}
