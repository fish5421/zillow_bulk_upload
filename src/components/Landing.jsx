import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div>
            <div className="navbar-home top-0 py-2 lg:py-5 w-full bg-transparent lg:relative z-50">
                <nav className="z-10 sticky top-0 left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto px-5 py-2.5 lg:border-none lg:py-4">
                    <div className="flex items-center justify-between">
                        <button>
                            <div className="header-logo flex items-center space-x-2">
                                <h2 className="text-black font-bold text-2xl">Service SaaS</h2>
                            </div>
                        </button>
                        <div className="header-menu hidden  lg:flex items-center gap-x-10">
                            <ul className="flex space-x-10 text-base font-bold text-black/60">
                                <li>
                                    <a href="#">
                                        <button>About</button>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <button>Services</button>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <button>Login</button>
                                    </a>
                                </li>
                            </ul>
                            <div className="hidden lg:flex lg:items-center">
                                <button className="flex items-center text-white justify-center rounded-lg bg-[#7639DA] px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200">
                                    <span>Join now</span>
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center justify-center lg:hidden">
                            <button className="advanced-setting-toggle focus:outline-none text-slate-200">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 20 20"
                                    aria-hidden="true"
                                    className="text-2xl text-slate-800 focus:outline-none active:scale-110 active:text-red-500"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="main-hero-section relative py-14 px-7 md:px-10 xl:px-0">
                <div className="main-hero-container max-w-5xl pb-44 lg:pb-24 mx-auto text-center flex flex-col gap-y-5 justify-center items-center">
                    <h2 className="font-bold text-[#27392A] text-5xl lg:text-7xl max-w-3xl mx-auto rounded-5xl">
                        Offer{" "}
                        <span className="purple-underline-1">your</span> service at{" "}
                        <span className="purple-underline-2">your</span> price.
                    </h2>
                    <p className="max-w-lg text-sm lg:text-lg mx-auto">
                        Get help around the house from a trusted Tasker. From handyman work
                        and furniture assembly to moving, yardwork
                    </p>
                </div>
                <div className="form-section-container absolute -bottom-36 lg:-bottom-10 left-0 right-0 max-w-5xl p-10 mx-auto py-20">
                    <div className="form-section flex flex-col gap-y-5 lg:flex-row justify-between items-center gap-x-5 mt-3.5 p-5 rounded-xl border border-slate-500/50 bg-white">
                        <div className="w-full">
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                className="flex w-full rounded-lg border border-gray-300 p-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6469ff] placeholder:text-slate-500/40 placeholder:font-bold"
                                placeholder="Name"
                                required=""
                                value=""
                            />
                        </div>
                        <div className="w-full">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="flex w-full rounded-lg border border-gray-300 p-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6469ff] placeholder:text-slate-500/40 placeholder:font-bold"
                                placeholder="Email"
                                required=""
                                value=""
                            />
                        </div>
                        <div className="w-full">
                            <div className="font-medium">
                                <div className="relative">
                                    <button
                                        className="relative w-full cursor-pointer rounded-lg bg-white border border-slate-500/20 p-2.5 px-3 text-left focus:outline-none focus:ring focus:ring-indigo-500/50 text-base"
                                        id="headlessui-listbox-button-:r0:"
                                        type="button"
                                        aria-haspopup="listbox"
                                        aria-expanded="false"
                                        data-headlessui-state=""
                                    >
                                        <span className="block truncate">
                                            <span className="text-slate-500/40">Choose your service</span>
                                        </span>
                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth="0"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                                className="h-5 w-5 text-gray-400"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M11.47 4.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 01-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 01-1.06-1.06l3.75-3.75zm-3.75 9.75a.75.75 0 011.06 0L12 17.69l3.22-3.22a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 010-1.06z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <button className="w-full flex items-center text-white justify-center rounded-lg bg-[#7639DA] px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200">
                                <span>Join now</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ServicesSection/>
        </div>
    );
};


export default LandingPage;