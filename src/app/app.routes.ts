import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
// import { authGuard } from './guard/auth.guard';
import { HomePageComponent } from './home-page/home-page.component';
import { CouncilComponent } from './council/council.component';
import { EventsComponent } from './events/events.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { JoinUsFormComponent } from './home-page/join-us-form/join-us-form.component';
import { TechnicalCouncilComponent } from './council/technical-council/technical-council.component';
import { admin } from './service/admin.guard';
import { MediaCouncilComponent } from './council/media-council/media-council.component';
import { BestpicYearComponent } from './council/media-council/bestpic-year/bestpic-year.component';
import { BestpicMonthComponent } from './council/media-council/bestpic-month/bestpic-month.component';
import { CulturalCouncilComponent } from './council/cultural-council/cultural-council.component';
import { MedialControllsComponent } from './admin/medial-controlls/medial-controlls.component';
import { TechnicalControllsComponent } from './admin/technical-controlls/technical-controlls.component';
import { ProfileComponent } from './admin/medial-controlls/profile/profile.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'JoinUs',
    component: JoinUsFormComponent,
  },
  {
    path: 'council',
    component: CouncilComponent,
  },
  {
    path: 'events',
    component: EventsComponent,
  },
  {
    path: 'technical',
    component: TechnicalCouncilComponent,
  },
  {
    path: 'cult',
    component: CulturalCouncilComponent,
  },
  {
    path: 'media',
    component: MediaCouncilComponent,
    children: [
      {
        path: 'yearpic',
        component: BestpicYearComponent,
      },
      {
        path: 'monthpic',
        component: BestpicMonthComponent,
      },
    ],
  },
  {
    path: 'about',
    component: AboutUsComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    // canActivate:[admin]
  },
  {
    path: 'admin/mediacontrolls',
    component: MedialControllsComponent,
    children:[
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'',
        component:ProfileComponent
      }
    ]
  },
   {
    path: 'admin/technicalcontrolls',
    component:TechnicalControllsComponent ,
  },
  {
    path: 'user',
    component: UserComponent,
  },
];
