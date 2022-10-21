# Personal Reading Page

This project is not complete. A simple template to receive book recommendations from users, and to share what you are currently reading and have read in the past. This template uses Google Books to search and MongoDb with Mongoose to store information.

Currently the search is functional but results do not display. Additionally, authorization needs to be implemented.

### Technologies Used

Search engine: Google Books API

Front-end: HTML, Pixelarity CSS, EJS templating.
Back-End: Node.js for local server, MongoDb with Mongoose
Authorization: Currently not implemented.

### How to Install and Run Locally

You need to have Node installed on your computer. Either download the repo code directly to your computer, or fork the repo. After forking, clone the repo locally. Open in your favorite editor.

Create a .env file, in this file, assign your mongoDb URI to the variable DB_String:

```DB_STRING = yourMongoDbStringWithUsernameAndPassword```

If you have forked the repo and plan to push changes to gitHub, create a .gitignore file. Inside the gitignore file, add the following:

```.env```
```node_modules```

This will prevent your secrets from being exposed on github.

Open the terminal in your editor and navigate to the root folder of the project. Initialize node and install dependencies in the terminal with the following command:

```$ npm install```

In order for your page to show what you are reading, you will need to enter some books into your currently reading and past reading section. This feature is a work in progress, currently a form exists on the index.ejs but it is not connected to the database.

