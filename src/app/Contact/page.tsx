import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { Mail, Phone, Send } from 'lucide-react'

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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Formulário de Contato */}
                    <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold text-white text-center">
                                Envie uma Mensagem
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Input
                                    placeholder="Seu Nome"
                                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400"
                                />
                                <Input
                                    placeholder="Seu E-mail"
                                    type="email"
                                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400"
                                />
                            </div>
                            <Input
                                placeholder="Assunto do Projeto"
                                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400"
                            />
                            <Textarea
                                placeholder="Conte-me sobre seu projeto..."
                                rows={6}
                                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 resize-none"
                            />
                            <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 text-lg font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
                                <Send className="mr-2 h-5 w-5" />
                                Enviar Mensagem
                            </Button>
                        </CardContent>
                    </Card>
                    <div className="space-y-8">
                        <div className="text-center lg:text-left">
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
