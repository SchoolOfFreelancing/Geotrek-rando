# GEOTREK RANDO V2
### Public portal of Geotrek (http://geotrek.fr).
========


# OVERVIEW
V2 currently under heavy development. It steel need an old geotrek rando for data fetching.


# INSTALL

clone the current repository and then :

### Install NPM
```
npm install
```

### Launch gulp distribution task
```
gulp --dist
```
It will :
* bundle all vendors js files in src/vendors.js 
* bundle all the app js files in src/rando.js
* compile sass files and bundle them in src/rando.css

# DEVELOPMENT

### Launch gulp bundling and watching task
```
gulp
```
Launch the app on localhost:3000 and watch for any change in sass or js files in src folder :
* Each time a sass file is changed, the wole css is reinjected
* Each time a js file is saved, the browser's tab is refreshed

Please note that you currently need to force CORS request in your browser in order to get data from our test server.

# CREDITS


# AUTHORS

* [Simon Bats](https://github.com/SBats)

[<img src="http://depot.makina-corpus.org/public/logo.gif">](http://www.makina-corpus.com)

# LICENCE

* OpenSource - BSD

[<img src="http://depot.makina-corpus.org/public/logo.gif">](http://www.makina-corpus.com)
