"use client";

import React, { useState } from 'react';

import Head from 'next/head';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Here you would typically handle form submission to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);

    // Reset form after submission
    setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    }, 3000);
};

  return (
    <>
      <Head>
        <title>Contact Us | Rabbit Farming Experts</title>
        <meta name="description" content="Get in touch with our rabbit farming experts. We're here to answer your questions about our farm-to-table process." />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">Get In Touch</h1>
            <p className="text-lg text-amber-700 max-w-3xl mx-auto">
              Have questions about our rabbit farming ecosystem? Interested in our products or partnership opportunities? 
              We&#39;re here to help and would love to hear from you.
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-amber-900 mb-6">Contact Information</h2>
              <p className="text-amber-700 mb-8">
                Reach out to us through any of the following channels. Our team typically responds within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-900">Phone</h3>
                    <p className="text-amber-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-amber-500">Mon-Fri, 8am-5pm EST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-900">Email</h3>
                    <p className="text-amber-600">info@rabbitfarm.com</p>
                    <p className="text-sm text-amber-500">For general inquiries</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-900">Visit Us</h3>
                    <p className="text-amber-600">123 Farm Road</p>
                    <p className="text-amber-600">Countryside, CS 12345</p>
                    <p className="text-sm text-amber-500">Tours by appointment only</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-900">Business Hours</h3>
                    <p className="text-amber-600">Monday - Friday: 8am - 5pm</p>
                    <p className="text-amber-600">Saturday: 9am - 2pm</p>
                    <p className="text-amber-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-amber-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-amber-200 hover:bg-amber-300 p-3 rounded-full transition-colors duration-300">
                    <svg className="w-5 h-5 text-amber-700" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-amber-200 hover:bg-amber-300 p-3 rounded-full transition-colors duration-300">
                    <svg className="w-5 h-5 text-amber-700" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="bg-amber-200 hover:bg-amber-300 p-3 rounded-full transition-colors duration-300">
                    <svg className="w-5 h-5 text-amber-700" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm3.7 14.077c-1.75.362-5.453.362-7.203 0-1.896-.391-2.117-1.538-2.246-2.077-.02-.086-.029-.176-.029-.265v-2.97c0-.182.108-.35.27-.431l2.5-1.423c.094-.055.204-.055.298 0l2.5 1.423c.161.08.27.25.27.431v2.97c0 .089-.009.179-.029.265-.056.242-.17.642-1.017.898.26.432.908 1.01 1.746 1.45 1.28.677 2.953.73 4.17.47.241-.052.485-.147.72-.283.32-.186.7-.04.88.28.18.32.04.7-.28.88-.35.2-.72.35-1.1.45zm-7.4-6.683L7.356 9.69l4.22-2.406 4.22 2.406-1.044.59-3.176-1.814a.897.897 0 00-.896 0L8.3 9.394z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-amber-200 hover:bg-amber-300 p-3 rounded-full transition-colors duration-300">
                    <svg className="w-5 h-5 text-amber-700" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-amber-900 mb-6">Send Us a Message</h2>
              
              {isSubmitted ? (
                <div className="bg-amber-100 border-l-4 border-amber-500 text-amber-700 p-4 mb-6 rounded">
                  <p>Thank you for your message! We&#39;ll get back to you within 24 hours.</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-amber-900 font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-amber-900 font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-amber-900 font-medium mb-2">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="product">Product Information</option>
                    <option value="visit">Farm Visit Request</option>
                    <option value="wholesale">Wholesale Pricing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-amber-900 font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-amber-900 text-center mb-10">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-amber-900 mb-3">Do you offer farm tours?</h3>
                <p className="text-amber-700">Yes, we offer guided tours of our facilities by appointment. Please contact us to schedule a visit and learn more about our rabbit farming process.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-amber-900 mb-3">Where can I buy your products?</h3>
                <p className="text-amber-700">Our products are available at select grocery stores and farmers markets. We also offer direct wholesale options for restaurants and retailers.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-amber-900 mb-3">Are your farming practices sustainable?</h3>
                <p className="text-amber-700">Absolutely. We prioritize ethical and sustainable practices throughout our entire operation, from feed sourcing to waste management.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-amber-900 mb-3">Do you ship products nationwide?</h3>
                <p className="text-amber-700">We currently ship to most states within the US. Contact us for specific information about delivery to your area.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}