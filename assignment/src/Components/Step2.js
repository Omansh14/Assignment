import React from "react";
import { twMerge } from "tailwind-merge";

const Step2 = ({ formStyling }) => {
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
          <h4 className={twMerge(step)}>Step 2</h4>
        </div>
        <div className="flex flex-col justify-between gap-[4px]">
          <div className="w-full">
            <h4 className={twMerge(inputFieldLabel)}>Experience</h4>
          </div>
          <div className="w-full flex gap-[24px]">
            <input className={formInputField} placeholder="Minimum" />
            <input className={formInputField} placeholder="Maximum" />
          </div>
        </div>
        <div className="flex flex-col justify-between gap-[4px]">
          <div className="w-full">
            <h4 className={twMerge(inputFieldLabel)}>Salary</h4>
          </div>
          <div className="w-full flex gap-[24px]">
            <input className={formInputField} placeholder="Minimum" />
            <input className={formInputField} placeholder="Maximum" />
          </div>
        </div>
        <div>
          <h4 className={twMerge(inputFieldLabel)}>Total employee</h4>
          <input className={formInputField} placeholder="ex. 100" />
        </div>
        <div className="flex flex-col gap-[4px]">
          <h4 className={twMerge(inputFieldLabel)}>Apply Type</h4>
          <div className="flex gap-[16px]">
            <div className="flex gap-[4px]">
              <input type="radio" />
              <label>Quick Apply</label>
            </div>
            <div className="flex gap-[4px]">
              <input type="radio" />
              <label>External Apply</label>
            </div>
          </div>
        </div>
      </div>
      <div className={twMerge("flex ", formButtonWrapper)}>
        <button className={fromButton}>Save</button>
      </div>
    </div>
  );
};

export default Step2;
