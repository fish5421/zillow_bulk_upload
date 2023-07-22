import React from 'react';
import Sidebar from './Sidebar';

const About = () => {
    return (
        <div className="bg-black-50 min-h-screen relative flex flex-col sm:flex-row justify-center items-start pt-10">
            <div className="fixed sm:static top-0 left-0 h-full sm:w-0">
                <Sidebar />
            </div>
            <div className="container w-full sm:w-auto mx-auto px-4 sm:px-0 pl-0 sm:pl-60"> {/* left padding equal to the width of the sidebar on screens larger than 640px */}
                <div className="md:w-3/4 lg:w-3/4 xl:w-3/4 mx-auto bg-gray-50 p-8 shadow rounded-md">
                    <h2 className="text-2xl font-bold text-center mb-5 text-white">About Us</h2>

                    <p className="text-center text-white mb-5">
                        We are a team of dedicated real estate investors who have built this tool to democratize real estate data. With our tool, you no longer need to be an industry insider to make informed real estate decisions.
                    </p>

                    <p className="text-center text-white mb-5">
                        Our tool provides over 100 data points about each property to help you make the best possible decision. Whether you're buying your first home, investing in your next property, or just exploring the market, our tool provides the data you need to make informed decisions.
                    </p>

                    <p className="text-center text-white mb-5">
                        We believe in transparency, accuracy, and usability in real estate data. We strive to provide the most accurate and up-to-date data in a user-friendly format. Join us in revolutionizing the real estate industry.
                    </p>
                    <p className="text-center text-white mb-5">
                        For more in-depth discussions and insights on real estate technology, check out our&nbsp;
                        <a href="https://www.youtube.com/@TechInRealEstate" target="_blank" rel="noopener noreferrer" className="underline text-indigo-500 hover:text-indigo-600">YouTube channel, Tech in Real Estate</a>.
                        We also invite you to visit our &nbsp;
                        <a href="https://www.analyticsariel.com/" target="_blank" rel="noopener noreferrer" className="underline text-indigo-500 hover:text-indigo-600">website</a>&nbsp;
                        for more information and resources.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default About;
