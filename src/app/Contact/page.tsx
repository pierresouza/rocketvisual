import { Mail, Phone } from 'lucide-react'

const Contact = () => {
    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-white mb-6">
                        Vamos Criar{' '}
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Juntos
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Pronto para transformar sua visão em realidade? Entre em
                        contato e vamos conversar sobre seu próximo projeto de
                        vídeo.
                    </p>
                </div>

                <div className="flex items-center gap-12 max-w-3xl mx-auto">
                    <div className="space-y-8">
                        <div className="text-center">
                            <h3 className="text-3xl font-bold text-white mb-4">
                                Entre em Contato
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Estou sempre animado para trabalhar em novos
                                projetos e colaborar com mentes criativas. Seja
                                para uma edição rápida ou uma produção completa,
                                vamos criar algo incrível juntos.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                                <div className="p-3 bg-gradient-to-br from-purple-800 to-pink-900 rounded-full">
                                    <Mail className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">
                                        E-mail
                                    </h4>
                                    <p className="text-gray-300">
                                        rocketvisual.vfx@gmail.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                                <div className="p-3 bg-gradient-to-br from-purple-800 to-pink-900 rounded-full">
                                    <Phone className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">
                                        Telefone
                                    </h4>
                                    <p className="text-gray-300">
                                        +55 (11) 93018-8184
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
