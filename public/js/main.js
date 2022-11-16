
/*
const searchClick = document.getElementById('search')



searchClick.addEventListener('click', bookSearch)
// this needs to be updated so that searching responds by triggering the function, then rendering in the ejs file.
async function bookSearch(url, data={}){
    const searchQuery = document.getElementById('apiQuery').value
    console.log(searchQuery)
    try{
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`, {
            headers: {'Content-type': 'application/JSON'},
        })
        data = await response.json()
        const books = data
        console.log(data)
        console.log(response)
        response.redirect('../views/search.ejs', {books: books})
    }catch(err){
        console.log(err)
    }

}
*/