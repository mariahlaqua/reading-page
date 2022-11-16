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
        console.log(req.body.query)
        res.render('search.ejs', {books: books})
    }
}