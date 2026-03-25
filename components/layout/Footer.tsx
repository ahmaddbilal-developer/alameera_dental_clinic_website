import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="inline-block">
                            <div className="relative w-40 h-12">
                                <Image
                                    src="/logo.png"
                                    alt="AlAmeera Dental Clinic"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Highly regarded Prosthodontists Dental Clinic known for exceptional care and expertise in Abu Dhabi.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors p-2 hover:bg-primary-light rounded-full"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors p-2 hover:bg-primary-light rounded-full"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors p-2 hover:bg-primary-light rounded-full"><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4 text-lg">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="/" className="hover:text-primary transition-colors block py-1">Home</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors block py-1">Services</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors block py-1">About Us</Link></li>
                            <li><Link href="/gallery" className="hover:text-primary transition-colors block py-1">Gallery</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors block py-1">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4 text-lg">Our Services</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li className="py-1">Prosthodontics</li>
                            <li className="py-1">General Dentistry</li>
                            <li className="py-1">Cosmetic Dentistry</li>
                            <li className="py-1">Orthodontics</li>
                            <li className="py-1">Dental Implants</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4 text-lg">Contact Us</h3>
                        <ul className="space-y-4 text-sm text-gray-600">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <span className="leading-relaxed">SILSILA TRADING BUILDING, 501 Hamdan Bin Mohammed St, behind DALMA PLAZA, Al Danah, Zone 1, Abu Dhabi, UAE</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span className="font-medium">+971 2 644 9566</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <span className="leading-relaxed">Mon - Sun: 11:11 AM - 7:00 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500">© 2026 AlAmeera Dental Clinic. All rights reserved.</p>
                    <div className="flex gap-4 opacity-70">
                        <span className="text-xs text-gray-400 font-medium tracking-wide">TABBY • TAMARA • VISA • MASTERCARD</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
