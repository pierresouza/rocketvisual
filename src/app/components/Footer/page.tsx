import { Instagram, Mail, Phone } from 'lucide-react'
import { FaWhatsapp, FaTiktok } from 'react-icons/fa'
import Image from 'next/image'

const Footer = () => {
    const socialLinks = [
        {
            icon: Instagram,
            label: 'Instagram',
            href: 'https://www.instagram.com/rocketvisual_vfx/',
        },
        {
            icon: FaTiktok,
            label: 'FaTiktok',
            href: 'https://www.tiktok.com/@rocketvisual_vfx?_t=ZM-8uzEyXdWwjP&_r=1',
        },
        {
            icon: FaWhatsapp,
            label: 'WhatsApp',
            href: 'https://w.app/ygg6dq',
        },
    ]

    const quickLinks = [
        { name: 'inicio', href: '/' },
        { name: 'sobre nós', href: '/About' },
        { name: 'serviços', href: '/Services' },
        { name: 'contato', href: '/Contact' },
        { name: 'portfólio', href: '/Portfolio' },
    ]

    const services = [
        'Edição de Vídeo',
        'Correção de Cor',
        'Gráficos em Movimento',
        'Design de Áudio',
        'Pós-Produção',
    ]

    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center space-x-2 mb-6">
                            <div>
                                <Image
                                    src="/logo-without-text.png"
                                    alt="Logo da Rocket Visuals"
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <span className="text-2xl font-bold">
                                Rocket Visuals
                            </span>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Transformando ideias em histórias visuais. Nossa
                            missão é criar experiências inesquecíveis através da
                            arte do vídeo.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => {
                                const IconComponent = social.icon
                                return (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        className="p-2 bg-gray-800 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 rounded-lg transition-all duration-300 transform hover:scale-110"
                                        aria-label={social.label}
                                    >
                                        <IconComponent className="h-5 w-5" />
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-6">
                            Links Rápidos
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Services</h3>
                        <ul className="space-y-3">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <span className="text-gray-400">
                                        {service}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">
                            Entre em Contato
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-purple-400" />
                                <span className="text-gray-400">
                                    rocketvisual.vfx@gmail.com
                                </span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-purple-400" />
                                <span className="text-gray-400">
                                    +55 (11) 93018-8184
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                    <p className="text-gray-400">
                        © 2025 Rocket Visuals. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
