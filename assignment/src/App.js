import React from "react";
import { formStyling } from "./Common/common";
import Step1 from "./Components/Step1";
import Step2 from "./Components/Step2";
import JobSection from "./Components/JobSection";

function App() {

  return (
    <div className="App">
      <div className="flex justify-center pt-10 ">
        <Step1 formStyling={formStyling} />
      </div>
      <div className="flex justify-center pt-10">
        <Step2 formStyling={formStyling} />
      </div>
      <div className="flex justify-center pt-10">
        <JobSection />
      </div>
    </div>
  );
}

export default App;
