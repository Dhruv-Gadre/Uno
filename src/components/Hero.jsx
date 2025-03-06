import React from 'react'
import { Heart, Shield, Users } from 'lucide-react'
import drug1 from "../assets/drug1.jpeg"
const HeroSection = () => {
    const featureItems = [
        {
            icon: <Heart className="w-8 h-8 text-[#A7C957]" />,
            title: "Personal Growth",
            description: "Track your progress and celebrate every milestone in your recovery journey."
        },
        {
            icon: <Shield className="w-8 h-8 text-[#A7C957]" />,
            title: "Confidential Support",
            description: "Access 24/7 anonymous support with compassionate AI and professional resources."
        },
        {
            icon: <Users className="w-8 h-8 text-[#A7C957]" />,
            title: "Community Strength",
            description: "Connect with others who understand your journey and offer mutual support."
        }
    ]

    return (
        <div className="bg-gradient-to-br from-[#2A9D8F] to-[#264653] text-[#F4EAE0] py-16 lg:py-24">
            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="space-y-6">
                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                        Your Pathway to
                        <span className="block text-[#A7C957]">Healing and Recovery</span>
                    </h1>
                    <p className="text-lg text-[#F4EAE0]/80 max-w-xl">
                        RecoveryPath is more than an app. It's a compassionate companion
                        dedicated to supporting your journey towards a healthier,
                        more fulfilling life. Every step matters, and you're not alone.
                    </p>

                    {/* Call to Action Buttons */}
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <a
                            href="#start-journey"
                            className="py-3 px-6 bg-gradient-to-r from-[#A7C957] to-[#E9C46A] text-[#264653] rounded-full font-semibold hover:from-[#E9C46A] hover:to-[#A7C957] transition-all"
                        >
                            Start Your Recovery Journey
                        </a>
                        <a
                            href="#learn-more"
                            className="py-3 px-6 border-2 border-[#A7C957] text-[#A7C957] rounded-full font-semibold hover:bg-[#A7C957] hover:text-[#264653] transition-all"
                        >
                            Learn More
                        </a>
                    </div>

                    {/* Features */}
                    <div className="grid md:grid-cols-3 gap-4 pt-8">
                        {featureItems.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-[#264653]/30 p-4 rounded-lg hover:bg-[#264653]/50 transition-all"
                            >
                                <div className="flex items-center space-x-3 mb-2">
                                    {feature.icon}
                                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                                </div>
                                <p className="text-sm text-[#F4EAE0]/70">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>


                <div className="hidden lg:flex justify-center items-center">
                    {/* You'll replace this with your own image */}
                    <div className="w-full max-w-md h-[300px] bg-[#264653]/30 rounded-2xl flex justify-center items-center text-[#A7C957] text-xl font-semibold">
                        <img src={drug1} alt="" className='rounded-md'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection