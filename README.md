# The exercise

You are required to write an application using JavaScript, that will render a Scatter Plot to display all model data. The data has been provided as a CSV file, that should be served via an endpoint., the preferred method of delivery would be done using NodeJS, however if you would like to use another language for this part, then that would be acceptable. The preferred method to render the front-end would be delivered using ReactJS.


## Requirements
-	Deliver an endpoint that will provide the Scatter Plot data in JSON format
-	Render a page that will display a Scatter Plot, with all the points that are provided in the CSV file
-	You can use a third-party component of your choice to draw the Scatter Plot
-	Demonstrate a way to manage state in the ReactJS application
-	Provide some tests


## Bonus Points
-	Include some build steps to compile the application into a directory
-	Optimise the API request by using caching, etc…
-	Use some mechanism to show code quality and standards analysis output


# The solution
This is not the way I would write code for this kind of small application. However the structure is intended to show how I would work in a large scale app (more or less).

## Pre-requisites

- Install a recent (lts) version of [Node.js and Node package manager (npm)](http://nodejs.org) via your preferred method.
Lts is v6.10.0 at the time of writing this readme.

## Setup

### For nvm you can use the the bundled .nvmrc

After entering the directory, type the following, if you don't have the lts version of node:

    nvm install

Othervise type this, to use the lts version

    nvm use
    

### In the project directory, launch to install dependencies:
    npm install
   
   
## Build the application's client side:
    npm run build

## Run the application
    npm start

## Run tests
    npm test

