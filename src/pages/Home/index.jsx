import { Link } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import { Banner } from "../../components/Banner/Banner";

export const Home = () => {
    return (
        <>
                <Banner title="Already a member?" link="/signin" linkTitle="Sign In"/>
                { /* Home Section */ }
                <main class="bg-gray-100">
                    <div className="relative overflow-hidden">
                        <div aria-hidden="true" class="flex absolute -top-96 start-1/2 transform -translate-x-1/2">
                            <div class="bg-gradient-to-r from-red-500 to-orange-300 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900"></div>
                            <div class="bg-gradient-to-tl from-red-400 via-orange-50 to-orange-300 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70"></div>
                        </div>
                    </div>

                    <div className="relative z-10">
                        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
                            <div class="max-w-2xl text-center mx-auto">
                                <p class="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-red-500 to-orange-400 text-transparent">
                                    Wizstack Student Management System
                                </p>

                                <div class="mt-5 max-w-2xl">
                                    <h1 class="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
                                        Intuitive Student Management System
                                    </h1>
                                </div>

                                <div class="mt-5 max-w-3xl">
                                    <p class="text-lg text-gray-600 dark:text-gray-400">
                                        Wizstack is a student management system that helps students manage their time and study more efficiently.
                                    </p>
                                </div>

                                <div class="mt-8 gap-3 flex justify-center">
                                    <Link to="/signup" className="inline-flex justify-center items-center gap-x-3 text-center hover:text-white bg-gradient-to-tl from-orange-500 to-red-500 hover:from-red-500 hover:to-orange-500 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-white py-3 px-4">
                                    Get Started
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FFFFFF">
                                        <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/>
                                    </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    { /* Expanded Layout & Features */}
                    <section className="text-left">
                        <div className="sm:px-28">
                            <div className="relative flex items-center w-full">
                                <div className="relative items-center w-full px-5 mx-auto md:px-12 lg:px-16 max-w-7xl">
                                    <div className="relative flex-col items-start m-auto align-middle">
                                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
                                            <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
                                                <div className="max-w-xl text-center lg:text-left">
                                                    <div>
                                                        <p className="text-3xl font-semibold tracking-tight text-[#201515] sm:text-5xl">
                                                            Student Management Software
                                                        </p>
                                                        <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                                                            Are you have trouble managing your time? Do you want to study more efficiently? Our student management system is the perfect solution for you. With tailored features
                                                            for students, we ensure that you will be able to manage your time and study more efficiently for anything.
                                                        </p>
                                                    </div>
                                                    <div className="flex justify-center gap-3 mt-10 lg:justify-start">
                                                        <Link to="/about" className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-orange-500 focus:outline-none focus-visible:outline-gray-600">
                                                            <span> Read more &nbsp; → </span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
                                                <img className="object-cover rounded-3xl object-center w-full mx-auto bg-gray-300 lg:ml-auto " alt="hero" src="https://i.pinimg.com/originals/2e/2b/21/2e2b21aeed393403d4620367f9e093f9.gif" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="sm:px-28">
                            <div className="relative flex items-center w-full">
                                <div className="relative items-center w-full px-5 mx-auto md:px-12 lg:px-16 max-w-7xl">
                                    <div className="relative flex-col items-start m-auto align-middle">
                                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
                                            <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
                                                <div className="max-w-xl text-center lg:text-left">
                                                    <div>
                                                        <p className="text-3xl font-semibold tracking-tight text-[#201515] sm:text-5xl">
                                                            Unlimited Customizability
                                                        </p>
                                                        <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                                                            Our student management system is fully customizable based on your needs, we will ensure for our next update and many more to come that
                                                            each student will be able to customize their experience to their liking, no matter what.
                                                        </p>
                                                    </div>
                                                    <div className="flex justify-center gap-3 mt-10 lg:justify-start">
                                                        <Link to="/about" className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-orange-500 focus:outline-none focus-visible:outline-gray-600">
                                                            <span> Read more &nbsp; → </span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
                                                <img className="object-cover rounded-3xl object-center w-full mx-auto bg-gray-300 lg:ml-auto " alt="hero" src="https://i.pinimg.com/originals/2e/2b/21/2e2b21aeed393403d4620367f9e093f9.gif" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    { /* Feature Section */ }
                    <section className="relative z-10 max-w-3xl text-center mx-auto">
                        <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
                            What Makes Wizstack a Good Choice?
                        </h1>

                        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                            <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3">
                                <div className="p-8 border-b sm:border-r">
                                    <div className="max-w-md text-center">
                                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-orange-500 sm:w-16 sm:h-16">
                                        <svg
                                            className="w-8 h-8 text-deep-purple-accent-400 sm:w-12 sm:h-12"
                                            stroke="currentColor"
                                            viewBox="0 0 52 52"
                                        >
                                            <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                            />
                                        </svg>
                                        </div>
                                        <h6 className="mb-2 font-semibold leading-5">Student Centric</h6>
                                        <p className="mb-3 text-sm text-gray-900">
                                            Our management system revolves around student needs. We ensure that each student
                                            will benefit and be able to use our system to their advantage.
                                        </p>
                                    </div>
                                </div>
                                <div className="p-8 border-b lg:border-r">
                                    <div className="max-w-md text-center">
                                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-orange-500 sm:w-16 sm:h-16">
                                        <svg
                                            className="w-8 h-8 text-deep-purple-accent-400 sm:w-12 sm:h-12"
                                            stroke="currentColor"
                                            viewBox="0 0 52 52"
                                        >
                                            <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                            />
                                        </svg>
                                        </div>
                                        <h6 className="mb-2 font-semibold leading-5">Simple Design</h6>
                                        <p className="mb-3 text-sm text-gray-900">
                                            Our management system is simple and easy to use. Each student will be able to
                                            use our system without any hassle, giving them more time back to study.
                                        </p>
                                    </div>
                                </div>
                                <div className="p-8 border-b sm:border-r lg:border-r-0">
                                    <div className="max-w-md text-center">
                                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-orange-500 sm:w-16 sm:h-16">
                                        <svg
                                            className="w-8 h-8 text-deep-purple-accent-400 sm:w-12 sm:h-12"
                                            stroke="currentColor"
                                            viewBox="0 0 52 52"
                                        >
                                            <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                            />
                                        </svg>
                                        </div>
                                        <h6 className="mb-2 font-semibold leading-5">Endless Posibilities</h6>
                                        <p className="mb-3 text-sm text-gray-900">
                                            As our management system is fully customizable, each student is given endless
                                            possibilities to customize their experience to their liking.
                                        </p>
                                    </div>
                                </div>
                                <div className="p-8 border-b lg:border-b-0 lg:border-r">
                                    <div className="max-w-md text-center">
                                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-orange-500 sm:w-16 sm:h-16">
                                        <svg
                                            className="w-8 h-8 text-deep-purple-accent-400 sm:w-12 sm:h-12"
                                            stroke="currentColor"
                                            viewBox="0 0 52 52"
                                        >
                                            <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                            />
                                        </svg>
                                        </div>
                                        <h6 className="mb-2 font-semibold leading-5">Timetable Tracker</h6>
                                        <p className="mb-3 text-sm text-gray-900">
                                            With our detailed timetable tracker, and alerts that will remind you of your
                                            next assignment, you will never miss out on anything again.
                                        </p>
                                    </div>
                                </div>
                                <div className="p-8 border-b sm:border-b-0 sm:border-r">
                                    <div className="max-w-md text-center">
                                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-orange-500 sm:w-16 sm:h-16">
                                        <svg
                                            className="w-8 h-8 text-deep-purple-accent-400 sm:w-12 sm:h-12"
                                            stroke="currentColor"
                                            viewBox="0 0 52 52"
                                        >
                                            <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                            />
                                        </svg>
                                        </div>
                                        <h6 className="mb-2 font-semibold leading-5">Constant Features</h6>
                                        <p className="mb-3 text-sm text-gray-900">
                                            We are constantly updating our management system, adding new features 
                                            and improving existing ones. Our communities feedback is our top priority.
                                        </p>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="max-w-md text-center">
                                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-orange-500 sm:w-16 sm:h-16">
                                        <svg
                                            className="w-8 h-8 text-deep-purple-accent-400 sm:w-12 sm:h-12"
                                            stroke="currentColor"
                                            viewBox="0 0 52 52"
                                        >
                                            <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                            />
                                        </svg>
                                        </div>
                                        <h6 className="mb-2 font-semibold leading-5">Completely Free, Forever</h6>
                                        <p className="mb-3 text-sm text-gray-900">
                                            Last but not least, our management systems is completely free, and will
                                            stay that way, forever. We put our values for our students first, and
                                            we will never change that.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
        </>
    );
};