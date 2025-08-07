import React from 'react'
import Bottom from '../Bottom/Bottom'

function About() {
    return (
        <>
            <section className='bg-[#F3F4F6]'>
                <section className=' '>
                    <section>
                        <div className="md:py-10  pt-10 md:pt-10">
                            <div className="text-center">
                                <h1 className="md:text-3xl text-xl font-semibold text-green-700 mb-4">
                                    About the Conference
                                </h1>
                            </div>
                            <div className='md:px-5 px-3'>
                                <div className="max-w-[70rem] mx-auto flex flex-col md:flex-row 2xl:items-center gap-5 lg:gap-15 bg-white md:p-6 p-3 shadow-lg rounded-lg">
                                    <div className="w-full">
                                        <p className="pb-3 md:pb-6 text-justify md:text-[18px] leading-relaxed">
                                            The International Conference on Advances in AI, Business Analytics, and Cloud Systems 2025 is a globally recognized platform that brings together leading researchers, industry professionals, and academic scholars to explore the rapid developments in artificial intelligence, data analytics, and cloud technologies. With the digital landscape evolving faster than ever, this conference aims to bridge the gap between theoretical research and real-world implementation.
                                        </p>
                                        <p className="pb-3 md:pb-6 text-justify md:text-[18px] leading-relaxed">
                                            At the heart of ICAABC 2025 lies a focus on innovation and collaboration. The event will feature keynote speeches from renowned experts, technical paper presentations, panel discussions, and workshops covering key topics such as machine learning, generative AI, predictive analytics, cloud-native infrastructure, and intelligent business solutions. It provides a unique space for thought leaders to share breakthroughs and best practices across diverse sectors.
                                        </p>
                                        <p className="pb-3 md:pb-6 text-justify md:text-[18px] leading-relaxed">
                                            Participants will gain valuable insights into how AI and analytics are driving smarter decision-making, while scalable cloud systems are enabling seamless digital transformation. Real-world case studies, demos, and interactive sessions will showcase how businesses and institutions are leveraging these technologies to solve complex challenges and unlock new opportunities.                                    </p>
                                        <p className="pb-3 md:pb-6 text-justify md:text-[18px] leading-relaxed">
                                            ICAABC 2025 is more than just a conference — it's a hub for forward-thinking dialogue, knowledge exchange, and strategic networking. Whether you're a researcher, data scientist, cloud architect, entrepreneur, or policy-maker, this event offers the opportunity to engage with the global tech community and contribute to shaping the future of intelligent, data-driven systems.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <section className=''>
                    <section>
                        <div className="md:py-5 pt-10 md:pt-5">
                            <div className="text-center">
                                <h1 className="md:text-3xl text-xl font-semibold text-green-700 mb-4">
                                    Vision of the Conference
                                </h1>
                            </div>
                            <div className='md:px-5 px-3'>
                                <div className="max-w-[70rem] mx-auto flex flex-col md:flex-row 2xl:items-center gap-5 lg:gap-15 bg-white md:p-6 p-3 shadow-lg rounded-lg">
                                    <div className="w-full">
                                        <p className="pb-3 md:pb-6 text-justify md:text-[18px] leading-relaxed">
                                            The vision of the International Conference on Advances in AI, Business Analytics, and Cloud Systems (ICAABC 2025) is to foster a transformative ecosystem that empowers innovation, interdisciplinary research, and practical solutions in the era of intelligent technologies. Our aim is to become a leading global platform where academia, industry, and policy converge to address real-world challenges through the seamless integration of Artificial Intelligence, data-driven analytics, and scalable cloud infrastructure.
                                        </p>
                                        <p className="pb-3 md:pb-6 text-justify md:text-[18px] leading-relaxed">
                                            ICAABC 2025 envisions a future where AI and analytics are responsibly embedded into every aspect of society — from business intelligence and automation to sustainable development and ethical computing. The conference is committed to inspiring thought leadership, nurturing collaboration, and enabling breakthrough innovations that accelerate digital transformation while upholding social and economic inclusivity.
                                        </p>
                                        <p className="pb-3 md:pb-6 text-justify md:text-[18px] leading-relaxed">
                                            By providing a dynamic environment for researchers, practitioners, and change-makers, ICAABC 2025 aims to spark meaningful conversations and cultivate partnerships that contribute to building resilient, intelligent, and future-ready systems for tomorrow’s world.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </section>
            <Bottom />
        </>
    )
}

export default About
