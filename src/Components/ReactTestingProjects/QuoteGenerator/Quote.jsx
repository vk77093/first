import { useEffect, useState } from "react";
import "./quotesStyle.css";
function GetRandomQuotes(quotes){
    return quotes[Math.floor(Math.random() * quotes.length)];
}
export default function Quote(){
    const[quotesArray,SetQuotesArray]=useState([]);
    const[singleQuote,SetSingleQuote]=useState(null);

    useEffect(()=>{
        fetch("https://type.fit/api/quotes")
        .then((res)=>res.json())
        .then((jsondata)=>{
            SetQuotesArray(jsondata);
            SetSingleQuote(jsondata[0]);
        })
    },[]);
    function getNewQuote(){
        SetSingleQuote(GetRandomQuotes(quotesArray));
    }
    return(
        <div className="container-quote">

        
        <main className="quote">
            <h1 className="quote">Quote Generator</h1>
            <section className="quote">
                <button onClick={getNewQuote}>New Quote</button>
            
            <h3 >
                <span>``</span>
                {singleQuote?.text}
            </h3>
            <i>-- {singleQuote ?.author}</i>
            </section>
        </main>
        </div>
    )
    // return (
    //     <main>
    //       <h1>Project 3: Quote Generator</h1>
    //       <section>
    //         <button onClick={getNewQuote}>New Quote</button>
    //         <h3>
    //           <span>“</span>
    //           {quote?.text}
    //         </h3>
    //         <i>- {quote?.author}</i>
    //       </section>
    //     </main>
    //   );
    
}