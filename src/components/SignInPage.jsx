import React from "react";
import Sidebar from './Sidebar';
import { NavLink } from 'react-router-dom';


const SignIn = () => {

    const handleLogin = async (e) => {
        e.preventDefault()
    }


    return (
        <>
        <div class="h-full">
            <div class="dark:bg-slate-900 bg-gray-100 flex min-h-screen items-start justify-center py-16 overflow-x-hidden">
                <main class="w-screen max-w-6xl mx-auto p-6 space-x-10 flex flex-wrap justify-center">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-3 flex">
                            <div class="mt-7 w-full bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
                                <div class="p-4 sm:p-7">
                                    <div class="text-center">
                                        <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">Sign in</h1>
                                        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                            Don't have an account yet?
                                            <NavLink to="/signup" className="text-sm text-blue-600 decoration-2 hover:underline font-medium">Sign up here</NavLink>

                                        </p>
                                    </div>

                                    <div class="mt-5">
                                        <button type="button" class="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                            <svg class="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                                                <path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z" fill="#4285F4" />
                                                <path d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z" fill="#34A853" />
                                                <path d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z" fill="#FBBC05" />
                                                <path d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z" fill="#EB4335" />
                                            </svg>
                                            Sign in with Google
                                        </button>

                                        <div class="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">Or</div>

                                        <form
                                            onSubmit={handleLogin}>
                                            <div class="grid gap-y-4">
                                                <div>
                                                    <label for="email" class="block text-sm mb-2 dark:text-white">Email address</label>
                                                    <div class="relative">
                                                        <input type="email" id="email" name="email" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" required aria-describedby="email-error" />
                                                        <div class="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                                                            <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <p class="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                                                </div>

                                                <div>
                                                    <div class="flex justify-between items-center">
                                                        <label for="password" class="block text-sm mb-2 dark:text-white">Password</label>
                                                        <NavLink to="/forgotpassword" className="text-sm text-blue-600 decoration-2 hover:underline font-medium">Forgot password?</NavLink>
                                                    </div>
                                                    <div class="relative">
                                                        <input type="password" id="password" name="password" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" required aria-describedby="password-error" />
                                                        <div class="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                                                            <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                            </svg>
                                                        </div>

                                                    </div>
                                                    <p class="hidden text-xs text-red-600 mt-2" id="password-error">8+ characters required</p>
                                                </div>

                                                <div class="flex items-center">
                                                    <div class="flex">
                                                        <input id="remember-me" name="remember-me" type="checkbox" class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                                                    </div>
                                                    <div class="ml-3">
                                                        <label for="remember-me" class="text-sm dark:text-white">Remember me</label>
                                                    </div>
                                                </div>

                                                <button
                                                type="submit" 
                                                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Sign in</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-3 flex">
                            <div class="mt-7 w-full bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">                            
                                <div class="p-4 sm:p-7">
                                    <div class="text-center">
                                        <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">One-Time Payment</h1>
                                        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                            Want to use the product without signing in?
                                            <a class="text-blue-600 decoration-2 hover:underline font-medium" href="../examples/html/one-time-payment.html">
                                                Pay here
                                            </a>
                                        </p>
                                    </div>

                                    <div class="mt-5">
                                        <form>
                                            <div class="grid gap-y-4">
                                                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                                    If you don't want to subscribe and save, you can use our onetime payment option.
                                                        <NavLink
                                                            to="/pricing"
                                                            className="text-blue-600 decoration-2 hover:underline font-medium"
                                                        >
                                                            Pay here
                                                        </NavLink>
                                                </p>
                                                {/* <div>
                                                    <label for="amount" class="block text-sm mb-2 dark:text-white">Payment Amount</label>
                                                    <input type="number" id="amount" name="amount" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" required />
                                                </div> */}

                                                {/* <div>
                                                    <label for="card-info" class="block text-sm mb-2 dark:text-white">Card Information</label>
                                                    <input type="text" id="card-info" name="card-info" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" required placeholder="Card Number" />
                                                    <input type="text" id="expiry-date" name="expiry-date" class="mt-2 py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" required placeholder="MM/YY" />
                                                    <input type="text" id="cvv" name="cvv" class="mt-2 py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" required placeholder="CVV" />
                                                </div> */}

                                                <button type="submit" class="mt-5 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Pay Now</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
        </>

    );
};

export default SignIn;


