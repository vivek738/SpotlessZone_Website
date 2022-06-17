import React from "react";
import RangeSlider from "react-bootstrap-range-slider";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";

const ToolTip = () => {
  const [value, setValue] = React.useState(0);
  return (
    <>
      <div className="container my-5">
        <h1>Tool Tip</h1>
        <div className="row">
          <div className="col-md-6">
            <RangeSlider
              min={0}
              max={10}
              size='lg'
              tooltip="auto" //use on, off when to display : auto: for display on hover only
              value={value}
              onChange={(changeEvent) => setValue(changeEvent.target.value)}
              className="text-info"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ToolTip;
