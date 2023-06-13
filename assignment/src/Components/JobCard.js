import React from "react";
import { twMerge } from "tailwind-merge";
import Company_logo from "../Logos/Company_logo.png"

const JobCard = ({ jobCardDetails }) => {
  const {
    title,
    outerStyle,
    innerStyle,
    details,
    buttonWrapper,
    buttonDetails,
    titleProperties,
    subtitleProperties,
    informationProperties,
    locationDetails,
    buttonText,
  } = jobCardDetails;
  return (
    <div className={twMerge(outerStyle, "bg-card_main")}>
      <div className={twMerge(innerStyle, "flex")}>
        <div>
          <img
            src={Company_logo}
            alt="company_logo"
          />
        </div>
        <div>
          <div className={twMerge(details)}>
            <h2 className={twMerge(titleProperties)}>{title}</h2>
            <h2 className={twMerge(subtitleProperties)}>
              Great Vibes - Information Technology
            </h2>
            <h2 className={twMerge(locationDetails)}>
              Chennai, Tamilnadu, India (In-office)
            </h2>
          </div>
          <div className={twMerge("space-y-[8px]")}>
            <h3 className={twMerge(informationProperties)}>
              Part-Time (9.00 am - 5.00 pm IST)
            </h3>
            <h3 className={twMerge(informationProperties)}>
              Experience (1 - 2 years)
            </h3>
            <h3 className={twMerge(informationProperties)}>
              INR (₹) 30,000 - 50,000 / Month
            </h3>
            <h3 className={twMerge(informationProperties)}>51-200 employees</h3>
          </div>
          <div className={twMerge(buttonWrapper)}>
            <button className={twMerge(buttonDetails)}>{buttonText}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
