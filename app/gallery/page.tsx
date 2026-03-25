"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import CTA from "@/components/home/CTA";

// Clinic Facility Images
const galleryImages = [
    { id: 1, category: "Clinic", src: "/inner.jpg", title: "Reception & Waiting Area" },
    { id: 2, category: "Treatment", src: "/innerPlace.jpg", title: "Advanced Treatment Room" },
    { id: 3, category: "Treatment", src: "/inner_place.jpg", title: "Patient Comfort Station" },
    { id: 4, category: "Clinic", src: "/counter.jpg", title: "Main Reception" },
];

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

    return (
        <>
            <section className="bg-primary-light py-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <span className="text-primary font-semibold text-sm tracking-uppercase mb-2 block">OUR FACILITY</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Clinic Tour</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Experience our modern, comfortable, and hygienic environment designed for your care.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {galleryImages.map((img) => (
                        <motion.div
                            key={img.id}
                            layoutId={`img-container-${img.id}`}
                            onClick={() => setSelectedImage(img)}
                            className="cursor-pointer group relative aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
                        >
                            <Image
                                src={img.src}
                                alt={img.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white font-medium p-4 text-center">
                                <ZoomIn size={32} className="mb-2" />
                                <span className="text-lg font-bold">{img.title}</span>
                                <span className="text-sm opacity-80">{img.category}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 hover:bg-white/10 rounded-full transition-colors z-10"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={32} />
                        </button>

                        <motion.div
                            layoutId={`img-container-${selectedImage.id}`}
                            className="relative max-w-5xl w-full h-auto max-h-[90vh] aspect-video bg-black rounded-lg overflow-hidden flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                fill
                                className="object-contain"
                            />
                        </motion.div>

                        <div className="absolute bottom-8 text-white/90 text-xl font-medium text-center w-full">
                            <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
                            <p className="opacity-80 text-base">{selectedImage.category}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <CTA />
        </>
    );
}
