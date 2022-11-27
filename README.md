# Personal Reading Page

![A preview gif of the end UI.](https://github.com/mariahlaqua/reading-page/blob/main/public/images/search.gif)

This project is not complete. A simple template to receive book recommendations from users, and to share what you are currently reading and have read in the past. This template uses Google Books to search and MongoDb with Mongoose to store information.

Currently, the search is functional and up to ten results display. Users can click on "recommend this book" after searching, and send the book to the page owner's database. The page owner may also use this function to create the currently reading and recently read sections. Simply use recommend this book, then within the database collection find the respective item. Update the corresponding boolean values to reflect your reading.

### Technologies Used

Search engine: Google Books API

Front-end: HTML, Pixelarity CSS, EJS templating. Please note that the Pixelarity CSS was purchased and has been modified from the original.
Back-End: Node.js for local server, Express, MongoDb with Mongoose for database.

### Further Optimizations

There are known edge cases which cause errors. For example, if a user wanted to recommend a book without an image available via google books, the page will crash. The first priority is to fix these. After that is complete, it would be nice to implement the following:
- captcha after clicking a recommendation
- a thank you message for successful recommendations
- write test cases

Google Books does have a mature property for books, another option to prevent abuse would be to filter these out of results.

### How to Install and Run Locally

You need to have Node installed on your computer. Either download the repo code directly to your computer, or fork the repo. After forking, clone the repo locally. Open in your favorite editor. You will also need a MongoDB atlas account, and to setup user access to read/write on your database.

Create a .env file, in this file, assign your mongoDb URI to the variable DB_String:

```DB_STRING = yourMongoDbStringWithUsernameAndPassword```

If you have forked the repo and plan to push changes to gitHub, create a .gitignore file. Inside the gitignore file, add the following:

```.env```
```node_modules/```

This will prevent your secrets from being exposed on github.

Open the terminal in your editor and navigate to the root folder of the project. Initialize node and install dependencies in the terminal with the following command:

```$ npm install```

In order for your page to show what you are reading, you will need to enter some books into your currently reading and past reading section. This must be done via MongoDB and manually entering the appropriate boolean values.

