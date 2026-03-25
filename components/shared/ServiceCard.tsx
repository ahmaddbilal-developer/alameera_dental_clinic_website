"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    href?: string;
    delay?: number;
    onLearnMore?: () => void;
}

export default function ServiceCard({ title, description, icon: Icon, href = "/services", delay = 0, onLearnMore }: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary-light transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
        >
            <div className="w-12 h-12 bg-primary-light text-primary rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0">
                <Icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                {description}
            </p>

            <div className="mt-auto">
                {onLearnMore ? (
                    <button
                        onClick={onLearnMore}
                        className="mt-4 w-full py-4 px-6 bg-primary text-white font-bold text-center rounded-xl hover:bg-primary-dark hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                    >
                        Learn more <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                    </button>
                ) : (
                    <Link
                        href={href}
                        className="mt-4 block w-full py-4 px-6 bg-primary text-white font-bold text-center rounded-xl hover:bg-primary-dark hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group/link"
                    >
                        Learn more <span className="transition-transform group-hover/link:translate-x-1">→</span>
                    </Link>
                )}
            </div>
        </motion.div>
    );
}
