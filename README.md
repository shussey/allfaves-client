# AllfavesClient

This is my client playground. Try it out on Heroku here. https://allfaves-client.herokuapp.com

It doesnt do a lot but I learned a huge amount building it.

## Development and dependencies
I edit using Visual Studio Code on a Mac

Obviously I use github for source management.

I host in Heroku which took a little tweaking of the package.json to get working. I use the "Automatic Deploys" option so that every time I update the Github projects, it deploys.

It is written in angular2 and typecript.

It uses styles from getbootstrap.com to make it all look pretty

Currently it is a client to two services I wrote

### Cloudant
This part of the app is new so I have only got to listing existing records. More to follow considering how easy this was.

I am persisting the data using the free cloudant tier in Bluemix. 
I have a separate project to host the cloudant REST service built using loopback.io ( https://github.com/shussey/allfaves-cloudant )
I generated the client API in this project from that service using with a client API generated using mean expert loopback-sdk-builder ( https://github.com/mean-expert-official/loopback-sdk-builder )

### Twitter
I build a custom twitter service with parameterized URLs for retrieving tweets and followers for any user. ( https://github.com/shussey/allfaves-twitter-server )
This project has parameterized client routing but I only added menu selections for three specific people. 
It could easily be changed to allow the user to be entered to get tweets for any valid user.


## Running it
When run locally use ng serve. When hosted in Heroku it uses ng build and then http-server pointing at the dist folder.

Currently the URL to the server service is in twitter.service.ts


-------------------------------------------------
This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.19-3.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
