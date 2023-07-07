// import { Sidebar } from 'flowbite-react';
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const maxNameLength = 50;
    const maxEmailLength = 100;
    const maxMessageLength = 1000;

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validation
        if (name === '' || email === '' || message === '') {
            toast.error('All fields must be filled out');
            return;
        }

        const sanitized_name = name.replace(/[^a-zA-Z-' ]/g, '');
        const emailPattern = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;
        const is_email_valid = emailPattern.test(email);
        if (!is_email_valid) {
            toast.error('Please enter a valid email address', { autoClose: 3000 });
            return;
        }
        const sanitized_message = message.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');

            const apiGatewayEndpoint = 'https://xaoqqf5kcd.execute-api.us-east-1.amazonaws.com/default/bulkUploadEmailSender';

            try {
                const response = await fetch(apiGatewayEndpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: sanitized_name,
                        email,
                        message: sanitized_message,
                    }),
                });

                if (response.ok) {
                    setName('');
                    setEmail('');
                    setMessage('');
                    toast.success('Message sent successfully', { autoClose: 3000 });
                    window.location.reload(); // refresh the page to clear the form
                } else {
                    toast.error('Message not sent', { autoClose: 3000 });
                }
            } catch (error) {
                toast.error('An error occurred. Please try again.', { autoClose: 3000 });
            }
        };
 



    return (
        <>
            <div className="bg-black-50 min-h-screen relative flex flex-col sm:flex-row justify-center items-start pt-10">
                <div className="fixed sm:static top-0 left-0 h-full sm:w-0">
                    <Sidebar />
                </div>
                <div className="container w-full sm:w-auto mx-auto px-4 sm:px-0 pl-0 sm:pl-60"> {/* left padding equal to the width of the sidebar on screens larger than 640px */}
                    <div className=" md:w-3/4 lg:w-3/4 xl:w-3/4 mx-auto bg-gray-50 p-8 shadow rounded-md">
                        <h2 className="text-2xl font-bold text-center mb-5 text-white">Contact Us</h2>

                        <p className="text-center text-white mb-5">
                            We're here to help! Whether you have questions about our products, need technical support,
                            or just want to give us some feedback, our customer service team is ready to hear from you.
                        </p>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-5">
                                <label htmlFor="name" className="block mb-2 text-sm text-white">Name</label>
                                <input id="name" type="text" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} maxLength={maxNameLength} />
                                <p className="text-left text-sm text-gray-500">{name.length}/{maxNameLength}</p>
                            </div>

                            <div className="mb-5">
                                <label htmlFor="email" className="block mb-2 text-sm text-white">Email</label>
                                <input id="email" type="email" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} maxLength={maxEmailLength} />
                                <p className="text-left text-sm text-gray-500">{email.length}/{maxEmailLength}</p>
                            </div>

                            <div className="mb-5">
                                <label htmlFor="message" className="block mb-2 text-sm text-white">Message</label>
                                <textarea id="message" rows="4" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" placeholder="Enter your message" value={message} onChange={(e) => setMessage(e.target.value)} maxLength={maxMessageLength}></textarea>
                                <p className="text-left text-sm text-gray-500">{message.length}/{maxMessageLength}</p>
                            </div>

                            <button type="submit" className="w-full py-2 px-4 text-center bg-indigo-500 rounded-md text-white text-sm hover:bg-indigo-600 focus:outline-none">Submit</button>
                        </form>
                        <ToastContainer position="bottom-right" />

                    </div>
                </div>
            </div>
        </>

    );
};

export default Contact;
