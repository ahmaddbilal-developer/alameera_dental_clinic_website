"use client";

import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Charity Pieza",
        treatment: "Regular Checkup",
        content: "I've been here since 2019, they take care of my teeth very well... Very friendly and accommodating people working in this clinic. I'm just very thankful for their service.",
        stars: 5,
    },
    {
        name: "Jamelo Soriano",
        treatment: "Dental Service",
        content: "The Dentist explains the procedures very well, what is best to meet the patient's satisfaction. The clinic is clean and has a good ambiance. I highly recommend this clinic if you want a satisfying dental service.",
        stars: 5,
    },
    {
        name: "Anuroop Vincent",
        treatment: "Consultation",
        content: "Honest diagnosis and satisfied in first time itself. I think this one is the cheapest and affordable clinic at least in Abu Dhabi. Now it's almost 6 months, I can recommend them.",
        stars: 5,
    },
    {
        name: "Sarah Ahmed",
        treatment: "Teeth Whitening",
        content: "Absolutely amazing experience! The staff is so welcoming and my smile has never looked better. Highly recommend AlAmeera.",
        stars: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-primary-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <span className="text-primary font-semibold text-sm tracking-uppercase mb-2 block">TESTIMONIALS</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">What Our Patients Say</h2>

                <div className="relative overflow-hidden w-full">
                    <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[rgba(255,255,255,0)] to-transparent z-10 sm:from-white" />
                    <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[rgba(255,255,255,0)] to-transparent z-10 sm:from-white" />

                    <motion.div
                        className="flex gap-8 w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                    >
                        {[...testimonials, ...testimonials].map((t, i) => (
                            <div
                                key={i}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-left hover:shadow-lg transition-all relative w-[350px] shrink-0"
                            >
                                <div className="absolute top-8 right-8 text-gray-100">
                                    <Quote size={40} fill="currentColor" />
                                </div>
                                <div className="flex gap-1 text-yellow-400 mb-4">
                                    {[...Array(t.stars)].map((_, i) => (
                                        <Star key={i} size={16} fill="currentColor" />
                                    ))}
                                </div>
                                <p className="text-gray-600 italic mb-6 leading-relaxed relative z-10 line-clamp-4">&quot;{t.content}&quot;</p>
                                <div>
                                    <p className="font-bold text-gray-900">{t.name}</p>
                                    <p className="text-sm text-primary">{t.treatment}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
