import React from 'react'
import Bottom from '../Bottom/Bottom'

function Scope() {
    return (
        <>
            <section className='bg-[#F3F4F6]'>
                <section className=''>
                    <section>
                        <div className="py-10 pt-10 md:pt-10">
                            <div className="text-center">
                                <h1 className="text-2xl md:text-4xl font-bold pb-6 text-[#528F62] relative inline-block after:content-[''] after:block after:w-40 ">
                                    Scope of the Conference
                                </h1>
                            </div>
                            <div className="max-w-[77rem] mx-auto flex flex-col md:flex-row 2xl:items-center gap-5 lg:gap-15 bg-white md:p-6 p-3 shadow-lg rounded-lg">
                                <div className="w-full grid lg:grid-cols-3 gap-6 items-center">
                                    <div className='lg:col-span-1  mx-auto '>
                                        <img src="/images/home/scope-of-conference.webp" className='rounded-lg mx-auto' alt="" />
                                    </div>
                                    <div className='lg:col-span-2'>
                                        <p className="pb-3 md:pb-6 text-justify md:text-[18px] leading-relaxed">
                                            The International Conference on Advances in AI, Business Analytics, and Cloud Systems (ICAABC) 2025 aims to bring together researchers, industry professionals, and academicians to explore cutting-edge innovations and applications in the intersecting domains of Artificial Intelligence (AI), Business Analytics, and Cloud Computing. The conference provides a platform to discuss advancements in AI models, intelligent decision-making systems, and emerging trends in data-driven analytics that empower organizations to optimize operations and create business value.
                                        </p>
                                        <p className=" text-justify md:text-[18px] leading-relaxed">
                                            ICAABC 2025 will also focus on scalable, secure, and efficient cloud-based infrastructures that support modern AI and analytics solutions. Emphasis will be placed on topics such as machine learning deployment on cloud platforms, real-time analytics, edge-cloud synergy, and ethical AI. Through technical sessions, paper presentations, and expert panels, the conference encourages collaboration, knowledge sharing, and the development of integrated systems that drive innovation in today's data-centric world.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className='max-w-[80rem] mx-auto md:px-3 px-2'>
                        <div className="text-center">
                            <h1 className="text-2xl md:text-4xl font-bold md:pb-6 text-[#528F62] relative inline-block after:content-[''] after:block after:w-40 ">
                                Focused Areas of Conference
                            </h1>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:pt-0 pt-8 md:py-8">
                            {["Artificial Intelligence & Machine Learning",
                                "Natural Language Processing and Generative AI",
                                "Business Intelligence and Predictive Analytics",
                                "Big Data Engineering & Real-time Data Processing",
                                "Cloud Computing and Edge Computing Architectures",
                                "AI in Healthcare, Finance, and Smart Cities",
                                "Data Privacy, Security & Ethical AI",
                                "Federated Learning & Privacy-Preserving Models",
                                "AI-Driven Automation in Business & Industry 4.0",
                                "Blockchain and Distributed Cloud Systems",
                                "Decision Support Systems and Knowledge Engineering",
                                "Cloud-Native DevOps and Infrastructure as Code",
                            ].map((item, index) => (
                                <div key={index} className="bg-white shadow-md rounded- p-6 text-gray-800  rounded-lg border-y-3 border-y-[#528F62] hover:shadow-xl transition duration-300 ease-in-out">
                                    <h3 className="text-base font-semibold">{item}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </section>
            <Bottom />
        </>
    )
}

export default Scope
