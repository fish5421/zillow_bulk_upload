import React from 'react';
import Sidebar from './Sidebar';

const About = () => {
    return (
        <div className="bg-gray-100 min-h-screen relative">
            <Sidebar />
            <div className="container mx-auto px-4 md:px-0">

                <div className="md:w-1/2 mx-auto bg-white p-8 shadow rounded-md">
                    <h2 className="text-2xl font-bold text-center mb-5">About Us</h2>

                    <p className="text-center text-gray-600 mb-5">
                        We are a team of dedicated real estate investors who have built this tool to democratize real estate data. With our tool, you no longer need to be an industry insider to make informed real estate decisions.
                    </p>

                    <p className="text-center text-gray-600 mb-5">
                        Our tool provides over 100 data points about each property to help you make the best possible decision. Whether you're buying your first home, investing in your next property, or just exploring the market, our tool provides the data you need to make informed decisions.
                    </p>

                    <p className="text-center text-gray-600 mb-5">
                        We believe in transparency, accuracy, and usability in real estate data. We strive to provide the most accurate and up-to-date data in a user-friendly format. Join us in revolutionizing the real estate industry.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
