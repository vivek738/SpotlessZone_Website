import React, {useState} from 'react';
import './MyTrainingfaq';
import './MyTrainingfaq.css';

const MyTrainingfaq = ({question, answer})=>{
    const[show, setShow] = useState(false);

        return(
            <div className='faq'>
                <div className='main-heading d-flex justify-content-start align-items-center'>
                    <p className='emoticon mt-2 me-2 fw-bold fs-5' onClick={()=> setShow(!show)}>{show? "_" : '+'}</p>
    
                    <h3 className=''>{question}</h3>
                </div>
                {
                    show &&
                    <p className='answer'>{answer}</p>}
                <hr/>
            </div>
        )
    }
    

export default MyTrainingfaq;


