import React from 'react'
import Bottom from '../Bottom/Bottom'

function Scope() {
    return (
        <>
            <section className='bg-[url("/images/home/contact-image.webp")] bg-no-repeat bg-center bg-cover md:h-[20vh] h-[15vh] w-full flex items-center justify-center' >
                <div className='text-white md:text-3xl text-xl font-bold uppercase'>
                    Scope of the Conference
                </div>
            </section>
            <section className="md:px-5 px-3">
                <section>
                    <div className="py-12">
                        <div className="max-w-[80rem] mx-auto flex flex-col lg:flex-row items-center md:gap-10 gap-5">
                            <div className="w-full md:w-1/3 flex justify-center">
                                <img src="/images/home/scope.webp" className="rounded-lg shadow-lg transition-transform duration-500" alt="Conference Scope" />
                            </div>
                            <div className="w-full md:w-2/3">
                                <p className="pb-5 text-justify md:text-lg leading-relaxed text-gray-700">
                                    The <strong> International Conference on Emerging Trends in Computer Science and Engineering 2025 </strong>
                                    aims to unite researchers, industry professionals, academicians, and innovators to explore breakthroughs across
                                    Artificial Intelligence, Business Analytics, and Cloud Computing. This premier event serves as a hub for exchanging
                                    innovative ideas, discussing cutting-edge research, and showcasing real-world applications that redefine the
                                    future of technology.
                                </p>
                                <p className="text-justify md:text-lg leading-relaxed text-gray-700">
                                    ICETCSE 2025 emphasizes the development of intelligent, secure, and scalable solutions for modern enterprises.
                                    Key topics include AI-driven decision-making, advanced analytics, cloud-native infrastructure, ethical AI,
                                    and integration of emerging technologies into business and industry ecosystems. Through keynotes, paper
                                    presentations, and interactive panels, the conference fosters collaboration and knowledge-sharing to
                                    shape the next generation of computing innovations.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[80rem] mx-auto md:px-3">
                        <div className="text-center mb-7">
                            <h1 className="text-xl md:text-3xl font-bold text-gray-900 relative inline-block">
                                Focused Areas of Conference
                            </h1>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-3 md:px-4 mb-10">
                            {["Artificial Intelligence & Machine Learning", "Natural Language Processing & Generative AI", "Business Intelligence & Predictive Analytics", "Big Data Engineering & Real-time Processing",
                                "Cloud Computing & Edge Computing", "AI in Healthcare, Finance & Smart Cities", "Cybersecurity, Data Privacy & Ethical AI", "Federated Learning & Privacy-Preserving AI",
                                "AI-Driven Automation & Industry 4.0", "Blockchain & Distributed Cloud Systems", "Decision Support Systems & Knowledge Engineering", "Cloud-Native DevOps & Infrastructure as Code",].map((item, index) => (
                                    <div key={index} className="bg-white border border-gray-200 shadow-md rounded-lg md:p-5 p-3 transition duration-300 flex items-center" >
                                        <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"   >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <h3 className="md:text-base text-sm">{item}</h3>
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
