
import React from 'react'
import Edit from './Edit';
import Bottom from '../Bottom/Bottom';

function Editorial() {
    const Tech = [
        { name: "A. Antonidoss", department: "Department of Computer Science and Business Systems", position: "Hindustan Institute of Technology", location: "India" },
        { name: "Nguyen Van Thieu", department: "Department of Computer Science and Engineering", position: "Phenikaa University", location: "Vietnam" },
        { name: "Sakthivel Velusamy", department: "Department of Aerospace Information Engineering", position: "Konkuk University", location: "South Korea" },
        { name: "T. Jayasankar", department: "Department of Electronics and Communication Engineering", position: "University College of Engineering(BIT Campus)", location: "India" },
        { name: "Asad Aziz", department: "Department of Geography", position: "University of Gujrat", location: "Pakistan" },
        { name: "Alamu Olumide", department: "Department of Electrical and Electronics Engineering", position: "University of Lagos", location: "Nigeria" },
        { name: "Hansi Gunasinghe", department: "Department of Computing and Information Systems", position: "Sabaragamuwa University", location: "Sri Lanka" },
        { name: "Theopilus Bayu Sasongko", department: "Department of Informatics", position: "University of Amikom Yogyakarta", location: "Indonesia" },
        { name: "Daban Kadhim Omar Dabbagh", department: "Department of Geography", position: "Salahaddin University", location: " Iraq" },
        { name: "Argha Chandra Dhar", department: "Department of Computer Science and Engineering", position: "Khulna University of Engineering and Technology", location: "Bangladesh" },
        { name: "A.Karthikeyan", department: "Department of Electronics and Communication Engineering", position: "SNS College of Technology", location: "India" },
        { name: "Moses Adah Agana", department: "Department of Computer Science and Engineering", position: "University of Calabar", location: "Nigeria" },
        { name: "Md Nahiduzzaman", department: "Department of Electronics and Communication Engineering", position: "Rajshahi University of Engineering and Technology", location: "Bangladesh" },
        { name: "Zhihao Li", department: "Department of Economics and Social Sciences", position: "Nanjing Agricultural University", location: "China" },
        { name: "Muhammad Suleman Memon", department: "Department of Information Technology", position: "University of Sindh", location: "Pakistan" },
        { name: "Thendral Puyalnithi", department: "Department of Computer Science and Engineering", position: "Kalasalingam Academy of Research and Education", location: "India" },
        { name: "S. Prasanth", department: "Department of Physical Sciences and Technology", position: "Sabaragamuwa University of Sri Lanka", location: "Sri Lanka" },
        { name: "Aaron Izang", department: "Department of Information Technology", position: "Babcock University", location: "Nigeria" },
        { name: "D. Kayathri Devi", department: "Department of Information Technology and Engineering", position: "Amity University", location: "Uzbekistan" },
        { name: "P. Tamizharasi", department: "Department of Electrical and Electronics Engineering", position: "Adhiparasakthi Engineering College", location: "India" },
    ];
    return (
        <>
            <section className='bg-[#F3F4F6] pt-10'>
                <section className=' '>
                    <div className="text-center">
                        <h1 className="text-3xl md:text-4xl font-bold pb-6 text-[#528F62] relative inline-block after:content-[''] after:block after:w-40">
                            Editorial Board
                        </h1>
                    </div>
                    <div className="max-w-[90%] lg:max-w-[80%] 2xl:max-w-[70%] mx-auto flex flex-col md:flex-col 2xl:items-start gap-5 lg:gap-5">
                        <div className="text-justify md:text-[18px] leading-relaxed">
                            The Editorial Board of the International Conference on Advances in AI, Business Analytics, and Cloud Systems plays a crucial role in maintaining the academic integrity and excellence of the event. Our board members guide the peer-review process, ensure the highest standards of ethical publishing, and contribute strategic insights that align with the evolving frontiers of artificial intelligence, business intelligence, and cloud technologies.
                        </div>
                    </div>
                    <div className='bg-gray-100 md:p-6 p-3 rounded-lg  w-fit   mx-auto flex flex-col md:flex-col 2xl:items-start gap-5 lg:gap-5'>
                        <div className="grid bg-white p-3 md:p-6 grid-cols-1 lg:grid-cols-2 md:gap-5 gap-5 mx-auto rounded-lg border-y-3 border-y-[#528F62]">
                            {Tech.map((member, index) => (
                                <Edit key={index} position={member.position} department={member.department} name={member.name} location={member.location} />
                            ))}
                        </div>
                    </div>
                </section>
            </section>
            <Bottom />
        </>
    )
}

export default Editorial
