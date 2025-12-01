import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    const navLinks = [
        { label: "Home", href: "#" },
        { label: "About", href: "#" },
        { label: "Services", href: "#" },
        { label: "Branded Experiences", href: "#" },
        { label: "Case Studies", href: "#" },
    ]

    const socialLinks = [
        { icon: "facebook", href: "#" },
        { icon: "linkedin", href: "#" },
        { icon: "discord", href: "#" },
        { icon: "twitter", href: "#" },
        { icon: "youtube", href: "#" },
        { icon: "instagram", href: "#" },
    ]

    return (
        <footer className="relative w-full bg-[url('/Footer-bg.svg')] bg-cover bg-center overflow-hidden">
            <div className="relative w-full max-w-7xl px-8 py-20 mx-auto">
                <div className="flex justify-between items-start gap-8">
                    {/* Left Side - Main Heading */}
                    <div className="flex-1 max-w-md">
                        <h1 className="font-fks font-bold text-white text-[95px] leading-tight uppercase">
                            Engineering<br />The New Age Of<br />Brand Play
                        </h1>
                    </div>

                    {/* Right Side - Column with BUILD WITH US, Logos, Nav, Social */}
                    <div className="flex flex-col items-start gap-6 my-10 ">
                        {/* BUILD WITH US */}
                        <h2 className="text-lime-400 text-xl font-bold font-fks tracking-wider">BUILD WITH US</h2>

                        {/* Game Logos */}
                        <div className="flex items-center gap-12">
                            <Image src="/Roblox.svg" alt="Roblox" width={198} height={87} className="w-auto h-auto" priority />
                            <Image src="/Fortnite.svg" alt="Fortnite" width={198} height={87} className="w-auto h-auto" priority />
                            <Image src="/Minecraft.svg" alt="Minecraft" width={198} height={87} className="w-auto h-auto" priority />
                        </div>

                        {/* Navigation Links */}
                        <div className="flex gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-white text-sm hover:text-lime-400 transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex gap-6">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.icon}
                                    href={social.href}
                                    className="text-white hover:text-lime-400 transition-colors"
                                    aria-label={social.icon}
                                >
                                    {/* Icon placeholders - replace with actual icons */}
                                    <span className="text-xl"></span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Large SPAWNPOINT Watermark - Background */}
          {/* Spawnpoint Logo - Bottom Center */}
                <div className="flex justify-center items-center pt-8">
                    <Image src="/Spawnpoint_name.svg" alt="Spawnpoint" width={120} height={80} className="w-auto h-auto" />
                </div>
            </div>
           
        </footer>
    )
}