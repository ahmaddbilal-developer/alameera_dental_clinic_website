"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BeforeAfterPreview() {
    const cases = [
        {
            src: "/before_after01.png",
            alt: "Smile Transformation Case 1",
            title: "Composite Bonding"
        },
        {
            src: "/before_after02.png",
            alt: "Smile Transformation Case 2",
            title: "Teeth Whitening"
        },
        {
            src: "/before_after03.jpg",
            alt: "Smile Transformation Case 3",
            title: "Dental Veneers"
        },
        {
            src: "/before_after_04.jpg",
            alt: "Smile Transformation Case 4",
            title: "Orthodontic Correction"
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary font-semibold text-sm tracking-uppercase mb-2 block">REAL RESULTS</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Transforming Smiles</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        See the difference our expert treatments can make.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {cases.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg group"
                        >
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                                <span className="text-white font-medium text-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                    {item.title}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="/gallery" className="text-primary font-semibold hover:text-accent inline-flex items-center gap-1 transition-colors">
                        View Full Gallery <span>→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
