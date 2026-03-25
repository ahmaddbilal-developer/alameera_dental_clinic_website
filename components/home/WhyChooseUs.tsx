"use client";

import { useEffect } from "react";
import Script from "next/script";
import { Award, Zap, Heart, CreditCard, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
    const features = [
        {
            icon: Award,
            title: "Experienced Dentists",
            description: "Our team consists of highly qualified specialists with years of international experience.",
        },
        {
            icon: Zap,
            title: "Modern Equipment",
            description: "We use the latest dental technology for precise diagnoses and comfortable treatments.",
        },
        {
            icon: Heart,
            title: "Comfortable Environment",
            description: "A relaxing, spa-like atmosphere designed to reduce anxiety and ensure your comfort.",
        },
        {
            icon: CreditCard,
            title: "Affordable Plans",
            description: "Transparent pricing with flexible 0% interest installment plans.",
        },
        {
            icon: MapPin,
            title: "Prime Location",
            description: "Conveniently located in the heart of Abu Dhabi with ample parking available.",
        },
    ];

    useEffect(() => {
        const initPlayer = () => {
            // @ts-expect-error FB is injected from script
            if (window.FB) {
                // @ts-expect-error FB is injected from script
                window.FB.XFBML.parse(); // Reparse if SDK already loaded
                subscribeToEvents();
            } else {
                // @ts-expect-error FB is injected from script
                window.fbAsyncInit = function () {
                    // @ts-expect-error FB is injected from script
                    FB.init({
                        xfbml: true,
                        version: 'v18.0'
                    });
                    subscribeToEvents();
                };
            }
        };

        const subscribeToEvents = () => {
            // @ts-expect-error FB is injected from script
            FB.Event.subscribe('xfbml.ready', function (msg) {
                if (msg.type === 'video') {
                    const player = msg.instance;
                    try {
                        player.mute(); // Force mute
                        player.play(); // Force play
                    } catch (e) {
                        console.error("Autoplay failed:", e);
                    }

                    // Loop logic to prevent suggested videos
                    player.subscribe('finishedPlaying', function () {
                        player.play();
                    });
                }
            });
        };

        initPlayer();
    }, []);

    return (
        <section className="py-20 bg-white">
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div>
                            <span className="text-primary font-semibold text-sm tracking-uppercase mb-2 block">WHY CHOOSE US</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Experience the Difference</h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                At AlAmeera Dental Clinic, we combine medical expertise with a patient-centered approach. We believe that visiting the dentist should be a positive experience.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className="flex gap-4"
                                >
                                    <div className="w-12 h-12 rounded-full bg-primary-light text-primary flex items-center justify-center shrink-0">
                                        <feature.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative w-[267px] h-[476px] mx-auto rounded-xl overflow-hidden shadow-2xl bg-black"
                    >
                        {/* Facebook Reel Embed via SDK */}
                        <div id="fb-root"></div>
                        <div
                            className="fb-video"
                            data-href="https://www.facebook.com/reel/24782142621382265/"
                            data-width="267"
                            data-autoplay="true"
                            data-show-text="false"
                            data-allowfullscreen="true">
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
