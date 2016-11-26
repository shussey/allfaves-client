import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FollowersNASAComponent } from './followersNASA.component';
import { TweetsNASAComponent } from './tweetsNASA.component';
import { TweetsLADYGAGAComponent } from './tweetsLADYGAGA.component';
import { NothingComponent } from './nothing.component';
// Route Configuration
export const routes: Routes = [
  {
    path: '', redirectTo: '/nothing',
    pathMatch: 'full'
  },
  { path: 'nothing', component: NothingComponent },
  { path: 'followersNASA', component: FollowersNASAComponent },
  { path: 'tweetsNASA', component: TweetsNASAComponent },
  { path: 'tweetsLADYGAGA', component: TweetsLADYGAGAComponent },
];

// - Updated Export
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

