"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Calendar } from "lucide-react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface ServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    service: {
        title: string;
        description: string;
        fullDescription?: string;
        features?: string[];
        icon: LucideIcon;
    } | null;
}

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
    if (!isOpen || !service) return null;

    const Icon = service.icon;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10"
                    >
                        <X size={20} className="text-gray-600" />
                    </button>

                    {/* Header Image/Icon Area */}
                    <div className="bg-primary-light/30 p-8 flex items-center gap-6 border-b border-primary-light">
                        <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-sm text-primary shrink-0">
                            <Icon size={40} />
                        </div>
                        <div>
                            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-1 block">SERVICE DETAIL</span>
                            <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Overview</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {service.fullDescription || service.description}
                            </p>
                        </div>

                        {service.features && (
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">What&apos;s Included</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                            <CheckCircle2 size={18} className="text-green-600 mt-1 shrink-0" />
                                            <span className="text-gray-700 font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="pt-4 flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/appointment"
                                className="flex-1 bg-primary text-white py-4 rounded-xl font-bold text-center hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
                            >
                                <Calendar size={20} />
                                Book Appointment
                            </Link>
                            <button
                                onClick={onClose}
                                className="flex-1 bg-gray-100 text-gray-700 py-4 rounded-xl font-bold hover:bg-gray-200 transition-colors"
                            >
                                Close Details
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
