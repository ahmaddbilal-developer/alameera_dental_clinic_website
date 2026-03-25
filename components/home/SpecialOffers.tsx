"use client";

import { Check } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const offers = [
    {
        title: "Braces Installation",
        price: "299 AED",
        per: "per jaw",
        features: ["Free Consultation", "Flexible Installments", "Routine Adjustments"],
        highlight: false,
    },
    {
        title: "Retainers",
        price: "299 AED",
        per: "per jaw",
        features: ["Custom Fit", "Durable Material", "Includes Case"],
        highlight: true,
    },
    {
        title: "Braces Adjustment",
        price: "199 AED",
        per: "upper & lower",
        features: ["Progress Check", "Wire Changing", "Cleaning"],
        highlight: false,
    },
];

export default function SpecialOffers() {
    return (
        <section className="py-20 bg-primary-light/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary font-semibold text-sm tracking-uppercase mb-2 block">SPECIAL OFFERS</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Affordable Smiles</h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ staggerChildren: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {offers.map((offer, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className={`relative bg-white rounded-2xl p-8 border hover:shadow-xl transition-all duration-300 ${offer.highlight ? 'border-primary shadow-lg ring-1 ring-primary/20 scale-105 md:-mt-4 md:mb-4 z-10' : 'border-gray-100 shadow-sm'}`}
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{offer.title}</h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-4xl font-bold text-primary">{offer.price}</span>
                                <span className="text-gray-500 text-sm">/ {offer.per}</span>
                            </div>

                            <div className="space-y-4 mb-8">
                                {offer.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3 text-gray-600 text-sm">
                                        <div className="w-5 h-5 rounded-full bg-primary-light text-primary flex items-center justify-center shrink-0">
                                            <Check size={12} strokeWidth={3} />
                                        </div>
                                        {feature}
                                    </div>
                                ))}
                                <div className="flex items-center gap-3 text-gray-600 text-sm">
                                    <div className="w-5 h-5 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                                        <Check size={12} strokeWidth={3} />
                                    </div>
                                    Tabby & Tamara Installments
                                </div>
                            </div>

                            <Link
                                href="/appointment"
                                className={`block w-full py-3 rounded-full text-center font-semibold transition-colors ${offer.highlight ? 'bg-primary text-white hover:brightness-90' : 'bg-gray-50 text-gray-900 hover:bg-gray-100'}`}
                            >
                                Book Offer
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
