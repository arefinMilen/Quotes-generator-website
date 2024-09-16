const quotes = document.getElementById("quote")
const author = document.getElementById("author")
const url_api = "https://favqs.com/api/qotd"

async function getQuotes(url){
    const response = await fetch(url)
    var data = await response.json()
    // console.log(data)
    
    quotes.innerHTML=data.body
     author.innerHTML = data.author
}
getQuotes(url_api) 