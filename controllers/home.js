const { TopologyDescription } = require('mongodb')
const Book = require('../models/book')

module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')
    },
    postIndex: async (req,res)=>{
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${req.body.query}`, {
            headers: {'Content-type': 'application/JSON'},
        })
        data = await response.json()
        const books = data
        //console.log(req.body.query)
        res.render('search.ejs', {books: books})
    },
    addBook: async (req,res)=>{
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
            console.log(req.body)
            res.render('search.ejs')
        }catch(err){
            console.log(err)
        }
    }
}