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
import { CloudpeopleComponent } from './cloudpeople.component';
import { TweetsComponent } from './tweets.component';
import { FollowersComponent } from './followers.component';

// Services that call out to my server service
import { TwitterService } from './twitter.service';
import { TwitterDatePipe, TwitterDateWithTimePipe } from './twitter-dates.pipe';

// Feature Modules
import { SDKModule } from './shared/sdk/index';


// Decorator
@NgModule({
    imports: [ 
     BrowserModule,
     FormsModule,
     HttpModule,
     JsonpModule,
     routing,
     SDKModule.forRoot()
    ],
  declarations: [ 
    AppComponent,
    NothingComponent,
    CloudpeopleComponent,
    FollowersComponent,
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