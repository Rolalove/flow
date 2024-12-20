import { RiMailAiLine } from "react-icons/ri";
import { IoCalendarOutline } from "react-icons/io5";
import { LuDot } from "react-icons/lu";

const profile = [
    {
        image: '/image.png',
        name: 'Jane Reyes',
        title: 'COO',
        company: 'Northwind Trader',
        icon: <RiMailAiLine />,
        noteTitle: 'Engage with Jane Reyes',
        note: 'Jane may be interested in upgrading espresso machines for her in-stores coffee shops.',
        reason: "Expand business",
        highlight: "High buying intent"
    },
    {
        image: '/image1.png',
        name: 'Allan Munger',
        title: 'Head of Real Estate Development',
        company: 'Contoso Coffe',
        icon: <IoCalendarOutline />,
        noteTitle: 'Prepare for meeting with Allan',
        note: 'Prepare for high-buying intent meeting Copilot scheduled for 2 PM regarding upgrading service contract.',
        reason: "Upcoming meeting",
        highlight: "Due today"
    }
];

export default function PreviewCard({ onNameClick }) {
    return (
        <div className="flex flex-col md:flex-row gap-4 md:gap-x-3 w-full ">
            {profile.map((prev, index) => (
                <div 
                    className="border rounded-xl p-3 md:p-4 w-full md:w-1/2" 
                    key={index}
                >
                    <div className="flex items-start md:items-center gap-x-3 md:gap-x-4 mb-2">
                        <img 
                            className="w-8 h-8 md:w-10 md:h-10 rounded-full" 
                            src={prev.image} 
                            alt={prev.name} 
                        />
                        <div className="flex-1 min-w-0">
                            <button 
                                onClick={() => onNameClick(prev.name)}
                                className="text-sm md:text-base font-medium truncate  hover:underline text-left"
                            >
                                {prev.name}
                            </button>
                            <p className="text-xs md:text-sm text-gray-600 truncate">
                                {prev.title} · {prev.company}
                            </p>
                        </div>
                    </div>
                    {/* Rest of the card content remains the same */}
                    <div className="bg-[#EFF3F6] rounded-xl p-2.5 md:p-3 mb-2">
                        <p className="text-sm md:text-base flex items-center gap-x-2 font-medium mb-1">
                            <span className="flex-shrink-0">{prev.icon}</span>
                            <span className="truncate">{prev.noteTitle}</span>
                        </p>
                        <p className="text-xs md:text-sm leading-relaxed">
                            {prev.note}
                        </p>
                    </div>

                    <p className="text-xs flex flex-wrap items-center gap-x-1 text-gray-600">
                        {prev.reason}
                        <span className="flex items-center">
                            <LuDot />
                        </span>
                        <span>{prev.highlight}</span>
                    </p>
                </div>
            ))}
        </div>
    );
};