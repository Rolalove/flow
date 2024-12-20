"use client";
import Link from "next/link";
import { GoHome, GoClock } from "react-icons/go";
import { BsPinAngle } from "react-icons/bs";
import { BiSolidPlaneAlt, BiUserPlus } from "react-icons/bi";
import { LuLayoutDashboard, LuUserRound, LuNotebookPen} from "react-icons/lu";
import { VscFileSubmodule } from "react-icons/vsc";
import { GiSkills } from "react-icons/gi";
import { PiPhoneCallThin} from "react-icons/pi";
import { TbPlayCard1 } from "react-icons/tb";
import { IoCloseOutline } from "react-icons/io5";

import { useState } from "react";

export default function Sidebar({ isOpen, onClose }) {
  const [agentSkillsOpen, setAgentSkillsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [email, setEmail] = useState('purchasing@contoso.com');

  const handleCloseModal = () => {
    setAgentSkillsOpen(false);
  };

  const handleClearEmail = () => {
    setEmail('');
  };


  return (
    <>
      {/* Main Sidebar Navigation */}
      <nav className={`
        fixed lg:relative top-0 left-0 
        w-64 lg:w-48 h-full 
        bg-[#EFEFEF] text-base text-[#666666]
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        z-40
      `}>
        {/* Mobile Close Button */}
        <button 
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 text-gray-600 hover:bg-gray-200 p-2 rounded-full"
        >
          <IoCloseOutline size={24} />
        </button>

        {/* Sidebar Content */}
        <div className="px-4 py-6 space-y-6 overflow-y-auto h-full">
          {/* Quick Links */}
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-x-3 hover:bg-white p-2 rounded-lg">
              <GoHome />
              <span>Home</span>
            </Link>
            <Link href="/" className="flex items-center gap-x-3 hover:bg-white p-2 rounded-lg">
              <GoClock />
              <span>Recent</span>
            </Link>
            <Link href="/" className="flex items-center gap-x-3 hover:bg-white p-2 rounded-lg">
              <BsPinAngle />
              <span>Pinned</span>
            </Link>
          </div>

          {/* My Work Section */}
          <div className="space-y-3">
            <p className="font-medium px-2">My Work</p>
            <Link href="/" className="flex items-center gap-x-3 hover:bg-white p-2 rounded-lg">
              <BiSolidPlaneAlt />
              <span>Accelerator</span>
            </Link>
            <Link href="/" className="flex items-center gap-x-3 hover:bg-white p-2 rounded-lg">
              <LuLayoutDashboard />
              <span>Dashboards</span>
            </Link>
            <Link href="/" className="flex items-center gap-x-3 hover:bg-white p-2 rounded-lg">
              <LuNotebookPen />
              <span>Activities</span>
            </Link>
          </div>

          {/* Customer Section */}
          <div className="space-y-3">
            <p className="font-medium px-2">Customer</p>
            <Link href="/" className="flex items-center gap-x-3 hover:bg-white p-2 rounded-lg">
              <VscFileSubmodule />
              <span>Account</span>
            </Link>
            <Link href="/" className="flex items-center gap-x-3 hover:bg-white p-2 rounded-lg">
              <LuUserRound />
              <span>Contacts</span>
            </Link>
            <button 
              onClick={() => setAgentSkillsOpen(true)} 
              className="flex items-center gap-x-3 hover:bg-white p-2 rounded-lg w-full"
            >
              <GiSkills />
              <span>Agent Skills</span>
            </button>
          </div>

          {/* Sales Section */}
          <div className="space-y-3">
            <p className="font-medium px-2">Sales</p>
            <Link href="/" className="flex items-center gap-x-3 hover:bg-white p-2 rounded-lg">
              <PiPhoneCallThin />
              <span>Leads</span>
            </Link>
            <Link href="/" className="flex items-center gap-x-3 hover:bg-white p-2 rounded-lg">
              <TbPlayCard1 />
              <span>Opportunities</span>
            </Link>
            <Link href="/" className="flex items-center gap-x-3 hover:bg-white p-2 rounded-lg">
              <BiUserPlus />
              <span>Competitors</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-30"
          onClick={onClose}
        />
      )}

      {/* Agent Skills Modal */}
      {agentSkillsOpen && (
         <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
         <div className="bg-white rounded-xl w-full max-w-2xl relative p-6 max-h-[70vh] overflow-y-auto">
           {/* Close button */}
           <button
           onClick={handleCloseModal}
             className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full"
           >
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
               <path d="M18 6L6 18M6 6l12 12" />
             </svg>
           </button>
   
           {/* Header */}
           <div className="flex items-center gap-2 mb-4">
             <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full" />
             <h3 className="text-base font-medium">Agent skill</h3>
           </div>
   
           {/* Skill Card */}
           <div className="border border-gray-200 rounded-lg p-4 mb-6 shadow-sm">
             <div className="flex items-center justify-between mb-4">
               <h4 className="text-sm font-medium">
                 Check if on-hand inventory will allow all sales orders to ship without delay
               </h4>
               <button
                 onClick={() => setIsExpanded(!isExpanded)}
                 className="p-1 hover:bg-gray-100 rounded-full"
               >
                 <svg 
                   width="20" 
                   height="20" 
                   viewBox="0 0 24 24" 
                   fill="none" 
                   stroke="currentColor" 
                   strokeWidth="2"
                   className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                 >
                   <path d="M6 9l6 6 6-6" />
                 </svg>
               </button>
             </div>
   
             {isExpanded && (
               <p className="text-sm text-gray-600 leading-relaxed flex flex-wrap gap-1 items-center">
                 When{" "}
                 <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full flex items-center gap-1">
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                     <circle cx="12" cy="8" r="4" />
                     <path d="M20 21a8 8 0 10-16 0" />
                   </svg>
                   any vendor
                 </span>{" "}
                 sends an email with changes to{" "}
                 <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded-lg flex items-center gap-1">
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                     <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                     <path d="M14 2v6h6" />
                   </svg>
                   confirmed purchase orders
                 </span>
                 , check if the resulting{" "}
                 <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full flex items-center gap-1">
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                     <path d="M3 6h18M3 12h18M3 18h18" />
                   </svg>
                   on-hand inventory
                 </span>{" "}
                 will allow{" "}
                 <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full flex items-center gap-1">
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                     <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z" />
                   </svg>
                   all sales orders
                 </span>{" "}
                 to{" "}
                 <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full flex items-center gap-1">
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                     <path d="M5 12h14M13 5l7 7-7 7" />
                   </svg>
                   ship without delay
                 </span>
                 . If so,{" "}
                 <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full flex items-center gap-1">
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                     <path d="M5 12h14M13 5l7 7-7 7" />
                   </svg>
                   update the purchase order
                 </span>{" "}
                 to reflect the change.
               </p>
             )}
           </div>
   
           {/* Email Access Section */}
           <div className="space-y-2">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-10 7L2 7" />
                </svg>
                <h4 className="font-medium">Enable email access</h4>
              </div>
              
              <p className="text-sm text-gray-600 ml-7">
                Allow the agent to access email inboxes to read mail from known vendors
              </p>

              <div className="flex gap-2 mt-4">
                <div className="flex-1 relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-pink-100 rounded-sm flex items-center justify-center text-pink-600 font-medium">
                    P
                  </div>
                  <input
                    type="text"
                    value={email}
                    readOnly
                    className="w-full pl-11 pr-8 py-2 border rounded-lg text-sm"
                  />
                  {email && (
                    <button 
                      onClick={handleClearEmail}
                      className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-gray-100 p-1 rounded-full"
                    >
                      <IoCloseOutline size={16} />
                    </button>
                  )}
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
                  Allow access
                </button>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-end gap-2 mt-6">
              <button className="px-4 py-2 text-sm bg-gray-50 rounded-lg hover:bg-gray-100">
                Activate
              </button>
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 text-sm border rounded-lg hover:bg-gray-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}