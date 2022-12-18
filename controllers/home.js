const { TopologyDescription } = require('mongodb')
const Book = require('../models/book')
const ReCAPTCHA = require('google-recaptcha')

const recaptcha = new ReCAPTCHA({
    secret: RECAPTCHA_SECRET,
})

module.exports = {
    getIndex: async (req,res)=>{
        try{
            const recentlyRead = await Book.find({recentlyRead:true})
            const recommended = await Book.find({recommended: true})
            const currentlyReading = await Book.find({currentlyReading: true})
            res.render('index.ejs', {recentlyRead, recommended, currentlyReading})
            // console.log(recentlyRead)
        }catch(err){
            console.log(err)
        }
        
    },
    postIndex: async (req,res)=>{
        const recentlyRead = await Book.find({recentlyRead:true})
        const recommended = await Book.find({recommended: true})
        const currentlyReading = await Book.find({currentlyReading: true})
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${req.body.query}`, {
            headers: {'Content-type': 'application/JSON'},
        })
        data = await response.json()
        const books = data
        //console.log(req.body.query) uncomment if you need to see what is happening
        res.render('search.ejs', {books: books, recentlyRead, recommended, currentlyReading})
    },
    // creating a new item in the collection, of the user's book recommendation. Mongoose does the date for us.
    addBook: async (req,res)=>{
        try {
            const response = await recaptcha.verify({
                response: req.body["g-recaptcha-response"],
                remoteip: req.connection.remoteAddress,
            });
            if (response.error){
                res.send('Please try again.');
            }else{
               
                try{
                    await Book.create({
                        title: req.body.title,
                        author: req.body.author,
                        currentlyReading: false,
                        recommended: true,
                        recentlyRead: false,
                        url: req.body.url,
                        image: req.body.image
                    })
                    //console.log("The Captcha Worked!") uncomment if you are having issues with reCaptcha
                    //console.log(req.body) uncomment to see the request body received by express parsed as JSON
                    res.redirect('/')
                }catch(err){
                    console.log(err)
                }
            }
        }catch(error){
    res.send('An error occurred.')
    }
    }}