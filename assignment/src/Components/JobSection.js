import React from "react";
import JobCard from "./JobCard";
import { jobCardData } from "../Common/common";

const JobSection = () => {
    return (
        <div className="flex flex-wrap p-8 justify-center w-full gap-[60px] bg-card_border">
            {
                jobCardData.map((item, idx) => (
                    <JobCard
                     key={`${idx}+1`}
                     jobCardDetails = {item}
                  />
                ))
            }
            <div>Dummy</div>
          </div>
      );
};

export default JobSection;