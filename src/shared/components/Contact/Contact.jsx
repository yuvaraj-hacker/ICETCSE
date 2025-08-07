import React, { useState } from 'react'
import { toast } from 'react-toastify';


function Contact() {
    const [formData, setFormData] = useState({ firstname: "", email: "", number: "", message: "" });
    const [status, setStatus] = useState('');
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('firstname', formData.firstname);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('number', formData.number);
            formDataToSend.append('message', formData.message);
            const response = await fetch('http://192.168.1.30/ICAABC/message_mail.php', {
                method: 'POST',
                body: formDataToSend,
            });
            if (response.ok) {
                const result = await response.text();
                setStatus(result);
                setFormData({ firstname: '', email: '', number: '', message: '', });
                toast.success("submitted successfully!");
                console.log("success")
            } else {
                setStatus('Failed to send submission. Please try again.');
                toast.error('Failed to send submission. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('An error occurred. Please try again.');
            toast.error('An error occurred. Please try again.');
        }
    };

    return (
        <>
            <section>
                <div className="flex flex-col items-center  py-10    ">
                    <div className=" px-6 xl:px-20 w-full xl:w-[70%] mx-auto">
                        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">Contact Us</h2>
                    </div>
                    <div className="grid md:grid-cols-1 gap-5 grid-cols-1  px-6 w-full max-w-[40rem]">
                        <div className="flex flex-col gap-4 md:gap-6 md:px-9 bg-[#F8F9FA] p-4 md:p-8 rounded-xl shadow-lg w-full border-y-3 border-[#528F62]">
                            <h1 className="md:text-xl text-lg font-medium text-[#528F62] text-center">Send us a Message</h1>
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="firstname">First Name</label>
                                    <input type="text" name="firstname" id="firstname" value={formData.firstname} onChange={handleChange} placeholder="Enter your name" className="w-full h-12 p-2 text-lg  bg-white rounded-lg border border-gray-100 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600" required />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" className="w-full h-12 p-2 text-lg border rounded-lg  bg-white  border-gray-100 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600" required />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="number">Number</label>
                                    <input type="text" name="number" id="number" onChange={handleChange} value={formData.number} placeholder="Enter your number" className="w-full h-12 p-2 text-lg border rounded-lg bg-white  border-gray-100 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600" required />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="message">Message</label>
                                    <textarea name="message" id='message' value={formData.message} onChange={handleChange} placeholder="Enter your message" className="w-full h-40 p-4 text-lg border rounded-lg  bg-white border-gray-100 shadow-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-600" required   ></textarea>
                                </div>
                                <button type="submit" className="w-full cursor-pointer p-3   bg-[#008235] text-white font-bold rounded-md hover:bg-[#008235] flex justify-center items-center gap-2"  >
                                    {status === 'Sending...' ? 'Submitting...' : 'Send message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
