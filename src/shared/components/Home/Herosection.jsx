import { useRef } from "react";
import Bottom from "../Bottom/Bottom";
import { Link } from "react-router-dom";
import ContactSection from "../Bottom/Bottom";

export default function HeroSection({ data }) {
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
      <section className={`bg-[url("public/images/home/hero-section.webp")] bg-no-repeat bg-cover px-5 md:py-10 h-[calc(100vh-85px)] flex items-center`}>
        <div className="max-w-[100rem] mx-auto flex flex-col items-center justify-center md:py-10 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-center lg:text-left flex flex-col gap-2">
              <h1 className="text-[#FF5722] font-bold md:text-8xl text-xl leading-tight">
                ICETCSE
              </h1>
              <h1 className="text-white font-bold italic md:text-6xl text-xl leading-tight">
                CONFERENCE 2025
              </h1>
              <h1 className="text-white font-medium md:text-xl text-lg leading-tight">
                International Conference on Advances in AI, Business Analytics, and Cloud Systems 2025
              </h1>
              <p className="text-white text-[clamp(1rem,2vw,1.25rem)] pb-5 leading-relaxed">
                October 24, 2025
              </p>
              <Link to='/paper-submission' className="w-fit">
                <button className="px-6 py-3 rounded-lg w-fit text-white bg-[#FF5722] transition text-lg md:text-xl cursor-pointer">
                  Paper Submission
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 flex flex-col gap-10">
        <section className=" ">
          <div className="container w-full xl:w-[90%] 2xl:w-[65%] mx-auto px-4 sm:px-6 lg:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-4">
              <div className="flex justify-center items-center md:px-2 px-2">
                <img alt="About Image" className="rounded-lg shadow-lg" src="/images/home/aboutimage.webp" />
              </div>
              <div>
                <h2 className="md:text-3xl text-xl font-semibold text-black mb-4">About the Event</h2>
                <div> <p className="text-base lg:text-lg mb-4 text-justify">Welcome to ICETCSE, the premier event for exploring the cutting edge of Artificial Intelligence (AI), Business Analytics, and Cloud Systems. Our conference brings together visionary leaders, innovators, and industry pioneers to share insights, drive innovation, and inspire the future of technology in business. </p>
                </div>
                <div> <p className="text-base lg:text-lg mb-4 text-justify">At ICETCSE, we are dedicated to fostering collaboration across disciplines, empowering businesses to harness the potential of AI, transform data into actionable insights, and optimize operations through state-of-the-art cloud solutions. Whether you’re a technology enthusiast, a seasoned professional, or a decision-maker, our conference offers an unparalleled platform to network, learn, and shape tomorrow’s digital landscape.</p>
                </div>
                <div className="bg-[#E64A19] p-3 w-fit rounded-lg text-white cursor-pointer">
                  Read More
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="">
          <div className="container w-full xl:w-[90%] 2xl:w-[65%] mx-auto px-4 sm:px-6 lg:px-6">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="md:text-3xl  text-xl font-semibold text-black mb-4">Scope of the Conference</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              <div>
                <p className="text-base lg:text-lg mb-4 text-justify">
                  The International Conference on Advances in AI, Business Analytics, and Cloud Systems 2025 provides an interdisciplinary forum for researchers, practitioners, and industry leaders to present and discuss innovations, challenges, and trends in Artificial Intelligence, Business Analytics, and Cloud Computing. The conference aims to explore advanced algorithms, data-driven strategies, scalable architectures, and intelligent solutions that drive transformation across industries. Topics of interest include, but are not limited to, machine learning, predictive analytics, cloud infrastructure, intelligent automation, big data platforms, and AI-driven decision support systems.
                </p>
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
                  <div key={index} className="h-auto gap-2 flex flex-col justify-between items-center rounded-xl shadow-lg border border-[#FEDE68] hover:shadow-2xl transition-all duration-300 bg-white p-6"   >
                    <p className="md:text-[20px] mt-2 text-[#E64A19] font-semibold text-center w-full transform transition-transform duration-500 hover:scale-110  ">
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
      </section>
      <ContactSection />
    </>
  );
}