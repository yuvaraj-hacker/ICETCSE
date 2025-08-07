import React from 'react'
import Bottom from '../Bottom/Bottom';

function Dates() {
    const deadlines = [
        {
            title: 'Full Paper Submission Deadline',
            date: '2025-January-01',
        },
        {
            title: 'Notification of Decision',
            date: '2025-January-10',
        },
        {
            title: 'Deadline for Submitting Revised Full Paper',
            date: '2025-January-18',
        },
        {
            title: 'Notification of Acceptance',
            date: '2025-January-25',
        },
        {
            title: 'Camera-Ready Submission',
            date: '2025-February-05',
        },
        {
            title: 'Last Date for Registration',
            date: '2025-February-13',
        },
    ];

    return (
        <>
            <section className="  text-center  md:py-10 pt-10 bg-gray-100" >
                <div className="max-w-6xl mx-auto text-center ">
                    <h2 className="md:text-3xl text-xl font-semibold text-green-700 mb-4">Key Dates</h2>
                    <div className="border-t-2 border-green-700 w-16 mx-auto mb-8"></div>
                </div>
                <div className="flex justify-center  ">
                    <div className="max-w-[80rem] mx-auto md:px-5 px-3">
                        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-center gap-5 md:gap-10">
                            {deadlines.map((item, index) => (
                                <div key={index} className="h-auto gap-2 flex flex-col justify-between items-center rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 bg-white p-6"   >
                                    <p className="text-[20px] mt-2  text-[#528F62] font-semibold text-center w-full transform transition-transform duration-500 hover:scale-110  ">
                                        {item.date}
                                    </p>
                                    <h2 className="text-lg text-black text-center">
                                        {item.title}
                                    </h2>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Bottom />
        </>
    )
}

export default Dates
