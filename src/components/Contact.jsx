// import { Sidebar } from 'flowbite-react';
import React, { useState } from 'react';
import Sidebar from './Sidebar';


const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                message,
            }),
        });

        if (response.ok) {
            console.log('Message sent successfully');
        } else {
            console.log('Message not sent');
        }
    };

// In your form:
// <form onSubmit={handleSubmit} ... >


    return (
        <div className="bg-gray-100 min-h-screen relative">
            <Sidebar />
            <div className="container mx-auto px-4 md:px-0">

                <div className="md:w-1/2 mx-auto bg-white p-8 shadow rounded-md">
                    <h2 className="text-2xl font-bold text-center mb-5">Contact Us</h2>

                    <p className="text-center text-gray-600 mb-5">
                        We're here to help! Whether you have questions about our products, need technical support,
                        or just want to give us some feedback, our customer service team is ready to hear from you.
                    </p>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <label htmlFor="name" className="block mb-2 text-sm text-gray-600">Name</label>
                            <input id="name" type="text" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="email" className="block mb-2 text-sm text-gray-600">Email</label>
                            <input id="email" type="email" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="message" className="block mb-2 text-sm text-gray-600">Message</label>
                            <textarea id="message" rows="4" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" placeholder="Enter your message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        </div>

                        <button type="submit" className="w-full py-2 px-4 text-center bg-indigo-500 rounded-md text-white text-sm hover:bg-indigo-600 focus:outline-none">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
