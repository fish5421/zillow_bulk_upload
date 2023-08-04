import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";



const Sidebar = ({ isOpen, onClose }) => {
    // const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const navigate = useNavigate();  // Add this line
    const location = useLocation();

    // Function to determine if the current route matches the passed route
    const isCurrentRoute = (route) => {
        return location.pathname === route;
    }


    return (
        <div>
            <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                class="inline-flex p-2 mt-2 ml-3 text-sm lg:hidden text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            // onClick ={() => setIsSidebarVisible(!isSidebarVisible)}
            >
                <span class="sr-only">Open sidebar</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50">
                    <a href="/" class="flex items-center pl-2.5 mb-5">
                        <img src="https://bulk-upload-assets.s3.amazonaws.com/Screenshot_2023-07-02.png" class="h-8 mr-3 sm:h-9" alt="Flowbite Logo" />
                        <span class="text-gray-100 self-center text-xl font-semibold whitespace-nowrap dark:text-white">Analytics Ariel</span>
                    </a>
                    <ul class="space-y-2 font-medium">
                        <li>
                            <a
                                onClick={() => navigate('/')}
                                class={`flex items-center p-2 rounded-lg dark:hover:bg-gray-700 ${isCurrentRoute('/') ? 'text-gray-900 bg-gray-100 dark:text-white' : 'hover:text-gray-600 text-gray-100 hover:bg-gray-100 dark:text-gray-100'}`}>
                                <svg width="26" height="26" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.75 9.938V21a.75.75 0 0 0 .75.75H9v-6.375a1.125 1.125 0 0 1 1.125-1.125h3.75A1.125 1.125 0 0 1 15 15.375v6.375h4.5a.75.75 0 0 0 .75-.75V9.937"></path>
                                    <path d="m22.5 12-9.99-9.563c-.234-.248-.782-.25-1.02 0L1.5 11.999"></path>
                                    <path d="M18.75 8.39V3H16.5v3.234"></path>
                                </svg>
                                <span class="ml-3">Home</span>
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => navigate('/contact')}
                                class={`flex items-center p-2 rounded-lg dark:hover:bg-gray-700 ${isCurrentRoute('/contact') ? 'text-gray-900 bg-gray-100 dark:text-white' : 'hover:text-gray-600 text-gray-100 hover:bg-gray-100 dark:text-gray-100'}`}>
                                <svg width="26" height="26" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.045 12.71 2.023 20.968a.367.367 0 0 1-.523-.328v-5.312a.375.375 0 0 1 .305-.368l11.607-2.203c.814-.155.814-1.32 0-1.474L1.805 9.08a.375.375 0 0 1-.305-.368v-5.31c0-.268.276-.48.523-.374l20.022 8.305a.75.75 0 0 1 0 1.377Z"></path>
                                </svg>
                                <span class="ml-3">Contact</span>
                            </a>
                        </li>
                        <li>
                            <a onClick={() => navigate('/about')} 
                                class={`flex items-center p-2 rounded-lg dark:hover:bg-gray-700 ${isCurrentRoute('/about') ? 'text-gray-900 bg-gray-100 dark:text-white' : 'hover:text-gray-600 text-gray-100 hover:bg-gray-100 dark:text-gray-100'}`}>
                                <svg width="26" height="26" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.25 19.493V3.375a1.128 1.128 0 0 0-1.125-1.125H3.375A1.128 1.128 0 0 0 2.25 3.375v16.5a1.88 1.88 0 0 0 1.875 1.875H19.5"></path>
                                    <path d="M19.5 21.75a2.25 2.25 0 0 1-2.25-2.25V6h3.375a1.125 1.125 0 0 1 1.125 1.125V19.5a2.25 2.25 0 0 1-2.25 2.25Z"></path>
                                    <path d="M11.25 6h3"></path>
                                    <path d="M11.25 9h3"></path>
                                    <path d="M5.25 12h9"></path>
                                    <path d="M5.25 15h9"></path>
                                    <path d="M5.25 18h9"></path>
                                    <path fill="currentColor" stroke="none" d="M8.25 9.75h-3A.75.75 0 0 1 4.5 9V6a.75.75 0 0 1 .75-.75h3A.75.75 0 0 1 9 6v3a.75.75 0 0 1-.75.75Z"></path>
                                </svg>
                                <span class="ml-3 whitespace-nowrap">About</span>
                                {/* <span class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
                            </a>
                        </li>
                        {/* <li>
                            <a
                                onClick={() => navigate('/pricing')}
                                class={`flex items-center p-2 rounded-lg dark:hover:bg-gray-700 ${isCurrentRoute('/pricing') ? 'text-gray-900 bg-gray-100 dark:text-white' : 'hover:text-gray-600 text-gray-100 hover:bg-gray-100 dark:text-gray-100'}`}>
                                <svg width="26" height="26" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.5 6.75h-15A2.25 2.25 0 0 0 2.25 9v9a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25Z"></path>
                                    <path d="M19.282 6.75V5.342A2.344 2.344 0 0 0 16.5 3.041L4.155 5.148A2.344 2.344 0 0 0 2.25 7.452V9.75"></path>
                                    <path fill="currentColor" stroke="none" d="M17.25 15a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"></path>
                                </svg>
                                <span class="ml-3">Pricing</span>
                            </a>
                        </li> */}

                    </ul>
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;
