import React, { useEffect, useState } from 'react'

import axios from 'axios'
import Quote from '../Quotes/Quote'

const AllQuotes = () => {
    let [quotes,setQuotes]=useState([])
    async function getQuotes(){
        let res=await axios.get('https://quotes-web-app-12.onrender.com/allquotes')
      //  console.log(res)
        setQuotes(res.data)
    }
    useEffect(()=>{
        getQuotes();

    },[]);

  return (
    <div>
        <h1>Allquotes</h1>
        <ul>
       {
            quotes.map((quote,index)=>{
                return <Quote
                key={quote._id}
                author={quote.author}
                text={quote.text}
                id={quote._id}
                />
            })
        }

        </ul>
    </div>
  )
}

export default AllQuotes