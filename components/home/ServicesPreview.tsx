"use client";

import { useState } from "react";
import ServiceCard from "@/components/shared/ServiceCard";
import ServiceModal from "@/components/shared/ServiceModal";
import { motion } from "framer-motion";
import { Smile, Sparkles, Activity, ShieldCheck, Heart, User } from "lucide-react";

// Expanded data with details
const services = [
    {
        title: "General Dentistry",
        description: "Comprehensive check-ups, fillings, and preventive care to keep your smile healthy and bright.",
        fullDescription: "Our General Dentistry services are the foundation of your oral health. We provide thorough examinations, scaling and polishing to remove plaque, and durable fillings to restore decayed teeth. Regular visits help prevent complex issues down the line.",
        features: ["Routine Check-ups", "Scale & Polish", "Cavity Protection", "Gum Health Assessment"],
        icon: ShieldCheck,
    },
    {
        title: "Cosmetic Dentistry",
        description: "Transform your smile with veneers, bonding, and smile makeovers designed for you.",
        fullDescription: "Design the smile you've always wanted. Our cosmetic treatments range from subtle enhancements to complete smile makeovers. We use high-quality materials to ensure natural-looking, long-lasting results that boost your confidence.",
        features: ["Porcelain Veneers", "Composite Bonding", "Smile Design", "Gum Contouring"],
        icon: Sparkles,
    },
    {
        title: "Orthodontics",
        description: "Straighten your teeth with traditional braces or clear aligners for a perfect alignment.",
        fullDescription: "A straight smile is a healthy smile. We offer modern orthodontic solutions including traditional metal braces, ceramic braces, and invisible aligners like Invisalign. Suitable for children, teens, and adults.",
        features: ["Metal & Ceramic Braces", "Invisible Aligners", "Retainers", "Jaw Alignment"],
        icon: Smile,
    },
    {
        title: "Teeth Whitening",
        description: "Professional whitening treatments to remove stains and brighten your smile safely.",
        fullDescription: "Get a brighter smile in just one visit. Our professional in-office whitening is safe, fast, and effective. We also offer custom take-home kits for gradual widening at your convenience.",
        features: ["Laser Whitening", "Home Kits", "Stain Removal", "Sensitivity Management"],
        icon: Sparkles,
    },
    {
        title: "Dental Implants",
        description: "Permanent, natural-looking solutions to replace missing teeth and restore function.",
        fullDescription: "Restore your complete smile with dental implants. They are the most natural-looking and feeling replacement for missing teeth. Our specialists ensure precise placement for optimal function and aesthetics.",
        features: ["Single Tooth Implant", "All-on-4", "Bone Grafting", "Implant Crown"],
        icon: Activity,
    },
    {
        title: "Pediatric Dentistry",
        description: "Gentle and fun dental care specifically designed for children and infants.",
        fullDescription: "We make going to the dentist fun! Our pediatric specialists are trained to manage children's dental needs with patience and care. We focus on education and prevention to set the foundation for a lifetime of healthy smiles.",
        features: ["First Visit Exam", "Fluoride Treatment", "Sealants", "Habit Counseling"],
        icon: User,
    },
    {
        title: "Root Canal",
        description: "Advanced therapy to save infected teeth and relieve pain effectively.",
        fullDescription: "Don't lose your tooth! Root canal therapy removes infection from deep inside the tooth, relieving pain and saving the natural structure. Our modern techniques make the procedure comfortable and efficient.",
        features: ["Pain Relief", "Infection Removal", "Tooth Preservation", "Crown Placement"],
        icon: Heart,
    },
    {
        title: "Dental Cleaning",
        description: "Thorough professional cleaning to remove plaque and tartar buildup.",
        fullDescription: "Even with great brushing, plaque can build up. Our professional hygiene sessions remove stubborn tartar, polish stains, and keep your gums healthy. It's the best way to prevent gum disease using airflow technology.",
        features: ["Deep Cleaning", "Stain Polishing", "Airflow Therapy", "Oral Hygiene Advice"],
        icon: ShieldCheck,
    }
];

export default function ServicesPreview() {
    const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary font-semibold text-sm tracking-uppercase mb-2 block">OUR EXPERTISE</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Dental Care For Everyone</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We offer a comprehensive range of dental services using the latest technology to ensure the best care for you and your family.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ staggerChildren: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            onLearnMore={() => setSelectedService(service)}
                        />
                    ))}
                </motion.div>
            </div>

            {/* Service Detail Modal */}
            <ServiceModal
                isOpen={!!selectedService}
                onClose={() => setSelectedService(null)}
                service={selectedService}
            />
        </section>
    );
}
