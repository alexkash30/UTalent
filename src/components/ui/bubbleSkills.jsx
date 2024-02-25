"use client";
import React from 'react';
const BubbleSkills = () => {
    const filters = ['Explore', 'UI/UX', 'Logo Design', 'Design Systems', 'MySQL', 'Urgent', 'Medical', 'Typography', 'Mobile Design', 'Web Design', 'React.js'];
    return (
        <div className="space-y-5 w-[45vw]">
            <div className="flex flex-wrap gap-2 mt-[1vw] justify-center ">
                {filters.map((filter) => (
                    <div
                        key={filter}
                        className="w-auto p-2 border-2 dark:bg-error-black bg-error-darkPink dark:border-error-white border-error-black rounded-[40px] m-1 px-6 py-2 text-error-white text-[.7vw]"
                    >
                        {filter}
                    </div>
                ))}
            </div>
        </div>
    );
};
export default BubbleSkills;
