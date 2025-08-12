import React from 'react'
import Bottom from '../Bottom/Bottom'

function ConferenceTracks() {
    const tracks = [
        {
            title: 'Artificial Intelligence',
            description: 'Exploring AI advancements, deep learning, and neural networks.',
        },
        {
            title: 'Cybersecurity & Blockchain',
            description: 'Innovations in security, encryption, and decentralized technologies.',
        },
        {
            title: 'Cloud Computing & Big Data',
            description: 'Trends in cloud architecture, data analytics, and computing services.',
        },
        {
            title: 'IoT & Embedded Systems',
            description: 'Smart devices, automation, and IoT security challenges.',
        },
        {
            title: 'Robotics & Automation',
            description: 'Next-gen robotics applications and intelligent automation solutions.',
        },
        {
            title: 'Software Engineering & DevOps',
            description:
                'Modern software development, CI/CD, and agile methodologies.',
        },
        {
            title: 'Computer Vision & Image Processing',
            description: 'Image recognition, pattern analysis, and real-time visual computing.',
        },
        {
            title: 'Natural Language Processing',
            description: 'Speech recognition, machine translation, and sentiment analysis.',
        },
        {
            title: 'Quantum Computing',
            description: 'Quantum algorithms, cryptography, and next-generation computation models.',
        },
        {
            title: '5G & Next-Gen Networks',
            description: 'High-speed connectivity, network slicing, and edge computing.',
        },
        {
            title: 'Augmented & Virtual Reality',
            description: 'Immersive experiences, simulations, and human-computer interaction.',
        },
        {
            title: 'Green & Sustainable Computing',
            description: 'Energy-efficient systems, eco-friendly hardware, and sustainable IT practices.',
        }
    ];

    return (
        <>
            <section className='bg-[url("/images/home/contact-image.webp")] bg-no-repeat bg-center bg-cover md:h-[20vh] h-[15vh] w-full flex items-center justify-center' >
                <div className='text-white md:text-3xl text-xl font-bold  uppercase'>
                    Conference Tracks
                </div>
            </section>
            <div className="md:py-10 py-10">
                <div className="max-w-[80rem] mx-auto px-4">
                    <div className="text-left md:mb-12 mb-5 ">
                        <p className="text-black text-left  md:text-center md:text-lg">
                            Explore diverse and cutting-edge research areas shaping the future of Computer Science and Engineering. The conference welcomes original research contributions in, but not limited to, the following tracks:
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 xl:grid-cols-3 gap-8">
                        {tracks.map((track, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg border border-[#FEDE68]  shadow-md transition text-left">
                                <h3 className="text-xl font-semibold text-[#E64A19] mb-2">{track.title}</h3>
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
