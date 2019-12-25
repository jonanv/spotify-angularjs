<p align="center">
    <img src="https://i.imgur.com/bF1WkFW.png" width="300">
</p>

[![NPM Version][npm-badge]][npm-url]
[![Node JS][node-badge]][node-url]
[![Angular JS][angular-badge]][angular-url]
[![License][license-badge]][license-url]

# Site

# Install dependences
in ```spotify-angularjs/```

```bash
npm install
```
or
```bash
yarn install
```

***

# SpotifyAngularjs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

***

# Create project
```javascript
ng new NameProject
```

# Start project with browser
```javascript
ng serve -o
```

# Create component without spec.ts
```javascript
ng g c components/shared/navbar --spec=false
```
or

```javascript
ng generate component components/shared/navbar --spec=false
```

# Create component without spec.ts and .css
```javascript
ng g c components/heroes --spec=false -is
```
or

```javascript
ng generate component components/heroes --spec=false -is
```

# Create service without spec.ts
```javascript
ng g s services/heroes --spec=false
```
or
```javascript
ng generate service services/heroes --spec=false
```

# Create project build to production
```javascript
ng build --prod
```

# Server local
install global ```sudo npm i -g http-server```

deploy in ```/spotify-angularjs/dist/spotify-angularjs/```

```javascript
http-server
```
or
```javascript
http-server -o
```

[npm-badge]: https://img.shields.io/badge/npm-v6.9.0-brightgreen.svg
[npm-url]: https://www.npmjs.com
[node-badge]: https://img.shields.io/badge/nodejs-v10.16.3-brightgreen
[node-url]: https://nodejs.org/download/release/v10.16.3/
[angular-badge]: https://img.shields.io/badge/angularjs-v8.3.12-brightgreen
[angular-url]: https://angular.io/cli/
[license-badge]: https://img.shields.io/badge/license-MIT-green.svg
[license-url]: https://opensource.org/licenses/MIT
