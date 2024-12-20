import React from 'react';
import { 
    CgClose,
    CgChevronDown,
    CgPen 
  } from "react-icons/cg";
import { 
    RiThumbUpFill,
    RiThumbDownFill 
  } from "react-icons/ri";

const EngagementModal = ({ isOpen, onClose, data }) => {
    if (!isOpen || !data) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
       <div className="bg-white rounded-lg w-full lg:w-[60%] shadow-xl overflow-y-auto max-h-[90vh] ">
          {/* Header */}
          <div className="flex items-center p-4 border-b">
            <div className="flex-1 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200 ">
                <img src={data.image} alt="Profile" className="w-full h-full object-cover rounded-full" />
              </div>
              <div>
                <h2 className="font-semibold text-lg">{data.name}</h2>
                <div className="flex items-center justify-center text-gray-600 text-sm gap-2">
                {data.title}
                  
                </div>
              </div>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
              <CgClose className="w-5 h-5 text-gray-500" />
            </button>
          </div>
  
          {/* Main content */}
          <div className="p-4">
            <div className="bg-[#EAEDFE] rounded-xl p-2 mb-4">
              <div className="flex items-center justify-between ">
                <p className="text-[#6F6CBB] text-sm ">{data.suggestion}</p>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-gray-200 rounded">
                    <CgPen className="w-4 h-4 text-blue-600" />
                  </button>
                  <button className="bg-blue-600 text-sm text-white px-2  rounded hover:bg-blue-700">
                    Approve and send
                  </button>
                </div>
              </div>
            </div>
            <div className="px-4 flex gap-4 bg-white  shadow-lg mb-6  pt-6 rounded-lg">
  <button className="hover:underline">Engage</button>
  <button className="hover:underline border-b-2 border-blue-500">Research</button>
</div>
  
            <div className='bg-white shadow-sm shadow-[#6F6CBB] px-4 py-4 rounded'>
                {/* Why I picked this lead */}
            <div className="mb-4 bg-[#F4F5FF] px-3  py-5 rounded-lg">
              <h3 className="font-semibold mb-2 flex items-center justify-between text-[#6F6CBB]">
                Why I picked this lead
                
              </h3>
              <ul className="space-y-2 text-sm mb-4">
                {data.whyPicked.map((reason, index) => (
                  <li key={index}>• {reason}</li>
                ))}
              </ul>
              {/* Metrics */}
            <div className="flex gap-4 ">
              <div className="w-[25%] p-3 border rounded-lg text-center">
                <div className="text-sm text-gray-600">Decision maker</div>
                <div className="font-semibold text-[#6F6CBB]">{data.metrics.decisionMaker}</div>
              </div>
              <div className="w-[25%] p-3 border rounded-lg text-center">
                <div className="text-sm text-gray-600">Potential deal value</div>
                <div className="font-semibold text-[#6F6CBB]">{data.metrics.dealValue}</div>
              </div>
              <div className="w-[25%] p-3 border rounded-lg text-center">
                <div className="text-sm text-gray-600">Intent</div>
                <div className="font-semibold text-[#6F6CBB]">{data.metrics.intent}</div>
              </div>
            </div>
            </div>
  
            

             {/* Footer */}
             <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <span className='border p-1 rounded'>D365 Sales</span>
                <span className="text-gray-400 border p-1 rounded">+2</span>
              </div>
              <div className="flex items-center gap-2">
                <span className='border p-1 rounded'>AI-generated content may be incorrect</span>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <RiThumbUpFill className="w-4 h-4" />
                </button>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <RiThumbDownFill className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

            </div>
            {/* About section */}
           <div className='px-4'>
           <div className="mb-4 border rounded px-2 py-2" >
              <button className="w-full flex items-center justify-between font-semibold p-2 hover:bg-gray-50 rounded">
                <span>About {data.name.split(' ')[0]}</span>
                <CgChevronDown className="w-5 h-5 text-gray-400" />
              </button>
              <div className="mt-2 text-sm text-gray-700">
                <p>{data.about}</p>
              </div>
            </div>
           </div>
  
           
  
          {/* Pagination indicator
          <div className="p-4 border-t flex items-center justify-between">
            <div className="text-sm text-gray-600">Showing 1 of 9</div>
            <button className="text-blue-600 text-sm hover:underline">Show all</button>
          </div> */}
        </div>
      </div>
    );
  };
  export default EngagementModal