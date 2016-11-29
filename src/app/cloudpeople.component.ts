// ====== ./nothing.component.ts ======

// Import component decorator
import { Component } from '@angular/core';

import { LoopBackConfig } from './shared/sdk/index';
import { Person, LoopBackFilter } from './shared/sdk/models';
import { PersonApi } from './shared/sdk/services';


@Component({
    templateUrl: 'cloudpeople.component.html',
    styleUrls: [ 'cloudpeople.component.css' ]
})

// Component class
export class CloudpeopleComponent { 
private people: Person[];


constructor( private personApi: PersonApi ) {
    LoopBackConfig.setBaseURL('https://allfaves-cloudant.herokuapp.com');
    LoopBackConfig.setApiVersion('api');
 }

 ngOnInit() {
  // get all records
  var filter: LoopBackFilter = '';

  this.personApi.find(filter).subscribe((people: Person[]) => this.people = people);
 }

}
