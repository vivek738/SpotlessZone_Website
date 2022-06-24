import React, { useState } from "react";
import "./MyAccordion";
import "./MyAccordion.css";

const MyAccordion = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="faq">
      <div className="main-heading d-flex justify-content-start align-items-center">
        <p
          className="emoticon mt-2 me-2 fw-bold fs-5 text-black"
          style={{ cursor: "pointer" }}
          onClick={() => setShow(!show)}
        >
          {show ? "-" : "+"}
        </p>

        <h3 className="question">{question}</h3>
      </div>
      {show && <p className="answer">{answer}</p>}
      <hr />
    </div>
  );
};

export default MyAccordion;
