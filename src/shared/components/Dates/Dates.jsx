import React from 'react'
import Bottom from '../Bottom/Bottom';

function Dates() {
    const deadlines = [
        {
            title: 'Full Paper Submission Deadline',
            date: '2026-February-06',
        },
        {
            title: 'Notification of Decision',
            date: '2026-February-12',
        },
        {
            title: 'Deadline for Submitting Revised Full Paper',
            date: '2026-February-20',
        },
        {
            title: 'Notification of Acceptance',
            date: '2026-February-26',
        },
        {
            title: 'Camera-Ready Submission',
            date: '2026-March-02',
        },
        {
            title: 'Last Date for Registration',
            date: '2026-March-10',
        },
    ];

    return (
        <>
            <section className='bg-[url("/images/home/contact-image.webp")] bg-no-repeat bg-center bg-cover md:h-[20vh] h-[15vh] w-full flex items-center justify-center'>
                <div className='text-white md:text-3xl text-xl font-bold  uppercase    '>
                    Key Dates
                </div>
            </section>
            <section className="  text-center  md:py-10 pt-10 pb-10 " >
                <div className="flex justify-center">
                    <div className="max-w-[80rem] mx-auto md:px-5 px-3">
                        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-center gap-5 md:gap-10">
                            {deadlines.map((item, index) => (
                                <div key={index} className="h-auto gap-2 flex flex-col justify-between items-center rounded-lg shadow-lg border border-[#FEDE68] hover:shadow-2xl transition-all duration-300 bg-white p-6"   >
                                    <p className="md:text-[20px] mt-2 text-[#E64A19] font-semibold text-center w-full transform transition-transform duration-500 hover:scale-110  ">
                                        {item.date}
                                    </p>
                                    <h2 className="text-base text-black text-center">
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
