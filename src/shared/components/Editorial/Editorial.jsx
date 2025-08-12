
import React from 'react'
import Edit from './Edit';
import Bottom from '../Bottom/Bottom';

function Editorial() {
    const Tech = [
        { name: "K. Ramesh", position: "V.R.S. College of Engineering and Technology", location: "India" },
        { name: "Muhammad Asif Khan", position: "Qatar University", location: "Qatar" },
        { name: "Siddharth Dabhade", position: "National Forensic Sciences University", location: "India" },
        { name: "Chen Li", position: "Hangzhou TCM Hospital", location: "China" },
        { name: "Putri Mentari Endraswari", position: "University of Bangka Belitung", location: "Indonesia" },
        { name: "Noureddine Seddari", position: "Skikda University", location: "Algeria" },
        { name: "C. Suresh", position: "Sri Ranganathar Institute of Engineering and Technology", location: "India" },
        { name: "Ridwan Mustofa", position: "Khulna University of Engineering & Technology", location: "Bangladesh" },
        { name: "Awais Khan Jumani", position: "ILMA University", location: "Pakistan" },
        { name: "Qiang Tong", position: "Shenzhen Institute of Information Technology", location: "China" },
        { name: "Daniel Ekpenyong Asuquo", position: "University of Uyo", location: "Nigeria" },
        { name: "Maryam Anwer", position: "Majma University", location: "Saudi Arabia" },
        { name: "Ashok Kumar", position: "Skyline University", location: "Nigeria" },
        { name: "Waseem", position: "Jiangsu University", location: "China" },
        { name: "Jay Sarraf", position: "KIIT University", location: "India" },
        { name: "Asef Shahriar", position: "Khulna University of Engineering & Technology", location: "Bangladesh" },
        { name: "K. Nehru", position: "SNS College of Technology", location: "India" },
        { name: "A. Gabriel", position: "Sharda University", location: "Uzbekistan" },
        { name: "Tahir Abbas", position: "TIMES Institute", location: "Pakistan" },
        { name: "Sutikno", position: "University of Diponegoro", location: "Indonesia" },
    ];
    return (
        <>
            <section className='bg-[url("/images/home/contact-image.webp")] bg-no-repeat bg-center bg-cover md:h-[20vh] h-[15vh] w-full flex items-center justify-center'>
                <div className='text-white md:text-3xl text-xl font-bold uppercase'>
                    Editorial Board
                </div>
            </section>
            <section className='pt-10 pb-5'>
                <section className=''>
                    <div className="px-3 lg:max-w-[80%] 2xl:max-w-[70%] mx-auto flex flex-col md:flex-col 2xl:items-start gap-5 lg:gap-5">
                        <div className="text-justify md:text-[18px] leading-relaxed">The Editorial Board of the International Conference on Emerging Trends in Computer Science & Engineering plays a pivotal role in upholding the academic quality and excellence of the event.  Our board members oversee the peer-review process, ensure adherence to the highest standards of research ethics, and provide strategic guidance that reflects the latest developments across diverse domains of computer science and engineering. Their expertise helps shape a conference program that fosters innovation, collaboration, and impactful research contributions.</div>
                    </div>
                    <div className='rounded-lg w-fit mx-auto flex flex-col md:flex-col 2xl:items-start gap-5 lg:gap-5'>
                        <div className="grid bg-white p-3 md:p-6 grid-cols-1 lg:grid-cols-2 md:gap-5 gap-5 mx-auto rounded-lg">
                            {Tech.map((member, index) => (<Edit key={index} position={member.position} department={member.department} name={member.name} location={member.location} />))}
                        </div>
                    </div>
                </section>
            </section>
            <Bottom />
        </>
    )
}

export default Editorial
