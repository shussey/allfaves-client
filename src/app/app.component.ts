import { Component } from '@angular/core';

import { TwitterService } from './twitter.service';
import { FollowersNASAComponent } from './followersNASA.component';
import { TweetsNASAComponent } from './tweetsNASA.component';
import { TweetsLADYGAGAComponent } from './tweetsLADYGAGA.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [ 
    TwitterService 
    ]
})


export class AppComponent {
  title = 'Twitter';
}