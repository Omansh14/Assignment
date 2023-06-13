import React from "react";
import { twMerge } from "tailwind-merge";

const Step1 = ({ formStyling }) => {
  const {
    header,
    step,
    inputFieldLabel,
    formClassSmall,
    formClass,
    formInputField,
    fromButton,
    formButtonWrapper,
  } = formStyling;

  return (
    <div className={twMerge("flex flex-col gap-[96px]", formClass)}>
      <div className={twMerge("flex flex-col", formClassSmall)}>
        <div className="flex  justify-between w-full">
          <h4 className={twMerge(header)}>Create Job</h4>
          <h4 className={twMerge(step)}>Step 1</h4>
        </div>
        <div>
          <h4 className={twMerge(inputFieldLabel)}>
            Job Title<span className="text-error">*</span>
          </h4>
          <input className={formInputField} placeholder="ex. UX UI Designer" />
        </div>
        <div>
          <h4 className={twMerge(inputFieldLabel)}>
            Company Name<span className="text-error">*</span>
          </h4>
          <input className={formInputField} placeholder="ex. Google" />
        </div>
        <div>
          <h4 className={twMerge(inputFieldLabel)}>
            Industry<span className="text-error">*</span>
          </h4>
          <input
            className={formInputField}
            placeholder="ex. Information Technology"
          />
        </div>
        <div className="flex justify-between gap-[24px]">
          <div className="w-full">
            <h4 className={twMerge(inputFieldLabel)}>Location</h4>
            <input className={formInputField} placeholder="ex. Chennai" />
          </div>
          <div className="w-full">
            <h4 className={twMerge(inputFieldLabel)}>Remote-Type</h4>
            <input className={formInputField} placeholder="ex. In-office" />
          </div>
        </div>
      </div>
      <div className={twMerge("flex ", formButtonWrapper)}>
        <button className={fromButton}>Next</button>
      </div>
    </div>
  );
};

export default Step1;
