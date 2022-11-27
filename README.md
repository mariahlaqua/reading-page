# Personal Reading Page

![A preview gif of the end UI.](https://github.com/mariahlaqua/reading-page/blob/main/public/images/search.gif)

This project is not complete. A simple template to receive book recommendations from users, and to share what you are currently reading and have read in the past. This template uses Google Books to search and MongoDb with Mongoose to store information.

Currently, the search is functional and up to ten results display. Users can click on "recommend this book" after searching, and send the book to the page owner's database. The page owner may also use this function, and update the book within their database collection, in order to render the currently reading and recently read sections.

### Technologies Used

Search engine: Google Books API

Front-end: HTML, Pixelarity CSS, EJS templating. Please note that the Pixelarity CSS was purchased and has been modified from the original.
Back-End: Node.js for local server, Express, MongoDb with Mongoose for database.

### Further Optimizations

The next update will render the information that is already stored in the database (e.g. recently read, currently reading, and recommended books). In general some of the ejs templates need to be cleaned up, and older code removed.

Once rendering is fully functional, known edge cases which cause errors will be removed. Finally, it would be nice to create some tests.

### How to Install and Run Locally

You need to have Node installed on your computer. Either download the repo code directly to your computer, or fork the repo. After forking, clone the repo locally. Open in your favorite editor.

Create a .env file, in this file, assign your mongoDb URI to the variable DB_String:

```DB_STRING = yourMongoDbStringWithUsernameAndPassword```

If you have forked the repo and plan to push changes to gitHub, create a .gitignore file. Inside the gitignore file, add the following:

```.env```
```node_modules/```

This will prevent your secrets from being exposed on github.

Open the terminal in your editor and navigate to the root folder of the project. Initialize node and install dependencies in the terminal with the following command:

```$ npm install```

In order for your page to show what you are reading, you will need to enter some books into your currently reading and past reading section. This is currently not rendering, and doing so requires manually updating the respective booleans in the database.

