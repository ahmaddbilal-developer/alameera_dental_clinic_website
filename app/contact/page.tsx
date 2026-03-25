"use client";

import CTA from "@/components/home/CTA";
import { Phone, MapPin, Clock, Mail, MessageCircle } from "lucide-react";

export default function ContactPage() {
    return (
        <>
            <section className="bg-primary-light py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-primary font-semibold text-sm tracking-uppercase mb-2 block">GET IN TOUCH</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We are here to help. Reach out to us for appointments or inquiries.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Clinic Information</h2>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary-light text-primary rounded-xl flex items-center justify-center shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Phone Numbers</h3>
                                    <p className="text-gray-600 text-lg font-medium">+971 2 644 9566</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary-light text-primary rounded-xl flex items-center justify-center shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Email Address</h3>
                                    <p className="text-gray-600">info@alameeradental.ae</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary-light text-primary rounded-xl flex items-center justify-center shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Location</h3>
                                    <p className="text-gray-600">SILSILA TRADING BUILDING, 501 Hamdan Bin Mohammed St<br />behind DALMA PLAZA, Al Danah, Zone 1, Abu Dhabi, UAE</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary-light text-primary rounded-xl flex items-center justify-center shrink-0">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Working Hours</h3>
                                    <div className="text-gray-600 space-y-1">
                                        <p className="flex justify-between w-full max-w-xs"><span>Mon - Sun:</span> <span>11:11 AM - 7:00 PM</span></p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8">
                                <a
                                    href="https://wa.me/971501234567"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#128C7E] transition-all shadow-lg hover:shadow-green-200 transform hover:-translate-y-1"
                                >
                                    <MessageCircle size={24} />
                                    Chat on WhatsApp
                                </a>
                            </div>
                        </div>

                        {/* Map Section */}
                        <div className="bg-gray-100 rounded-3xl overflow-hidden h-[500px] shadow-lg relative">
                            {/* Embed Google Map here. Using placeholder for now. */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116315.5492211933!2d54.26978511674251!3d24.46332195027581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e440f7d54030f%3A0xe51a755e0921471d!2sAbu%20Dhabi!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
                            ></iframe>
                        </div>

                    </div>
                </div>
            </section>

            <CTA />
        </>
    );
}
