import { useRef } from "react";
import Bottom from "../Bottom/Bottom";
import { Link } from "react-router-dom";
import ContactSection from "../Bottom/Bottom";

export default function HeroSection({ data }) {
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
      <section className={`bg-[url("/images/home/hero-section.webp")] bg-no-repeat bg-cover px-5 md:py-10 h-[calc(100vh-85px)] flex items-center`}>
        <div className="max-w-[95rem] mx-auto flex flex-col items-center justify-center md:py-10 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-center lg:text-left flex flex-col gap-2">
              <h1 className="text-[#FF5722] font-bold md:text-8xl text-3xl leading-tight">
                ICETCSE
              </h1>
              <h1 className="text-white font-bold italic md:text-6xl text-lg   leading-tight">CONFERENCE 2025</h1>
              <h1 className="text-white font-medium md:text-xl text-lg leading-tight">International Conference on Emerging Trends in Computer Science & Engineering</h1>
              <p className="text-white text-[clamp(1rem,2vw,1.25rem)] pb-5 leading-relaxed">
                25<sup>th</sup> March, 2026
              </p>
              <Link to='/paper-submission' className="w-fit lg:mx-0 mx-auto lg:hidden block">
                <button className="px-4 py-2 rounded-lg w-fit text-white bg-[#FF5722] transition text-sm md:text-lg cursor-pointer">
                  Paper Submission
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 flex flex-col md:gap-10 gap-7">
        <section className=" ">
          <div className="container w-full xl:w-[90%] 2xl:w-[65%] mx-auto px-3 sm:px-6 lg:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-4 gap-4">
              <div className="flex justify-center items-center md:px-2">
                <img alt="About Image" className="rounded-lg shadow-lg" src="/images/home/cs.jpg" />
              </div>
              <div>
                <h2 className="md:text-3xl text-xl font-semibold text-black md:mb-4 mb-2 text-left">About the Event</h2>
                <div>
                  <p className="text-base lg:text-lg mb-4 text-justify">Welcome to ICETCSE, the premier event for exploring the forefront of innovation in Computer Science and Engineering. Our conference brings together visionary researchers, industry experts, academic scholars, and technology pioneers to share insights, showcase groundbreaking research, and inspire the next generation of advancements in the field.
                  </p>
                </div>
                <div>
                  <p className="text-base lg:text-lg mb-4 text-justify">
                    At ICETCSE, we are committed to fostering collaboration across diverse domains — from artificial intelligence, cybersecurity, and cloud computing to IoT, robotics, quantum computing, and software engineering. Whether you are a technology enthusiast, a seasoned professional, or an aspiring innovator, ICETCSE offers an unparalleled platform to exchange knowledge, explore emerging trends, and shape the future of technology and engineering.
                  </p>
                </div>
                <div className="  md:text-left text-center">
                  <div className="w-fit mx-auto md:mx-0">
                    <Link to='/about' className="w-fit">
                      <div className="bg-[#E64A19] p-3  hover:scale-95 duration-300  rounded-lg text-white cursor-pointer w-fit md:mx-0 mx-auto">
                        Read More
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="">
          <div className="container w-full xl:w-[90%] 2xl:w-[65%] mx-auto px-3 sm:px-6 lg:px-6">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="md:text-3xl  text-xl font-semibold text-black mb-4">Scope of the Conference</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              <div>
                <p className="text-base lg:text-lg mb-4 text-justify">
                  The International Conference on Emerging Trends in Computer Science & Engineering 2025 serves as a multidisciplinary platform for researchers, practitioners, and industry leaders to present and discuss cutting-edge innovations, challenges, and future directions in the field of computer science and engineering.
                  The conference seeks to explore advancements in algorithms, intelligent systems, secure architectures, sustainable technologies, and emerging solutions that are transforming industries and society.
                  Topics of interest include, but are not limited to, artificial intelligence, cybersecurity, cloud computing, big data analytics, Internet of Things (IoT), robotics, quantum computing, software engineering, computer vision, natural language processing, and next-generation networks.                </p>
                {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                  <div className="text-lg lg:text-[19px] mb-4 text-justify">
                    <h1 className="md:text-2xl mb-2 text-[#528F62] font-semibold">Artificial Intelligence</h1>
                    <div className="2xl:text-lg text-base">
                      <ul className="list-disc list-inside flex flex-col gap-2">
                        <li>Machine Learning & Deep Learning</li>
                        <li>Natural Language Processing (NLP)</li>
                        <li>Computer Vision & Pattern Recognition</li>
                        <li>AI for Edge Devices and IoT</li>
                        <li>AI Ethics and Responsible AI</li>
                      </ul>
                    </div>
                  </div>
                  <div className="text-lg lg:text-[19px] mb-4 text-justify">
                    <h1 className="md:text-2xl mb-2 text-[#528F62] font-semibold">Business Analytics</h1>
                    <div className="2xl:text-lg text-base">
                      <ul className="list-disc list-inside flex flex-col gap-2">
                        <li>Predictive & Prescriptive Analytics</li>
                        <li>Data Mining & Decision Support Systems</li>
                        <li>Big Data Analytics & Visualization</li>
                        <li>Business Intelligence Systems</li>
                        <li>Real-Time Analytics for Smart Business</li>
                      </ul>
                    </div>
                  </div>
                  <div className="text-lg lg:text-[19px] mb-4 text-justify">
                    <h1 className="md:text-2xl mb-2 text-[#528F62] font-semibold"> Cloud Systems</h1>
                    <div className="2xl:text-lg text-base">
                      <ul className="list-disc list-inside flex flex-col gap-2">
                        <li>Cloud Infrastructure & Virtualization</li>
                        <li>Cloud Security & Privacy</li>
                        <li>Edge and Fog Computing</li>
                        <li>Serverless Architecture & Microservices</li>
                        <li>Scalable Cloud Applications</li>
                      </ul>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>
        <section className="text-center mb-3">
          <div className="  mx-auto text-center ">
            <h2 className="md:text-3xl text-xl font-semibold text-black mb-4">Key Dates</h2>
          </div>
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
      </section >
      <ContactSection />
    </>
  );
}