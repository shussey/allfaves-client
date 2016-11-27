import { ModuleWithProviders }  from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { NothingComponent } from './nothing.component';
import { TweetsComponent } from './tweets.component';
import { FollowersNASAComponent } from './followersNASA.component';


// Route Configuration
export const routes: Routes = [
  {
    path: '', redirectTo: '/nothing',
    pathMatch: 'full'
  },
  { path: 'nothing', component: NothingComponent },
  { path: 'tweets/:user', component: TweetsComponent },
  { path: 'followersNASA', component: FollowersNASAComponent },
];

// - Updated Export
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

