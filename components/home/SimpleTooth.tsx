"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SimpleTooth() {
    return (
        <div className="relative w-full h-[600px] flex items-center justify-center">
            {/* Background Glow */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute w-[500px] h-[500px] bg-primary-light/30 rounded-full blur-[80px] z-0"
            />

            {/* Doctor Image Container */}
            <motion.div
                className="relative z-10 w-[700px] h-[750px] flex items-end justify-center overflow-hidden rounded-b-3xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Image */}
                <div className="relative w-full h-full">
                    <Image
                        src="/hero_image.png"
                        alt="AlAmeera Dental Clinic Hero"
                        fill
                        className="object-contain object-center drop-shadow-xl"
                        priority
                        unoptimized
                    />
                </div>

                {/* Floating Badge */}
                <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="absolute bottom-8 right-0 bg-white p-3 rounded-lg shadow-lg border border-gray-100 flex items-center gap-3 max-w-[200px]"
                >
                    <div className="bg-primary/10 p-2 rounded-full text-primary">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 font-medium">Certified</p>
                        <p className="text-sm font-bold text-gray-900">Dental Excellence</p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}
