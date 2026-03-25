"use client";

import { useState } from "react";
import ServiceCard from "@/components/shared/ServiceCard";
import ServiceModal from "@/components/shared/ServiceModal";
import CTA from "@/components/home/CTA";
import {
    ShieldCheck, Sparkles, Smile, Activity, User, Heart, Star, Plus, Stethoscope
} from "lucide-react";

const services = [
    {
        title: "General Dentistry",
        description: "Regular check-ups, digital X-rays, and professional cleaning to maintain optimal oral health. We focus on prevention and early detection.",
        fullDescription: "Our General Dentistry services are the foundation of your oral health. We provide thorough examinations, scaling and polishing to remove plaque, and durable fillings to restore decayed teeth. Regular visits help prevent complex issues down the line.",
        features: ["Routine Check-ups", "Scale & Polish", "Cavity Protection", "Gum Health Assessment"],
        icon: ShieldCheck,
    },
    {
        title: "Cosmetic Dentistry",
        description: "Enhance your smile with our premium cosmetic treatments including veneers, bonding, and full smile makeovers tailored to your facial aesthetics.",
        fullDescription: "Design the smile you've always wanted. Our cosmetic treatments range from subtle enhancements to complete smile makeovers. We use high-quality materials to ensure natural-looking, long-lasting results that boost your confidence.",
        features: ["Porcelain Veneers", "Composite Bonding", "Smile Design", "Gum Contouring"],
        icon: Sparkles,
    },
    {
        title: "Orthodontics",
        description: "Correct misaligned teeth and bite issues with traditional metal braces, ceramic braces, or invisible aligners for both children and adults.",
        fullDescription: "A straight smile is a healthy smile. We offer modern orthodontic solutions including traditional metal braces, ceramic braces, and invisible aligners like Invisalign. Suitable for children, teens, and adults.",
        features: ["Metal & Ceramic Braces", "Invisible Aligners", "Retainers", "Jaw Alignment"],
        icon: Smile,
    },
    {
        title: "Teeth Whitening",
        description: "Professional in-office whitening for immediate results, or custom take-home kits. Safe, effective, and long-lasting brightness.",
        fullDescription: "Get a brighter smile in just one visit. Our professional in-office whitening is safe, fast, and effective. We also offer custom take-home kits for gradual widening at your convenience.",
        features: ["Laser Whitening", "Home Kits", "Stain Removal", "Sensitivity Management"],
        icon: Star,
    },
    {
        title: "Dental Implants",
        description: "The gold standard for replacing missing teeth. Our implants look, feel, and function like natural teeth, restoring your confidence.",
        fullDescription: "Restore your complete smile with dental implants. They are the most natural-looking and feeling replacement for missing teeth. Our specialists ensure precise placement for optimal function and aesthetics.",
        features: ["Single Tooth Implant", "All-on-4", "Bone Grafting", "Implant Crown"],
        icon: Activity,
    },
    {
        title: "Pediatric Dentistry",
        description: "Specialized care for children in a friendly, fear-free environment. We make dental visits fun and educational for your little ones.",
        fullDescription: "We make going to the dentist fun! Our pediatric specialists are trained to manage children's dental needs with patience and care. We focus on education and prevention to set the foundation for a lifetime of healthy smiles.",
        features: ["First Visit Exam", "Fluoride Treatment", "Sealants", "Habit Counseling"],
        icon: User,
    },
    {
        title: "Root Canal Treatment",
        description: "Save your natural tooth with our advanced, pain-free root canal therapy. We remove infection and seal the tooth to prevent reinfection.",
        fullDescription: "Don't lose your tooth! Root canal therapy removes infection from deep inside the tooth, relieving pain and saving the natural structure. Our modern techniques make the procedure comfortable and efficient.",
        features: ["Pain Relief", "Infection Removal", "Tooth Preservation", "Crown Placement"],
        icon: Heart,
    },
    {
        title: "Oral Surgery",
        description: "Expert surgical procedures including wisdom tooth extraction, bone grafting, and gum surgery performed with maximum comfort.",
        fullDescription: "Our oral surgery procedures are performed with the utmost care and comfort. From simple extractions to complex bone grafting, our specialists use advanced techniques to ensure quick recovery and minimal discomfort.",
        features: ["Wisdom Teeth Removal", "Bone Grafting", "Gum Surgery", "Biopsies"],
        icon: Plus,
    },
    {
        title: "Periodontics",
        description: "Treatment of gum diseases and maintenance of gum health to support your teeth and prevent bone loss.",
        fullDescription: "Healthy gums are essential for healthy teeth. We treat all stages of gum disease (periodontitis) using non-surgical and surgical methods to stop infection, reduce pockets, and regenerate bone where possible.",
        features: ["Deep Cleaning", "Gum Disease Treatment", "Bone Regeneration", "Gum Grafting"],
        icon: Stethoscope,
    }
];

export default function ServicesPage() {
    const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

    return (
        <>
            <section className="bg-primary-light py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-primary font-semibold text-sm tracking-uppercase mb-2 block">OUR EXPERTISE</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Comprehensive Dental Services</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        World-class dental care delivered with precision, comfort, and state-of-the-art technology.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                {...service}
                                delay={index * 0.1}
                                onLearnMore={() => setSelectedService(service)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <CTA />

            <ServiceModal
                isOpen={!!selectedService}
                onClose={() => setSelectedService(null)}
                service={selectedService}
            />
        </>
    );
}
