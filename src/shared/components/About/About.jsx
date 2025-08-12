import React from 'react'
import Bottom from '../Bottom/Bottom'
import { BookOpen, Lightbulb, Network } from 'lucide-react'

function About() {
    return (
        <>
            <section className='bg-[url("/images/home/contact-image.webp")] bg-no-repeat bg-center bg-cover md:h-[20vh] h-[15vh] w-full flex items-center justify-center' >
                <div className='text-white md:text-3xl text-xl font-bold  uppercase'>
                    About the Conference
                </div>
            </section>
            <section className=' '>
                <section className=' '>
                    <section>
                        <div className="md:py-5  pt-10 md:pt-10">
                            <div className='md:px-5 px-3'>
                                <div className="max-w-[70rem] mx-auto flex flex-col md:flex-row 2xl:items-center gap-5 lg:gap-15">
                                    <div className="w-full">
                                        <p className="pb-3 md:pb-6 text-justify md:text-[18px] leading-relaxed mb-2">
                                            The International Conference on Emerging Trends in Computer Science & Engineering 2025 is a premier global forum that unites researchers, industry experts, and academic scholars to explore the latest innovations and advancements in computer science and engineering.                                        </p>
                                        <div className='grid lg:grid-cols-2 gap-5 items-center mb-5'>
                                            <div>
                                                <img src="/images/home/cs.jpg" className='rounded-md' alt="" />
                                            </div>
                                            <p className="pb-3 md:pb-6 text-justify md:text-[18px] leading-relaxed">
                                                At the heart of ICETCSE 2025 lies a commitment to driving innovation and fostering collaboration. The event will showcase keynote speeches from distinguished experts, technical paper presentations, panel discussions, and interactive workshops on pivotal topics such as artificial intelligence, business analytics, cloud computing, emerging technologies, and intelligent enterprise solutions. It offers a unique platform for thought leaders, researchers, and industry professionals to share groundbreaking insights, transformative ideas, and best practices across diverse sectors.
                                            </p>
                                        </div>
                                        {/* <p className="pb-3 md:pb-6 text-justify md:text-[18px] leading-relaxed">
                                            Participants will gain valuable insights into how AI and analytics are driving smarter decision-making, while scalable cloud systems are enabling seamless digital transformation. Real-world case studies, demos, and interactive sessions will showcase how businesses and institutions are leveraging these technologies to solve complex challenges and unlock new opportunities.                                    </p>
                                        <p className=" text-justify md:text-[18px] leading-relaxed mb-10">
                                            ICAABC 2025 is more than just a conference — it's a hub for forward-thinking dialogue, knowledge exchange, and strategic networking. Whether you're a researcher, data scientist, cloud architect, entrepreneur, or policy-maker, this event offers the opportunity to engage with the global tech community and contribute to shaping the future of intelligent, data-driven systems.
                                        </p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </section>
            <div className="bg-white rounded-lg max-w-[70rem] mx-auto mb-14 md:px-2 px-2">
                <h2 className="md:text-3xl text-2xl font-semibold text-center text-black mb-5">
                    Conference Objectives
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-4">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <BookOpen className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-medium   mb-3">Knowledge Sharing</h3>
                        <p className="">
                            Facilitate the exchange of cutting-edge research findings and innovative solutions
                            among global experts in computer science and engineering.
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Network className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-medium  mb-3">Collaboration</h3>
                        <p className=" ">
                            Build lasting professional relationships and foster collaborative partnerships
                            between academic institutions and industry leaders.
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Lightbulb className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-medium  mb-3">Innovation</h3>
                        <p className=" ">
                            Inspire breakthrough innovations that address real-world challenges and shape
                            the future of technology and digital transformation.
                        </p>
                    </div>
                </div>
            </div>
            <Bottom />
        </>
    )
}

export default About
