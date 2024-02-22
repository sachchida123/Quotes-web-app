const mongoose=require('mongoose')
const Quotes=require('./models/Quote')

let dummyQuotes=[
    {
        author:"sachchida",
        text:"I love you"
    },
    {
        author:"sonu",
        text:"My name is khan"
    },
    {
        author:"love",
        text:"I like you"
    },
    {
        author:"sandeep",
        text:"Honesty is the best policy"
    },
    {
        author:"mithun",
        text:"I am hero"
    },
]
async function seedDB(){
    await Quotes.deleteMany({})
     await Quotes.insertMany(dummyQuotes)
     console.log("db seeded")
}
module.exports=seedDB