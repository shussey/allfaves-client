// ====== ./app/app.module.ts ======
// Imports
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

// Declarations

// Navigation component and routes
import { AppComponent }       from './app.component';
import { routing } from './app.routes';

// Main pages
import { NothingComponent } from './nothing.component';
import { TweetsComponent } from './tweets.component';
import { FollowersNASAComponent } from './followersNASA.component';

// Services that call out to my server service
import { TwitterService } from './twitter.service';
import { TwitterDatePipe, TwitterDateWithTimePipe } from './twitter-dates.pipe';



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
    TweetsComponent,
    TwitterDatePipe, 
    TwitterDateWithTimePipe 
    ],  
    providers: [ 
    TwitterService 
    ],
  bootstrap: [ AppComponent ]

})

export class AppModule { }