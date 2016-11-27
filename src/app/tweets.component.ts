import { Component, OnInit } from '@angular/core';

// This module will be called with a parameter on the URL. This needs to be retrieved from the router
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

// Tweet structure
import { Tweet } from './tweet';
// Twitter retrieval services
import { TwitterService } from './twitter.service';
import { TwitterDateWithTimePipe } from './twitter-dates.pipe';

@Component({
  selector: 'tweets',
  templateUrl: 'tweets.component.html',
  styleUrls: ['tweets.component.css']
})

export class TweetsComponent implements OnInit {
  errorMessage: string;
  tweets: Tweet[];
  mode = 'Observable';

  constructor(  private route: ActivatedRoute,
                private router: Router,
                private _TwitterService: TwitterService
                ) { }

  ngOnInit() {
    // get the twitter user from the route parameter 'user'
    let user = +this.route.snapshot.params['user'];

    this.route.params
      // (+) converts string 'id' to a number
      .switchMap((params: Params) => this._TwitterService.getTweets(params['user']))
      .subscribe(
         tweets => this.tweets = tweets,
         error =>  this.errorMessage = <any>error);
  }
}
