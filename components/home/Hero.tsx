"use client";

import Link from "next/link";
import SimpleTooth from "@/components/home/SimpleTooth";
import { Phone, Calendar, Star, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative -mt-10 pt-0 pb-20 lg:-mt-12 lg:pt-0 lg:pb-32 bg-white overflow-hidden">
            {/* Dynamic Background Elements */}
            <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-primary-light/30 via-white to-transparent pointer-events-none" />

            {/* Animated Aurora Background */}
            <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 via-accent/5 to-primary-light/20 rounded-full blur-[80px] animate-aurora pointer-events-none opacity-60" />
            <div className="absolute top-40 -left-20 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[60px] animate-float pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Text Content */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >

                            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                                Smile with <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#2C7A7B] to-accent animate-aurora">
                                    Confidence
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed font-medium">
                                Experience pain-free dentistry with Abu Dhabi&apos;s top specialists. Advanced technology meets compassionate care for your perfect smile.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col sm:flex-row gap-4 pt-2"
                        >
                            <Link
                                href="/appointment"
                                className="group relative overflow-hidden flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-[#169d7c] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-primary/40 transition-all transform hover:-translate-y-1 active:translate-y-0"
                            >
                                <div className="absolute top-0 -left-full w-1/2 h-full bg-white/20 skew-x-[-20deg] animate-shine" />
                                <Calendar size={20} className="group-hover:scale-110 transition-transform relative z-10" />
                                <span className="relative z-10">Book Consultation</span>
                            </Link>
                            <Link
                                href="/contact"
                                className="group flex items-center justify-center gap-3 bg-white text-gray-800 px-8 py-4 rounded-full font-bold text-lg border-2 border-transparent hover:border-primary/20 hover:bg-gray-50 transition-all shadow-md hover:shadow-lg active:shadow-sm"
                            >
                                <Phone size={20} className="text-primary group-hover:rotate-12 transition-transform" />
                                Call Us Now
                            </Link>
                        </motion.div>

                        {/* Trust Badges */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="pt-6 border-t border-gray-100 flex flex-wrap items-center gap-6"
                        >
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">
                                        Use
                                    </div>
                                ))}
                            </div>
                            <div className="text-sm">
                                <div className="flex items-center gap-1 text-yellow-500">
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} fill="currentColor" />
                                </div>
                                <p className="text-gray-500 font-medium">
                                    <span className="text-gray-900 font-bold">5000+</span> Happy Patients
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Image/Animation Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="animate-float">
                            <SimpleTooth />
                        </div>

                        {/* Floating Cards */}
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="absolute top-20 right-0 sm:-right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 hidden sm:block z-20 animate-float"
                            style={{ animationDelay: "1s" }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                    <CheckCircle2 size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-bold uppercase">Result</p>
                                    <p className="text-sm font-bold text-gray-900">100% Guaranteed</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="absolute bottom-20 left-0 sm:-left-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 hidden sm:block z-20 animate-float"
                            style={{ animationDelay: "2s" }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">
                                    <Star size={24} fill="currentColor" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-bold uppercase">Rating</p>
                                    <p className="text-sm font-bold text-gray-900">4.9/5 Average</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
