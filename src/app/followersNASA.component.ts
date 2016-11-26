import { Component, OnInit } from '@angular/core';

import { TwitterService } from './twitter.service';
import { TwitterDatePipe } from './twitter-dates.pipe';
import { User } from './user';

@Component({
  selector: 'followers',
  templateUrl: 'followers.component.html',
  styleUrls: [ 'followers.component.css' ]
})

export class FollowersNASAComponent implements OnInit {
  errorMessage: string;
  users: User[];
  mode = 'Observable';

  constructor(private _TwitterService: TwitterService) { }

  ngOnInit() {
   this._TwitterService.getFollowersNASA()
     .subscribe(
        users => this.users = users,
        error =>  this.errorMessage = <any>error);
    }
}
