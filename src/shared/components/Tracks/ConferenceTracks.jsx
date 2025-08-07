import React from 'react'
import Bottom from '../Bottom/Bottom'

function ConferenceTracks() {
    const tracks = [
        {
            title: 'AI for Smart Materials & Nanotech',
            description:
                'Harnessing AI and data analytics in the design, simulation, and optimization of advanced materials and nanostructures for multidisciplinary applications.',
        },
        {
            title: 'AI & Machine Learning Innovations',
            description:
                'Breakthroughs in deep learning, generative AI, computer vision, and intelligent systems transforming industries, healthcare, and digital ecosystems.',
        },
        {
            title: 'Analytics in Renewable Energy Systems',
            description:
                'Data-driven insights and AI models for optimizing solar, wind, and green technologies to improve sustainability and energy efficiency.',
        },
        {
            title: 'Autonomous Systems & Intelligent Control',
            description:
                'Advances in robotics, AI-powered automation, IoT integration, and real-time control systems for smart manufacturing and services.',
        },
        {
            title: 'Cloud Computing & Secure Data Infrastructure',
            description:
                'Next-gen solutions in cloud architecture, data security, 5G/6G networks, and scalable analytics platforms for modern enterprises.',
        },
        {
            title: 'AI in Biomedical & Health Informatics',
            description:
                'AI-enabled diagnostics, predictive healthcare analytics, and cloud-based health informatics driving innovation in medical technologies.',
        },
        {
            title: 'Smart Infrastructure & AI in Civil Systems',
            description:
                'Leveraging AI, digital twins, and analytics for intelligent transportation, urban planning, structural health monitoring, and sustainability.',
        },
        {
            title: 'AI for Environmental & Climate Solutions',
            description:
                'AI-driven models and analytics for pollution monitoring, climate forecasting, ecological modeling, and sustainable environment management.',
        },
    ];

    return (
        <>
            <div className="bg-gray-100 md:py-10 pt-10">
                <div className="max-w-[80rem] mx-auto px-4">
                    <h2 className="md:text-3xl text-2xl font-bold text-green-700 md:mb-6 mb-3  text-center">Conference Tracks</h2>
                    <div className="text-left md:mb-12 mb-5 ">
                        <p className="text-black text-center md:text-lg">
                            Explore diverse and innovative research areas at the intersection of artificial intelligence, business analytics, and cloud systems. The conference invites original contributions in, but not limited to, the following tracks:
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 xl:grid-cols-3 gap-8">
                        {tracks.map((track, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition text-left">
                                <h3 className="text-xl font-semibold text-green-700 mb-2">{track.title}</h3>
                                <p className="text-gray-700 text-[17px]">{track.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Bottom />
        </>
    )
}

export default ConferenceTracks
