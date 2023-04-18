# SimpleAngularForm

## Project Objective

The goal of this project is to submit form and log its data in console using Angular

## Project Components

Our project consists of a form, a _submit_ button and a _reset_ button to clear form

## Technologies used

- Angular
- Bootstrap

## Development environment

- Nodejs v16.15.1
- npm v8.11.0
- Angular CLI v15.2.6
- IDE: VS Code

## Procedures

1. Create an Angular project called _simple-angular-form_ using the following command: ng new simple-angular-form
2. Download and install [bootstrap](https://getbootstrap.com/docs/5.3/getting-started/download/) using npm
3. Add the following path _"node_modules/bootstrap/dist/css/bootstrap.min.css"_ to _"styles"_ array in _angular.json_
4. Create a component called _add-form_ using the following command: ng g c add-form
5. Add form to template _add-form.component.html_
6. Import _FormBuilder_ by adding _import { FormBuilder } from '@angular/forms';_ to _add-form.component.ts_
7. Inject _FormBuilder_ into _add-form_ component class by adding _constructor(private formBuilder: FormBuilder) { }_
8. Use the _group_ method to build the FormModel as shown in _add-form.component.ts_
9. Edit _app.component.html_ by adding `<app-add-form></app-add-form>`
10. Import _ReactiveFormsModule_ by adding _import { ReactiveFormsModule } from '@angular/forms';_ to _app.module.ts_
11. Add _ReactiveFormsModule_ to imports array in _app.module.ts_
12. Import _AddFormComponent_ by adding _import { AddFormComponent } from './add-form/add-form.component';_ to _app.module.ts_
13. Add _AddFormComponent_ to declarations array in _app.module.ts_
14. Build app using the following command: ng-serve-o and the output should appear as follows:

![Simple angular form](https://user-images.githubusercontent.com/41340307/232776859-77ce2f81-0c48-4a09-89e8-509e59509be9.PNG)

![Simple angular form 2](https://user-images.githubusercontent.com/41340307/232776865-25398f9a-f4b6-4a41-b6da-e50bc65384c5.PNG)
