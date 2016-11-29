import { ModuleWithProviders }  from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { NothingComponent } from './nothing.component';
import { CloudpeopleComponent } from './cloudpeople.component';
import { TweetsComponent } from './tweets.component';
import { FollowersComponent } from './followers.component';


// Route Configuration
export const routes: Routes = [
  {
    path: '', redirectTo: '/nothing',
    pathMatch: 'full'
  },
  { path: 'nothing', component: NothingComponent },
  { path: 'cloudpeople', component: CloudpeopleComponent },
  { path: 'tweets/:user', component: TweetsComponent },
  { path: 'followers/:user', component: FollowersComponent },
];

// - Updated Export
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

