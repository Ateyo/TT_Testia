

# Fortil

This project was generated with [Nx](https://nx.dev) using a Fortil template for a technical test for Testia.

Made by Tom Gonzalez

## A few commands

Run `start:frontend` to start the web project

Run `start:desktop` to start the electron desktop project

Run `build:frontend` to build the technical-test app in production mode

Run `build:desktop` to build the technical-test-desktop app in production mode

Run `package:desktop` to package files to .exe


## Component structure

each component is split in a container component `component-name-page.component` where call to services for api will be done

and children components where we'll add everything for our component to be working like form validations etc...

our `component-name-page.component` will call our shared service (to seperate api calls from the component)
and be able to get and post from everywhere in the app


## Nx workspace
[Nx workspace](https://nx.dev/getting-started/intro) is used so we can easily build and scale our monorepo app (like here having a web and desktop app)

## Material design
this app uses [material angular](https://material.angular.io/) and every child module is imported in `shared.module` so we can easily import it everywhere when needed

## Angular/flexLayout
this app also uses [angular/flexLayout](https://github.com/angular/flex-layout) for ease of positionning elements

[doc is here](https://tburleson-layouts-demos.firebaseapp.com/#/docs)


