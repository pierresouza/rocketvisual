import Link from 'next/link'
import Image from 'next/image'
import { Button } from './components/ui/button'
import { Play, Award, Users, Video } from 'lucide-react'

const Home = () => {
    return (
        <section className="relative min-h-screen bg-black overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6 py-16 flex flex-col items-center text-center">
                <div className="mb-8">
                    <div className="flex items-center justify-center mb-8">
                        <Image
                            src="/logo.png"
                            alt="Logo rocket visual"
                            width={600}
                            height={600}
                        />
                    </div>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                        Mais do que vídeos bonitos, criamos experiências visuais
                        que conectam. A Rocket Visuals transforma sua visão em
                        conteúdo com alma, estratégia e excelência
                        cinematográfica.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 mb-16">
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                        <Play className="mr-2 h-5 w-5" />
                        Assistir Reel
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="border-white/30 text-black hover:scale-105 transform transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm cursor-pointer"
                    >
                        <Link href="/Portfolio">Ver Portfólio</Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                        <Award className="h-12 w-12 text-purple-400 mb-4 mx-auto" />
                        <h3 className="text-2xl font-bold text-white mb-2">
                            5+ Anos
                        </h3>
                        <p className="text-gray-300">
                            Experiência Profissional
                        </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                        <Users className="h-12 w-12 text-blue-400 mb-4 mx-auto" />
                        <h3 className="text-2xl font-bold text-white mb-2">
                            200+
                        </h3>
                        <p className="text-gray-300">Clientes Satisfeitos</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                        <Video className="h-12 w-12 text-pink-400 mb-4 mx-auto" />
                        <h3 className="text-2xl font-bold text-white mb-2">
                            500+
                        </h3>
                        <p className="text-gray-300">Projetos Concluídos</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
