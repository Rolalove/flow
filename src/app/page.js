'use client'
import { RiMenu2Line } from "react-icons/ri";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import LeadHeader from "@/components/LeadHeader";
import InsightCard from "@/components/InsightCard";
import LeadTable from "@/components/LeadTable";
export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main className="bg-[#EFF3F6] min-h-screen">
      <div className="flex justify-between lg:hidden p-4 ">
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="text-gray-600"
        >
          <RiMenu2Line size={24} />
        </button>
        <p>Dynamic 365</p>
      </div>

      <section className="flex flex-col lg:flex-row">
        <Sidebar 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)} 
        />

        <div className="flex-1 px-4 w-full py-3">
          <LeadHeader /> 
          <InsightCard />
          <LeadTable />
        </div>
      </section>
    </main>
  );
}
