import React, { useRef } from 'react'
import styles from './NewQuote.module.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const NewQuotes = () => {
    let navigate=useNavigate();
    let usernameInputRef=useRef()
    let quoteInputRef=useRef();
    const addQuoteHandler=async(e)=>{
        e.preventDefault()
      //  console.log(usernameInputRef.current.value)
       // console.log(quoteInputRef.current.value)
       const author=usernameInputRef.current.value;
       const text=quoteInputRef.current.value;
       try{
        let res=await axios.post('http://localhost:8080/addquotes',{author,text})
        //console.log(res)
        navigate('/')
       }
       catch(e){
        console.log("quote add nahi hua")
       }
    }
    
  return (
    <form onSubmit={addQuoteHandler} className={styles['new-quote-form']}>
        <div>
        <label htmlFor='author'>Author:</label>
        <input type='text' id='author'ref={usernameInputRef} placeholder='Authors name' />
        </div>
        <div>
        <label htmlFor='quote'>Quote:</label>
        <textarea name="" id='quote'cols={15} rows={4}ref={quoteInputRef} placeholder='Authors Quote'></textarea>
</div>
<button>Add Quote</button>
    </form>
  )
}

export default NewQuotes