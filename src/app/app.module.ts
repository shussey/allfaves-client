// ====== ./app/app.module.ts ======
// Imports
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

// Declarations
import { AppComponent }       from './app.component';

import { NothingComponent } from './nothing.component';
import { FollowersNASAComponent } from './followersNASA.component';
import { TweetsNASAComponent } from './tweetsNASA.component';
import { TweetsLADYGAGAComponent } from './tweetsLADYGAGA.component';

import { TwitterService } from './twitter.service';
import { TwitterDatePipe, TwitterDateWithTimePipe } from './twitter-dates.pipe';

import { routing } from './app.routes';

// Decorator
@NgModule({
    imports: [ 
     BrowserModule,
     FormsModule,
     HttpModule,
     JsonpModule,
     routing
    ],
  declarations: [ 
    AppComponent,
    NothingComponent,
    FollowersNASAComponent,
    TweetsNASAComponent,
    TweetsLADYGAGAComponent,
    TwitterDatePipe, 
    TwitterDateWithTimePipe 
    ],  
    providers: [ 
    TwitterService 
    ],
  bootstrap: [ AppComponent ]

})

export class AppModule { }