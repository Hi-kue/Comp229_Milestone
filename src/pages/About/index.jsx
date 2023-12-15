import React from 'react';
import tmonA from '../../assets/avatars/tmonA.png';
import tmonB from '../../assets/avatars/tmonB.png';
import tmonC from '../../assets/avatars/tmonC.png';

export const About = () => {
    return (
        <div>
            { /* About Section (IMPLEMENT SOON) */ }

            {/* Services & Features Section */}
            <section className='bg-gray-100'>
                <div className='container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5'>
                    <h2 class="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Services & Features</h2>
                    <p class="mb-12 text-lg text-gray-500">Here are some Services and Features that we provide!</p>
                    <div class="w-full">
                        <div class="flex flex-col w-full mb-10 sm:flex-row">
                            <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                                <div class="relative h-full ml-0 mr-0 sm:mr-10">
                                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-orange-500  rounded-lg"></span>
                                    <div class="relative h-full p-5 bg-gray-100 border-2 border-orange-500 rounded-lg">
                                        <div class="flex items-center -mt-1">
                                            <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Course List</h3>
                                        </div>
                                        <p class="mt-3 mb-1 text-xs font-medium text-orange-400 uppercase">------------</p>
                                        <p class="mb-2 text-gray-600">
                                            We provide a course API that allows you to view all the courses that are available,
                                            as well as the course details for each specific course.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full sm:w-1/2">
                                <div class="relative h-full ml-0 md:mr-10">
                                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-orange-500  rounded-lg"></span>
                                    <div class="relative h-full p-5 bg-gray-100 border-2 border-orange-500 rounded-lg">
                                        <div class="flex items-center -mt-1">
                                            <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Comprehensive Dashboard</h3>
                                        </div>
                                        <p class="mt-3 mb-1 text-xs font-medium text-orange-400 uppercase">------------</p>
                                        <p class="mb-2 text-gray-600">
                                            We provide a comprehensive dashboard that allows for any student to easily manage their
                                            daily tasks and assignments, coupled with a timetable and course list to help you stay
                                            on track.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col w-full mb-5 sm:flex-row">
                            <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                                <div class="relative h-full ml-0 mr-0 sm:mr-10">
                                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-orange-500  rounded-lg"></span>
                                    <div class="relative h-full p-5 bg-gray-100 border-2 border-orange-500 rounded-lg">
                                        <div class="flex items-center -mt-1">
                                            <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Community</h3>
                                        </div>
                                        <p class="mt-3 mb-1 text-xs font-medium text-orange-400 uppercase">------------</p>
                                        <p class="mb-2 text-gray-600">
                                            With a strong sense of community, you can be sure that you will be able to find help
                                            whenever you need it. Talk with students who are in similar situations as you and
                                            help each other out!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                                <div class="relative h-full ml-0 mr-0 sm:mr-10">
                                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-orange-500  rounded-lg"></span>
                                    <div class="relative h-full p-5 bg-gray-100 border-2 border-orange-500 rounded-lg">
                                        <div class="flex items-center -mt-1">
                                            <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Timetable & Calender</h3>
                                        </div>
                                        <p class="mt-3 mb-1 text-xs font-medium text-orange-400 uppercase">------------</p>
                                        <p class="mb-2 text-gray-600">
                                            Our timetable and calender allows you to easily manage your daily tasks and assignments.
                                            You can also view your course schedule and see when your next class is, or check out 
                                            the calender to see when your next assignment is due!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full sm:w-1/2">
                                <div class="relative h-full ml-0 md:mr-10">
                                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-orange-500  rounded-lg"></span>
                                    <div class="relative h-full p-5 bg-gray-100 border-2 border-orange-500 rounded-lg">
                                        <div class="flex items-center -mt-1">
                                            <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">24/7 Support</h3>
                                        </div>
                                        <p class="mt-3 mb-1 text-xs font-medium text-orange-400 uppercase">------------</p>
                                        <p class="mb-2 text-gray-600">
                                            Having trouble with something? No worries! We provide 24/7 support to help you with any issue
                                            that you might have regarding our services. Please not that we are not responsible for any
                                            issues that you might have with your school or university, or any issues with deadlines 
                                            that you might miss.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            { /* Testimonials Section */}
            <section className='bg-gray-100'>
                <div class="p-4 mx-auto max-w-7xl">
                    <div class="mb-32 text-center">
                        <h1 class="mb-4 text-3xl font-bold text-black">Testimonials</h1>
                        <p class="max-w-xl mx-auto text-gray-500">
                            Hear what other students have to say about our dashboard managment system and how it has
                            helped them to manage their daily tasks.
                        </p>
                    </div>
                    <div class="flex ">
                        <div class="grid grid-cols-1 gap-4 lg:gap-4 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            <a class="relative mb-20 text-center bg-white rounded shadow" href="#">
                                <div class="z-20 p-8 -mt-24">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                        class="absolute w-20 h-20 top-4 left-4 opacity-10" viewBox="0 0 16 16">
                                        <path
                                            d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                    </svg>
                                    <div
                                        class="inline-block w-32 h-32 mb-3 overflow-hidden text-xs text-white bg-orange-500 rounded-full">
                                        <img class="object-cover w-full h-full transition-all hover:scale-110"
                                            src={tmonB}
                                            alt="" />
                                    </div>
                                    <p class="mb-4 text-base leading-7 text-gray-400">
                                       I've been using other tools to manage my daily tasks and assignments, but this dashboard has been the best so far. 
                                       It's easy to use and has a great user interface. I would recommend it to everyone, especially students!

                                    </p>
                                    <h2 class="text-lg font-bold leading-9 text-black ">
                                        Elizabeth Frazier
                                    </h2>
                                    <span class="block text-xs font-semibold text-orange-500 uppercase">
                                        Student at Guelph University
                                    </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                        class="absolute w-20 h-20 rotate-180 bottom-4 right-4 opacity-10" viewBox="0 0 16 16">
                                        <path

                                            d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                    </svg>
                                </div>
                            </a>
                            <a class="relative mb-20 text-center bg-white rounded shadow" href="#">
                                <div class="z-20 p-8 -mt-24">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                        class="absolute w-20 h-20 top-4 left-4 opacity-10" viewBox="0 0 16 16">
                                        <path
                                            d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                    </svg>
                                    <div
                                        class="inline-block w-32 h-32 mb-3 overflow-hidden text-xs text-white bg-orange-500 rounded-full">
                                        <img class="object-cover w-full h-full transition-all hover:scale-110"
                                            src={tmonA} alt="" />
                                    </div>
                                    <p class="mb-4 text-base leading-7 text-gray-400">
                                        When I first started using this dashboard, I was able to manage my daily tasks and
                                        assignments with ease. No more missing deadlines!
                                    </p>
                                    <h2 class="text-lg font-bold leading-9 text-black">
                                        Micheal Anthony
                                    </h2>
                                    <span class="block text-xs font-semibold text-orange-500 uppercase">
                                        Student at Clark University
                                    </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                        class="absolute w-20 h-20 rotate-180 bottom-4 right-4 opacity-10" viewBox="0 0 16 16">
                                        <path
                                            d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                    </svg>
                                </div>
                            </a>
                            <a class="relative mb-20 text-center bg-white rounded shadow" href="#">
                                <div class="z-20 p-8 -mt-24">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                        class="absolute w-20 h-20 top-4 left-4 opacity-10" viewBox="0 0 16 16">
                                        <path
                                            d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                    </svg>
                                    <div
                                        class="inline-block w-32 h-32 mb-3 overflow-hidden text-xs text-white bg-orange-500 rounded-full">
                                        <img class="object-cover w-full h-full transition-all hover:scale-110"
                                            src={tmonC}
                                            alt="" />
                                    </div>
                                    <p class="mb-4 text-base leading-7 text-gray-400">
                                        Honestly, before I started using this dashboard, I was a mess. I was always missing
                                        deadlines and forgetting about assignments. This dashboard has helped me to stay on
                                        track and I am so grateful for it!
                                    </p>
                                    <h2 class="text-lg font-bold leading-9 text-black">
                                        Stacy Smith
                                    </h2>
                                    <span class="block text-xs font-semibold text-orange-500 uppercase">
                                        Student at Clement SS
                                    </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                        class="absolute w-20 h-20 rotate-180 bottom-4 right-4 opacity-10" viewBox="0 0 16 16">
                                        <path
                                            d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;