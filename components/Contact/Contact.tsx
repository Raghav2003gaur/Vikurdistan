"use client";
import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({
        type: "success",
        message: "Thank you for your message! We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      <div className="w-[80%] mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-yellow-300 mx-auto"></div>
          <p className="text-gray-600 mt-6 text-lg">
            We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>

        {/* Contact Form Section */}
        <section className="mb-16">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mb-8">
              Get In Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition"
                  placeholder="Your Name"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message Input */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition resize-none"
                  placeholder="Your Message"
                />
              </div>

              {/* Submit Status Message */}
              {submitStatus.type && (
                <div
                  className={`p-4 rounded-lg ${
                    submitStatus.type === "success"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3 bg-yellow-300 hover:bg-yellow-400 text-blue-950 font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </section>

        {/* Contact Details & Social Media Section */}
        <section className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Contact Details */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mb-6">
                Contact Details
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-300 p-3 rounded-full">
                    <FaPhone className="w-5 h-5 text-blue-950" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm mb-1">Mobile Numbers</p>
                    <a
                      href="tel:+9647762143322"
                      className="text-blue-950 font-semibold text-lg hover:text-yellow-300 transition-colors block"
                    >
                      +964 776 214 3322
                    </a>
                    <a
                      href="tel:+9647502143322"
                      className="text-blue-950 font-semibold text-lg hover:text-yellow-300 transition-colors block mt-1"
                    >
                      +964 750 214 3322
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Follow Us Section */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mb-6">
                Follow Us
              </h2>
              <p className="text-gray-600 mb-6">
                Stay connected with us on social media for the latest updates and travel inspiration.
              </p>
              <div className="flex items-center space-x-6">
                <a
                  href="https://www.facebook.com/VIKurdistan1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full transition-all duration-200 transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/vikurdistan/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white p-4 rounded-full transition-all duration-200 transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.youtube.com/@vikurdistanco6123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full transition-all duration-200 transform hover:scale-110"
                  aria-label="YouTube"
                >
                  <FaYoutube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;

