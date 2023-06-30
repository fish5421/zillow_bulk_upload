import React from "react";

const ServicesSection = () => {
    return (
        <div className="service-section">
            <div className="services max-w-5xl mx-auto px-0 pt-28 lg:py-10">
                <h3 className="text-3xl lg:text-[44px] font-bold max-w-xs sm:max-w-4xl lg:max-w-2xl sm:mx-auto text-center leading-[1.15]">
                    Let’s set you up!
                </h3>
                <div className="services-card grid px-10 lg:px-14 xl:px-2 md:grid-cols-2 lg:grid-cols-3 gap-10 py-12 lg:py-14">
                    <div className="services-card-box bg-white border border-slate-500/20 rounded-xl p-6 flex flex-col items-center justify-center gap-y-6">
                        <div className="h-16 w-16 flex items-center justify-center bg-[#F4EDFF] rounded-full">
                            <img
                                className="h-8 w-8 bg-transparent"
                                src="/assets/sign-up-icon-aaac2b35.svg"
                                alt="Sign Up"
                            />
                        </div>
                        <div className="card-content flex flex-col items-center justify-center gap-y-2">
                            <h3 className="text-xl lg:text-2xl font-bold text-[#27392A]">Sign Up</h3>
                            <p className="text-sm text-[#7c7c7c] font-medium">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                            </p>
                        </div>
                    </div>
                    <div className="services-card-box bg-white border border-slate-500/20 rounded-xl p-6 flex flex-col items-center justify-center gap-y-6">
                        <div className="h-16 w-16 flex items-center justify-center bg-[#F4EDFF] rounded-full">
                            <img
                                className="h-8 w-8 bg-transparent"
                                src="/assets/smile-icon-1ae99142.svg"
                                alt="Create Profile"
                            />
                        </div>
                        <div className="card-content flex flex-col items-center justify-center gap-y-2">
                            <h3 className="text-xl lg:text-2xl font-bold text-[#27392A]">Create Profile</h3>
                            <p className="text-sm text-[#7c7c7c] font-medium">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                            </p>
                        </div>
                    </div>
                    <div className="services-card-box bg-white border border-slate-500/20 rounded-xl p-6 flex flex-col items-center justify-center gap-y-6">
                        <div className="h-16 w-16 flex items-center justify-center bg-[#F4EDFF] rounded-full">
                            <img
                                className="h-8 w-8 bg-transparent"
                                src="/assets/linked-icon-adf4ab75.svg"
                                alt="Connect w/ Clients"
                            />
                        </div>
                        <div className="card-content flex flex-col items-center justify-center gap-y-2">
                            <h3 className="text-xl lg:text-2xl font-bold text-[#27392A]">Connect w/ Clients</h3>
                            <p className="text-sm text-[#7c7c7c] font-medium">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;