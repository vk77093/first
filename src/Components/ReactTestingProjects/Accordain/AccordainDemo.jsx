import { useState } from "react";
import "./accStyle.css";
const questions = [
    {
      id: 1,
      title: "Is this a good product?",
      info:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    },
    {
      id: 2,
      title: "How much does it cost?",
      info:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    },
    {
      id: 3,
      title: "When can I get it?",
      info:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    }
  ];
  export default function AccordainDemo(){
return(
    <>
    <h2>FAQ sections Demo</h2>
    <div className="containerAccor">
        <h2>Frequently Asked Questions</h2>
        <div className="questions">
{questions.map((ques,id)=>(
    <QuestionComp key={id} questionsData={ques} />
))}
        </div>
    </div>
    </>
)
  }
  
  export function QuestionComp({questionsData}){
const[isOpen,setIsOpen]=useState(false);

return(
    <section>
        <div className={isOpen ? 'open' :'closed'}>
        <h4>{questionsData.title}</h4>
        <button onClick={()=>setIsOpen(!isOpen)}>{isOpen ? '-' :'+'}</button>
        </div>
        {isOpen && <p>{questionsData.info}</p>}
        
    </section>
)
  }