"use client";

import CTA from "@/components/home/CTA";

import Image from "next/image";

export default function AboutPage() {
    return (
        <>
            <section className="bg-primary-light py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-primary font-semibold text-sm tracking-uppercase mb-2 block">WHO WE ARE</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About AlAmeera Dental Clinic</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Dedicated to providing exceptional dental care in a comfortable and modern environment.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="bg-gray-200 rounded-3xl overflow-hidden shadow-xl">
                            <Image
                                src="/innerPlace.jpg"
                                alt="Modern Clinic Interior"
                                width={1200}
                                height={800}
                                className="w-full h-auto hover:scale-105 transition-transform duration-700"
                                priority
                            />
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-gray-900">Highly Regarded Prosthodontists in Abu Dhabi</h2>
                            <p className="text-gray-600 leading-relaxed">
                                AL AMEERA DENTAL CLINIC is a highly regarded dental clinic serving patients in Al Amrah, Abu Dhabi. With a stellar rating of 4.5 stars based on 24 reviews, we are known for our exceptional care and expertise in Prosthodontics.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Whether you&apos;re seeking expert care in Prosthodontics or need a trusted physician in Abu Dhabi, Dr. AL AMEERA DENTAL CLINIC is your go-to medical professional for restoring your smile and confidence.
                            </p>

                            <div className="grid grid-cols-2 gap-6 pt-4">
                                <div className="flex flex-col gap-2">
                                    <span className="text-4xl font-bold text-primary">15+</span>
                                    <span className="text-gray-600 text-sm">Years Experience</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-4xl font-bold text-primary">5k+</span>
                                    <span className="text-gray-600 text-sm">Happy Patients</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-primary font-semibold text-sm tracking-uppercase mb-2 block">OUR TEAM</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Meet Our Specialists</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Team Member 1 */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <div className="h-64 bg-gray-200 relative">
                                <Image
                                    src="/doctor_placeholder.svg"
                                    alt="Doctor Profile"
                                    fill
                                    className="object-cover object-top"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-gray-900">Dr. Sarah Al-Mansoori</h3>
                                <p className="text-primary font-medium mb-4">Orthodontist</p>
                                <p className="text-gray-500 text-sm">Specialist in clear aligners and traditional braces with 10 years of experience.</p>
                            </div>
                        </div>

                        {/* Team Member 2 */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <div className="h-64 bg-gray-200 relative">
                                <Image
                                    src="/doctor_placeholder.svg"
                                    alt="Doctor Profile"
                                    fill
                                    className="object-cover object-top"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-gray-900">Dr. James Wilson</h3>
                                <p className="text-primary font-medium mb-4">Cosmetic Dentist</p>
                                <p className="text-gray-500 text-sm">Expert in veneers and smile makeovers, creating natural-looking results.</p>
                            </div>
                        </div>

                        {/* Team Member 3 */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <div className="h-64 bg-gray-200 relative">
                                <Image
                                    src="/doctor_placeholder.svg"
                                    alt="Doctor Profile"
                                    fill
                                    className="object-cover object-top"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-gray-900">Dr. Layla Hassan</h3>
                                <p className="text-primary font-medium mb-4">Pediatric Dentist</p>
                                <p className="text-gray-500 text-sm">Dedicated to providing gentle and fun dental care for children of all ages.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
        </>
    );
}
