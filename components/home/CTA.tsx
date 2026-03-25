"use client";

import Link from "next/link";
import { Phone, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
    return (
        <section className="py-20 bg-primary text-white relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready for your new smile?</h2>
                <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                    Book your free consultation today and let our expert team take care of your dental health.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/appointment"
                        className="flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        <Calendar size={20} />
                        Book Free Consultation
                    </Link>
                    <Link
                        href="/contact"
                        className="flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all border border-accent shadow-lg"
                    >
                        <Phone size={20} />
                        +971 50 123 4567
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
