# App Redesign Concept of De Lijn 
#### on behalf of faculty "Crossmediaproductie"

Introduction ...

### Assumptions
* You work on a Mac
* Some basic command line knowledge

### Requirements
* Homebrew ([https://brew.sh/](https://brew.sh/))
* MongoDB ([https://www.mongodb.com/](https://www.mongodb.com/))
* NPM package nodemon is installed
* ...


## Installing MongoDB - noSQL database
MongoDB stores data in flexible JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time.

Go to https://www.mongodb.com/ > Download > Community Server > OSX
####Install MongoDB Community Edition with Homebrew
* In a system shell, issue the following command: `$ brew update`
* Install the MongoDB binaries: `$ brew install mongodb`
* To run MongoDB, run the mongod process at the system prompt: `$ mongod`
* Manage easily your MongoDB with Robo 3T (formerly [Robomongo](https://robomongo.org/)) 

## Installing Postman - Client to test node API
Postman is the most complete toolchain for API development.

####Install Postman
Go to [https://www.getpostman.com/postman](https://www.getpostman.com/postman) and download the Mac Client.


## Setup project
In a system shell, go to your projects folder and create a new project:

* `$ cd Sites`
* `$ mkdir delijn`

Clone repository from GitHub: https://github.com/virginieheylen/delijn/tree/development

#### Installing Node.js packages with NPM
In a system shell, go to your project and ...

* `$ cd Sites/delijn`
* `$ npm install`

#### Running the app
In a system shell, issue the following command: `$ mongod`.
Open a new tab, go to your project folder and issue the following command: `$ nodemon server.js`

...
