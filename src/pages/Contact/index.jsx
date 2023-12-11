// Import Dependencies
import React from 'react';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Footer from '../../components/Footer/Footer.jsx';

export const Contact = () => {
    /**
     * Generate mailto link with form data.
     * @param {*} formData - Form data object.
     * @returns - Mailto link.
     */
    const generateMailTo = (formData) => {
        const {
            name,
            email,
            phone,
            message
        } = formData;

        return `mailto:rfugaban@my.centennialcollege.ca?subject=Contact from ${name}&body=${message} - from ${name}, Email: ${email}, Phone: ${phone}`;
    };

    /**
     * Handle form submission.
     * @param {*} e - Event object.
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const mailtoLink = generateMailTo(Object.fromEntries(formData));
        window.location.href = mailtoLink;
    };

    return (
        <>
            <Navbar />
            <section>
                <div class="container px-6 py-12 mx-auto">
                    <div>
                        <p class="font-medium text-orange-300">Contact us</p>

                        <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl">Chat With The Team</h1>

                        <p class="mt-3 text-gray-500">We'd love to hear from you, please fill out this form or shoot us an email.</p>
                    </div>

                    <div class="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
                        <div class="grid grid-cols-1 gap-12 md:grid-cols-2">
                            { /* Email */ }
                            <div>
                                <span class="inline-block p-3 text-orange-500 rounded-full bg-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                </span>

                                <h2 class="mt-4 text-base font-medium text-gray-800">Email</h2>
                                <p class="mt-2 text-sm text-gray-500">Our Team is There to Help!</p>
                                <p class="mt-2 text-sm text-orange-500">contact@wizstack.com</p> 
                            </div>

                            { /* Live Chat */ }
                            <div>
                                <span class="inline-block p-3 text-orange-500 rounded-full bg-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                </span>
                                
                                <h2 class="mt-4 text-base font-medium text-gray-800 ">Live Chat</h2>
                                <p class="mt-2 text-sm text-gray-500">Need to Chat? Shout us a Message!</p>
                                <p class="mt-2 text-sm text-orange-500">Start a New Chat: contact@wizstack.com</p>
                            </div>

                            { /* Office */ }
                            <div>
                                <span class="inline-block p-3 text-orange-500 rounded-full bg-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                </span>
                                
                                <h2 class="mt-4 text-base font-medium text-gray-800 ">Office</h2>
                                <p class="mt-2 text-sm text-gray-500">Come Say Hello at our Office HQ!</p>
                                <p class="mt-2 text-sm text-orange-500">3705 Nelson Street, Delvin ON POW 1C0</p>
                            </div>

                            { /* Phone */}
                            <div>
                                <span class="inline-block p-3 text-orange-500 rounded-full bg-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                </span>
                                
                                <h2 class="mt-4 text-base font-medium text-gray-800">Phone</h2>
                                <p class="mt-2 text-sm text-gray-500">Mon-Fri 8am - 5pm.</p>
                                <p class="mt-2 text-sm text-orange-500">+1 (999) 999-9999</p>
                            </div>
                        </div>

                         {/* Contact us Form */}
                         <div class="p-4 py-6 rounded-lg bg-gray-50">
                                <form onSubmit={handleSubmit}>
                                    <div class="-mx-2 md:items-center md:flex">
                                        <div class="flex-1 px-2">
                                            <label class="block mb-2 text-sm text-gray-600">Name</label>
                                            <input type="text" placeholder="John " class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-orange-400 dark:focus:border-orange-400 focus:ring-orange-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                        </div>

                                        <div class="flex-1 px-2 mt-4 md:mt-0">
                                            <label class="block mb-2 text-sm text-gray-600">Phone</label>
                                            <input type="text" placeholder="Doe" class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-orange-400 dark:focus:border-orange-400 focus:ring-orange-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                        </div>
                                    </div>

                                    <div class="mt-4">
                                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                                        <input type="email" placeholder="johndoe@example.com" class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-orange-400 focus:ring-orange-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>

                                    <div class="w-full mt-4">
                                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                                        <textarea class="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 focus:border-orange-400 focus:ring-orange-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                                    </div>

                                    <button type='submit' class="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-300 rounded-lg hover:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-50">
                                        Send message
                                    </button>
                                </form>
                         </div>
                    </div>
                </div>
            </section>
            {/* <div className={styles.container}>
                <h1>Contact Us</h1>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor='name'>Name</label>
                        <input type='text' id='name' name='name' className={styles.input} placeholder='Enter your name' required />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' name='email' className={styles.input} placeholder='Enter your email address' required />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor='phone'>Phone</label>
                        <input type='text' id='phone' name='phone' className={styles.input} placeholder='Enter your phone number' required />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor='message'>Message</label>
                        <textarea id='message' name='message' className={styles.textarea} placeholder='Enter your message' required></textarea>
                    </div>

                    <div className={styles.formGroup}>
                        <button type='submit' className={styles.button}>Submit</button>
                    </div>
                </form>
            </div> */}
            <Footer />
        </>
    )
}