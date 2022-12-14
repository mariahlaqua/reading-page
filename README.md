# Personal Reading Page

![A preview gif of the end UI.](https://github.com/mariahlaqua/reading-page/blob/main/public/images/search2.gif)

A simple template to receive book recommendations from users, and to share what you are currently reading and have read in the past. This template uses Google Books to search and MongoDb with Mongoose to store information.

Currently, the search is functional and up to ten results display. Users can click on "recommend this book" after searching, and send the book to the page owner's database. This action is verified with google recaptcha v3. The page owner may also use this function to create the currently reading and recently read sections. Simply use recommend this book, then head to MongoDb in the browser. Within the database collection, find the respective document for the book you wish to modify. Update the corresponding boolean values to reflect your reading.

### Technologies Used

Integrations: [Google Books API](https://developers.google.com/books), [Google ReCaptcha V3](https://developers.google.com/recaptcha/docs/v3)

Front-end: HTML, Pixelarity CSS, EJS templating. Please note that the Pixelarity CSS was purchased and has been modified from the original.

Back-End: Node.js for local server, Express, MongoDb with Mongoose for database.

### Further Optimizations

~~captcha after clicking a recommendation~~
- ~~eliminate redundant captcha code between server.js, controllers/home.js, & search.ejs~~
- a thank you message for successful recommendations
- write test cases / check for image issues when image is not available through Google Books
- integrate database document manipulation through CLI

Google Books does have a mature property for books, another option to prevent abuse would be to filter these out of results.

### How to Install and Run Locally

You need to have Node installed on your computer. Either download the repo code directly to your computer, or fork the repo. After forking, clone the repo locally. Open in your favorite editor. You will also need a MongoDB atlas account, and to setup user access to read/write on your database. You will also need to sign up for google ReCaptcha, and whitelist the home IP address.

Open the terminal in your editor and navigate to the root folder of the project. Initialize node and install dependencies in the terminal with the following command:

```$ npm install```

Create a .env file, in this file, assign the following variables:

MongoDb URI string
```DB_STRING = yourMongoDbStringWithUsernameAndPassword```

Assign your Google ReCaptcha v3 Secret key:
```RECAPTCHA_SECRET = 'your secret key here'```

Assign a local host port of your choice:
```PORT = 2022```

If you have forked the repo and plan to push changes to gitHub, create a .gitignore file. Inside the gitignore file, add the following:

```.env```
```node_modules/```

This will prevent your secrets from being exposed on github.

Finally, open the search.ejs file. Find the hidden input field that takes the captcha token. Assign the non-secret site key from your google ReCaptcha admin console.:

```  
                    <input
                        type="hidden" 
                        class="g-recaptcha"
                        data-sitekey="your non-secret site key"
                        data-callback='onRecaptchaSubmit'
                        data-action="onSubmit"
                        value=""
                        id="g-captcha-response"
                    />
```



In order for your page to show what you are reading, you will need to enter some books into your currently reading and past reading section. This must be done via MongoDB and manually editing the appropriate boolean values.

