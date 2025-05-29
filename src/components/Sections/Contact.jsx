import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
                <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
                    <div className="mb-4">
                        <label className="block text-gray-700" htmlFor="name">Name</label>
                        <input className="w-full p-2 border border-gray-300 rounded" type="text" id="name" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700" htmlFor="email">Email</label>
                        <input className="w-full p-2 border border-gray-300 rounded" type="email" id="email" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700" htmlFor="message">Message</label>
                        <textarea className="w-full p-2 border border-gray-300 rounded" id="message" rows="4" required></textarea>
                    </div>
                    <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600" type="submit">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;