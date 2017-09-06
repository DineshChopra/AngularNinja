# Course Details
## Day 1
* Create angular cli project
`ng new spa`
* Introduction of Component
* Create component with angular-cli
`ng g c <component-name>`
* Create multiple component
* Introduction of Single page application
* Cretae single page application by using angular routing.

## Day 2
* Introduction of Data Binding
* Introduction of inbuilt directive
`*ngIf    *ngFor *ngSwitch`
* Introduction of Services

## Day 3
* Introduction of Rest Services
* Consume backend rest services and display data on frontend
* Perform CURD operation
* Build and Deployment
--------------------------
## prerequisites
* node.js
* Basic understanding of html5, css3, javascript
## Day: 1
* Introduction of angular-cli. For details  [Click Here](https://github.com/DineshChopra/AngularNinja/blob/master/cli-help.md)
* Create basic project structure with angular-cli
```
ng new angular-app
ng new angular-app --prefix=bs --style=sass
```
* Add external libraries, i.e. Bootstrap, jQuery etc.
Add bootstrap file into .angular-cli.json file
```javascript
npm install bootstrap

"styles": [
  "styles.css",
  "../node_modules/bootstrap/dist/css/bootstrap.min.css"
],
```
* `Introduction of component`
Components are the most basic building block of an UI in an Angular application. An Angular application is a tree of Angular components. Angular components are a subset of directives. Unlike directives, components always have a template and only one component can be instantiated per an element in a template.
```
ng g c <component-name>
--flat      create component in current directory, Will not create folder for component
-- it       Creates inline template
-- is       Creates inline styles
--spec false    Will not generate spec file
```
* Structural Directive `ngIf, ngFor, ngSwitch`

Structural directives are responsible for HTML layout. They shape or reshape the DOM's structure, typically by adding, removing, or manipulating elements.

`NgIf` is the simplest structural directive and the easiest to understand. It takes a boolean expression and makes an entire chunk of the DOM appear or disappear.
```
<div *ngIf="true">Content exist and displays</div>
<div *ngIf="false">Content does not exist in DOM</div>
```
For hiding element
```
<p [style.display]="'none'">Content still exist in DOM</p>
```
* Interaction between two component Input(), Output()

## Day: 2
* Services
* Dependency Injection
* Interaction between two components by using Service
* Interacting with server by using http
* Perform CRUD (Create, Read, Update, Delete) operation with rest api
* Introduction of Observables.

## Day: 3
* Introduction of Single Page Application SPA
* Router
* Lazy loading
* What is Modular approach, and how to implement it.
* Create basic project structure for big application.

## Day: 4
* Unit Testing
* Component, Service, Mocking

* Build and Deployment