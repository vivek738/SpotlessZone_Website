import React, { useState } from "react";
import './Accordion.css';
import { MDBContainer } from 'mdb-react-ui-kit';
import MyAccordion from "./MyAccordion";

import faq2 from "./images/faq2.jpg"
import { Link } from "react-router-dom";



const Accordion = () => {

    const questions = [
        {
            id: 1,
            question: "How can i get a quote",
            answer: 'Simply visit the signup flow to book a cleaning and aas you provide information about your house and schedule, your qupte will dynamically adjust. stands for Document Object Model.',

        },

        {
            id: 2,
            question: 'Does someone have to visit my house before i can book a cleaning?',
            answer: 'Absoultely No, we would not want pushy sales people coming to our house so we would never do that to one up.',

        },

        {
            id: 3,
            question: 'What if we are not satisfy with the cleaning?',
            answer: 'Please get in touch with us right away and we will make arrangements to rectify the situation. We have a satisfaction guarantee that we stand by.',

        },
        {
            id: 4,
            question: 'How many cleaners do you send?',
            answer: 'Only one cleaner is sent to your home. If youre on a recurring schedule we do our best to match you with the same person going forward.',
        }
    ]
    const [data, setdata] = useState(questions);
    return (
        <>
            <MDBContainer>

                <div className="main">
                    <div className="row">
                        <div className="heading col-md-4 mt-3">
                            <h4>Have a <span>Question?</span> </h4>
                            <h4>Look here</h4>
                        </div>


                        <div className="faqimg col-md-6">
                            <img src={faq2}></img>

                        </div>
                        </div>




                        

{/* 
                        <div className="faqimg col-md-6">
                            <img src={faq2} alt="" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="category col-md-4">
                            <div className="linkkk">

                                <ul className="linkk">
                                    <li><Link to='/faq'>Service</Link></li>
                                    <li><Link to='/productfaq'>Product</Link></li>
                                    <li><Link to='/trainingfaq'>Training</Link></li>




                                </ul>
                            </div>



                        </div> */}


                        <div className="row">
                            <div className="category col-md-4">
                                <div className="linkkk">
                                    <ul className="linkk">
                                    <li><Link to='/faq'>Service</Link></li>
                                    <li><Link to='/productfaq'>Product</Link></li>
                                    <li><Link to='/trainingfaq'>Training</Link></li>

  
                                    </ul>
                                </div>

                            </div>


                        <div className="seconddiv col-md-8">
                            <h6>FAQ</h6>
                            <h4>
                                <section className="main-div">
                                    {
                                        data.map((curElem) => {
                                            const { id } = curElem;
                                            return <MyAccordion key={curElem.id} {...curElem}></MyAccordion>


                                        })
                                    }
                                </section>
                            </h4>
                        </div>
                        </div>






                </div>
            </MDBContainer>
            <div className="contactus">
                <h4>Still have a question?</h4>
                <p>Can't find the answer? please contact us.</p>
                <button  > Contact Us</button>
            </div>
        </>
    );
};

export default Accordion;
