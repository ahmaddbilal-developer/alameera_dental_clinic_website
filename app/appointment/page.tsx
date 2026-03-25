"use client";

import { useState } from "react";
import { CheckCircle2, Calendar, Clock, User, Phone, MessageSquare, Briefcase } from "lucide-react";

export default function AppointmentPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => setSubmitted(true), 1000);
    };

    if (submitted) {
        return (
            <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-50 px-4">
                <div className="bg-white p-12 rounded-3xl shadow-xl text-center max-w-lg w-full">
                    <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 size={40} />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Request Sent!</h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Thank you for booking with AlAmeera Dental Clinic. Our team will contact you shortly to confirm your appointment.
                    </p>
                    <button
                        onClick={() => window.location.href = '/'}
                        className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:brightness-90 transition-colors"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-primary-light/50 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <span className="text-primary font-semibold text-sm tracking-uppercase mb-2 block">BOOK ONLINE</span>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Schedule Your Visit</h1>
                    <p className="text-gray-600">Fill out the form below and we&apos;ll get back to you to confirm your slot.</p>
                </div>

                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-5">
                        {/* Left Info Panel */}
                        <div className="bg-primary text-white p-10 md:col-span-2 flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-bold mb-6">Clinic Hours</h3>
                                <div className="space-y-4 text-primary-light text-sm">
                                    <p className="flex justify-between">
                                        <span>Mon - Sat:</span>
                                        <span>9:00 AM - 9:00 PM</span>
                                    </p>
                                    <p className="flex justify-between">
                                        <span>Friday:</span>
                                        <span>4:00 PM - 9:00 PM</span>
                                    </p>
                                    <p className="flex justify-between">
                                        <span>Sunday:</span>
                                        <span>Closed</span>
                                    </p>
                                </div>
                            </div>
                            <div className="mt-10">
                                <p className="text-sm text-primary-light mb-2">Need immediate assistance?</p>
                                <p className="text-2xl font-bold flex items-center gap-2">
                                    <Phone size={24} /> +971 50 123 4567
                                </p>
                            </div>
                        </div>

                        {/* Right Form Panel */}
                        <div className="p-10 md:col-span-3">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 flex items-center gap-2"><User size={16} /> Full Name</label>
                                        <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 flex items-center gap-2"><Phone size={16} /> Phone Number</label>
                                        <input type="tel" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="+971 50..." />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2"><Briefcase size={16} /> Service</label>
                                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white">
                                        <option>General Consultation</option>
                                        <option>Teeth Whitening</option>
                                        <option>Braces / Orthodontics</option>
                                        <option>Dental Implants</option>
                                        <option>Root Canal</option>
                                        <option>Pediatric Visit</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 flex items-center gap-2"><Calendar size={16} /> Preferred Date</label>
                                        <input type="date" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 flex items-center gap-2"><Clock size={16} /> Preferred Time</label>
                                        <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white">
                                            <option>Morning (9AM - 12PM)</option>
                                            <option>Afternoon (12PM - 4PM)</option>
                                            <option>Evening (4PM - 9PM)</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2"><MessageSquare size={16} /> Message (Optional)</label>
                                    <textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all h-32" placeholder="Any specific concerns?"></textarea>
                                </div>

                                <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:brightness-90 transition-all shadow-lg hover:shadow-primary/30 transform hover:-translate-y-0.5">
                                    Request Appointment
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
