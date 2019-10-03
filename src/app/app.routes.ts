import { RouterModule, Routes } from '@angular/router';

/* Components */
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';

import { HeroeComponent } from './components/heroe/heroe.component';



const NAV_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: '**', pathMatch:'full', redirectTo: 'home' }

];

export const APP_ROUTING = RouterModule.forRoot( NAV_ROUTES);
/* Note:
  * add tag <router-outlet></router-outlet> in file component (~.component.html)
  * Need import and imports `app_routing`  in file module (~.module.ts) or ignore this message. */
