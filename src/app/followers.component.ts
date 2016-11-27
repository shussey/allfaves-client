import { Component, OnInit } from '@angular/core';

// This module will be called with a parameter on the URL. This needs to be retrieved from the router
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

// User structure
import { User } from './user';
// Twitter retrieval services
import { TwitterService } from './twitter.service';
import { TwitterDatePipe } from './twitter-dates.pipe';

@Component({
  selector: 'followers',
  templateUrl: 'followers.component.html',
  styleUrls: [ 'followers.component.css' ]
})

export class FollowersComponent implements OnInit {
  errorMessage: string;
  users: User[];
  mode = 'Observable';

  constructor(  private route: ActivatedRoute,
                private router: Router,
                private _TwitterService: TwitterService
                ) { }

  ngOnInit() {
    // get the twitter user from the route parameter 'user'
    //  let user = +this.route.snapshot.params['user'];

    this.route.params
      .switchMap((params: Params) => this._TwitterService.getFollowers(params['user']))
      .subscribe(
        users => this.users = users,
        error =>  this.errorMessage = <any>error);
    }
}
