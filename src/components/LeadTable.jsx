'use client'
import { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";

const leadslist = [
    { id: 1, name: 'Winford Asher', topic: 'Cafe A100 for commercial use', status: 'New', created: '4/02/2024 12:00 PM' },
    { id: 2, name: 'Josia Love', topic: 'Upgrading service plan', status: 'New', created: '3/30/2024 7:45 AM' },
    { id: 3, name: 'Harrison Curtis', topic: 'Issue with throughput on EspressoMaster', status: 'New', created: '3/28/2024 3:30 PM' },
    { id: 4, name: 'Jermaine Brett', topic: 'New roaster in distribution facility', status: 'New', created: '3/25/2024 11:05 AM' },
    { id: 5, name: 'Gerald Stephens', topic: 'Concerns on current machines', status: 'New', created: '3/23/2024 4:50 PM' },
    { id: 6, name: 'Halle Griffiths', topic: 'Expanding business', status: 'New', created: '3/21/2024 10:20 AM' },
    { id: 7, name: 'Rachel Michael', topic: 'Addressing service concerns', status: 'New', created: '3/19/2024 1:15 PM' },
    { id: 8, name: 'Alex Baker', topic: 'Premium coffee beans', status: 'New', created: '3/17/2024 8:00 AM' },
    { id: 9, name: 'Lilly Pyles', topic: 'Cafe A100 bulk rate', status: 'New', created: '3/13/2024 2:45 PM' },
    { id: 10, name: 'Jane Reyes', topic: 'Improving cost per cup', status: 'New', created: '3/10/2024 9:30 AM' }
];

export default function LeadTable() {
    const [searchQuery, setSearchQuery] = useState('');
    const [isClient, setIsClient] = useState(false);
    
    useEffect(() => {
        setIsClient(true)
    }, [])

    const filteredLeads = leadslist.filter(lead => {
        const searchLower = searchQuery.toLowerCase();
        return (
            lead.name.toLowerCase().includes(searchLower) ||
            lead.topic.toLowerCase().includes(searchLower)
        );
    });

    if (!isClient) {
        return null;
    }

    return (
        <section className="w-full bg-white">
            <div className="mb-2 py-3 px-2">
                <div className="relative">
                    <BiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Sort, filter and search with Copilot"
                        className="w-full md:w-[40%] border-[#8B94DC] pl-10 pr-4 py-2 border rounded-lg outline-none"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {/* Desktop Table - Hidden on mobile */}
            <div className="hidden md:block">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b">
                            <th className="px-4 py-2 w-1/4 text-left">Name</th>
                            <th className="px-4 py-2 w-1/3 text-left">Topic</th>
                            <th className="px-4 py-2 w-1/6 text-left">Status Reason</th>
                            <th className="px-4 py-2 w-1/4 text-left">Created On</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredLeads.map((lead) => (
                            <tr className="border-b text-sm" key={lead.id}>
                                <td className="text-[#0072C6] px-4 py-2">
                                    <div className="flex items-center gap-x-3">
                                        <input type="checkbox" className="rounded" />
                                        <span>{lead.name}</span>
                                    </div>
                                </td>
                                <td className="text-[#333333] px-4 py-2">{lead.topic}</td>
                                <td className="text-[#333333] px-4 py-2">{lead.status}</td>
                                <td className="text-[#333333] px-4 py-2">{lead.created}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Cards - Shown only on mobile */}
            <div className="md:hidden">
                {filteredLeads.map((lead) => (
                    <div key={lead.id} className="border rounded-lg p-4 mb-4 shadow-sm ">
                        <div className="flex items-center gap-x-3 mb-2">
                            <input type="checkbox" className="rounded" />
                            <span className="text-[#0072C6] font-medium">{lead.name}</span>
                        </div>
                        <div className="space-y-2 text-sm">
                            <div className="flex gap-x-4 items-center">
                                <span className="text-gray-500">Topic:</span>
                                <p className="text-[#333333]">{lead.topic}</p>
                            </div>
                            <div className="flex gap-x-4 items-center">
                                <span className="text-gray-500">Status:</span>
                                <p className="text-[#333333]">{lead.status}</p>
                            </div>
                            <div className="flex gap-x-4 items-center">
                                <span className="text-gray-500">Created:</span>
                                <p className="text-[#333333]">{lead.created}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}