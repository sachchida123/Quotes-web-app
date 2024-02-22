const mongoose=require('mongoose')
let QuoteSchema=new mongoose.Schema({
    author:{
        type:String,
        require:true,
        trim:true
    },
    text:{
        type:String,
        require:true,
        trim:true
    }
})
let Quotes=mongoose.model('Quotes',QuoteSchema);
module.exports=Quotes