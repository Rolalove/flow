'use client'
import { useState } from "react";
import PreviewCard from "./PreviewCard";
import { LuDot } from "react-icons/lu";

import { leadData } from './leadData';
import EngagementModal from "./EngagementModal";

const activities = [
  {
    title: "Cafe A100 for Woodland Bank",
    location: "Woodland",
    value: " $180,000",
    timeline: "8 days to close",
    action: "Review draft and reply to Chris Nadio",
  },
  {
    title: "Partnership opportunity for Fabrikam",
    location: "Fabrikam",
    value: "$2,000,000",
    timeline: "12 days to close",
    action: "Prepare me for Fabrikam's key stakeholder meeting",
  }
];

export default function InsightCard() {
  const [modalData, setModalData] = useState(null);

  const handleNameClick = (name) => {
    setModalData(leadData[name]);
  };

  return (
    <>
      <section className="border border-[#8B94DC] px-4 md:px-6 mb-4 rounded-lg bg-white py-4 md:py-6">
        <div>
          <h3 className="font-medium text-base md:text-lg mb-4 md:mb-6">
            Hi Mona, <span className="text-blue-800">68%</span> of goal achieved and rest can be achieved by focusing on 20 top leads.
          </h3>
          
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-x-4">
            {/* Main Content */}
            <div className="w-full lg:w-[70%]">
              <p className="mb-4 text-sm md:text-base">
                Copilot has pinpointed 20 key leads that show strong purchase intent and are actively engaging. These leads need your focus.
              </p>
              <PreviewCard onNameClick={handleNameClick} />
            </div>

            {/* Side Activities section */}
            <div className="w-full lg:w-[30%] lg:border-l pt-4 lg:pt-0">
              <div className="pl-4">
                <h4 className=" mb-4">Other key activities</h4>
                {activities.map((activity, index) => (
                  <div key={index} className="mb-4 border rounded-lg px-2 py-2">
                    <h5 className="font-medium text-sm">{activity.title}</h5>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <span>{activity.location}</span>
                      <LuDot />
                      <span>{activity.value}</span><LuDot />
                      <span>{activity.timeline}</span>
                    </div>
                    
                    <div className="text-sm  mt-2">{activity.action}</div>
                  </div>
                ))}
              </div>
              <p className="text-blue-600 pl-4 font-medium text-sm">Show all key activities</p>
            </div>
          </div>
        </div>
      </section>

      <EngagementModal 
        isOpen={modalData !== null}
        onClose={() => setModalData(null)}
        data={modalData}
      />
    </>
  );
}

