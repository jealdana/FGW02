import { RouterModule, Routes } from '@angular/router';

/* Components */
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';


const NAV_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '**', pathMatch:'full', redirectTo: 'home' }

];

export const APP_ROUTING = RouterModule.forRoot( NAV_ROUTES );
/* Note:
  * add tag <router-outlet></router-outlet> in file component (~.component.html)
  * Need import and imports `app_routing`  in file module (~.module.ts) or ignore this message. */
