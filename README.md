# App Redesign Concept of De Lijn
#### Project on behalf of faculty "Crossmediaproductie"

Introduction ...

### Assumptions
* You work on a Mac
* Some basic command line knowledge

### Requirements
* You need to have [Node](https://nodejs.org) installed
* Homebrew ([https://brew.sh/](https://brew.sh/)) to install MongoDB
* NPM package nodemon is (globally) installed

## Node
To check if you have Node installed, open up your command line and run the following code: `$ node -v`

## Installing MongoDB - noSQL database
MongoDB stores data in flexible JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time.

Go to https://www.mongodb.com/ > Download > Community Server > OSX
#### Install MongoDB Community Edition with Homebrew
* In a system shell, issue the following command: `$ brew update`
* Install the MongoDB binaries: `$ brew install mongodb`
* To run MongoDB, run the mongod process at the system prompt: `$ mongod`
* Manage easily your MongoDB with Robo 3T (formerly [Robomongo](https://robomongo.org/))

## Installing Postman - Client to test node API
Postman is the most complete toolchain for API development.

#### Install Postman
Go to [https://www.getpostman.com/postman](https://www.getpostman.com/postman) and download the Mac Client.


## Getting started
Start by creating a folder for this project. Feel free to call it anything you want, e.g. "delijn":

* `$ cd Sites`
* `$ mkdir delijn`

Clone repository from GitHub: https://github.com/virginieheylen/delijn/tree/development

#### Installing Node.js packages with NPM
Once you navigate into it, run the npm install command.

* `$ cd Sites/delijn`
* `$ npm install`

#### Running the app
In a system shell, issue the following command: `$ mongod`.
Open a new tab, go to your project folder and issue the following command:

* `$ node server.js` or `$ nodemon server.js`
* `$ npm start` or `$ npm run dev`

When developing, we will use `$ npm run dev`. Nodemon restarts the server automatically whenever we save a file that the server uses.



...
