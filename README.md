# Flashcards
### Steven Galvin, Kat Gifford, jin camou, & Sowmya Dinavahi June 19th, 2017
[![Travis](https://img.shields.io/travis/rust-lang/rust.svg?style=plastic)](https://github.com/steven-galvin/flashcards)

This web app was made primarily with Angular 4 and the Angular CLI, Typescript, and the Firebase Database. It's purpose is to show off our knowledge of the Javascript course from Epicodus and our efficiency with the above. Flashcards is a simple app designed to give the user the ability to see a list of subjects as well as view their specific flashcards on a dynamic page. The user can view the technical term or question and click the card to show the definition or answer. It is a great study tool for not only Epicodus students, but any aspiring software developer. Early versions of the app will focus on foundational software development terms and concepts, Ruby on Rails, Singular, Angular 4, and Javascript. Future versions will add flashcards for other languages and frameworks like PHP, C#, and React.  

You can view the live site here {link coming soon}

## Landing Page:
![](./src/assets/images/temp.png "Flashcards")

## Planning

### 1. Configuration/dependencies
  The app will primarily use Angular 4, the AngularCLI, Firebase database, and Typescript. It was made with what we learned from Epicodus' Javascript course.
  <!-- Stretch goals include:
    * Using Sass to style the page better.
    * Hosting the site live -->

### 2. User Stories
  * As a user, I'd like to visit a page to see a list of all subjects.
  * As a user, I'd like to click a subject and see a list of flashcards associated with that subject.
  * As a user, I'd like the option to visit an "About" page that explains what the app is, and what it does.
  * As a user, I'd like all data persisted in a database, so it's always there when I need it.
  * As a user, I'd like to filter the list of flashcards depending on a theme (i.e. specifically words and definition v.s. questions and concepts)
  * As an administrator, I want to add new subjects and flashcards.
  * As an administrator, I want to edit subjects and flashcards, in case I make a mistake, or need to update their details.
  * As an administrator, I need the option to delete subjects and flashcards, in case it becomes deprecated or unnecessary.

### 3. Integration
  * Root component/Index page
  * Contact page
  * About page
  * List subjects page
  * Dynamic subjects pages
  * Admin page with CRUD functionality for flashcards

### 4. UX/UI
  * Bootstrap
  * Animations for better user experience
  * Flex Box
  * Parallax
  * Sass

### 5. Polish
  * Refactor code.
  * Delete unused code.
  * Make README awesome.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Typescript](https://www.typescriptlang.org/)
* [Angular 4](https://angularjs.org/)

## Installation

As of writing this README, these instructions work on MacOS.

* Run `$ git clone <this-repository-url>`
* Then `$ cd flashcards`
* Once in the flashcards folder, run `$ npm install`, `$bower init`(just press enter through the prompts), `$ bower install bootstrap --save`, and `$ bower install`
* You will need to remake the api-keys.ts file. Login to firebase and create your own project here https://firebase.google.com/
  * Once logged in, click on 'Go To Console'.
  * Then click 'Add project', give it a name, and select your region.
  * Next, click 'Add Firebase to your web app'.
  * Grab this block of code:
```
var config = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    projectId: "xxxx",
    storageBucket: "",
    messagingSenderId: "xxxx"
  };
```
  * Create an `api-keys.ts` file inside the app directory and copy the block of code into it.
  * Replace `var config` with `export var masterFirebaseConfig`
  * To finish setting firebase up, go to firebase and and go into the database tab.
    * Click on the button made of three dots.
    * Select the Import JSON option.
    * Select browse, navigate to the project folder, and open the `sample-subjects.json` file.
    * Select Import and your database should be complete!

## Running / Development

Now that everything you need should be installed and setup, we can run it with angular.

* Run `$ ng serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Built With

* Angular4
* AngularCLI
* Firebase
* Typescript
* HTML
* CSS/SASS
* Bootstrap https://getbootstrap.com/
* ES6
* Jquery https://jquery.com/
* Node
* Bower

## Authors

Steven Galvin, Kat Gifford, Jin Camou, & Sowmya Dinavahi

## License

MIT License

Copyright (c) Steven Galvin, Kat Gifford, jin camou, & Sowmya Dinavahi, 2017

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
