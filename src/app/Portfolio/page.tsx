import { Card, CardContent } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Play, ExternalLink } from 'lucide-react'
import ADSCampanha from '../../../public/ads-campanha.jpg'
import EfeitoVisual from '../../../public/efeito-visual.jpg'

import Image from 'next/image'
import Link from 'next/link'

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            title: 'Campanhas de ADS',
            category: 'VFX estratégico para campanhas de vendas.',
            thumbnail: ADSCampanha,
            link: '',
        },
        {
            id: 2,
            title: 'Efeitos visuais para anúncio de produtos',
            category:
                'Anúncio de produtos para @marotenenergy com efeitos visuais VFX.',
            thumbnail: EfeitoVisual,
            link: '',
        },
        {
            id: 3,
            title: 'Edição dinâmica para Reels',
            category:
                'Pensada para gerar engajamento, retenção e visualização.',
            thumbnail: '',
            link: '',
        },
        {
            id: 4,
            title: 'Transições cinematográficas',
            category:
                'Divulgação de cursos de envelopamento da Imprimax Tec com transições cinematográficas.',
            thumbnail: '',
            link: '',
        },
        {
            id: 5,
            title: 'VFX para instruções técnicas.',
            category:
                'Vídeo com as principais instruções técnicas. Com elementos de Motion Design e VFX para divulgação de produtos.',
            thumbnail: '',
            link: '',
        },
        {
            id: 6,
            title: 'VFX em vídeo institucional',
            category:
                'Vídeo institucional realizado para divulgação do novo centro de treinamento Imprimax Tec.',
            thumbnail: '',
            link: '',
        },
        {
            id: 7,
            title: 'EVENTO AUTOMOTIVO E DIVULGAÇÃO DE MARCA',
            category:
                'Projeto de divulgação da marca Dixie Cult e sua presença no evento Velozes Experience.',
            thumbnail: '',
            link: '',
        },
    ]

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-gray-900 mb-6">
                        Destaques do{' '}
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Portfólio
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Uma vitrine dos meus melhores trabalhos em diferentes
                        gêneros e estilos. Cada projeto conta uma história
                        única.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <Card
                            key={project.id}
                            className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-0 shadow-lg"
                        >
                            <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
                                {project.thumbnail ? (
                                    <Image
                                        src={project.thumbnail}
                                        alt={project.title}
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 400px"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center w-full h-full text-gray-400 text-6xl">
                                        {/* Placeholder para projetos sem imagem */}
                                        <span>?</span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex gap-2">
                                                <button
                                                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                                                    title="Assistir"
                                                >
                                                    <Play className="h-4 w-4 text-white" />
                                                </button>
                                                <button
                                                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                                                    title="Ver detalhes"
                                                >
                                                    <Link href={project.link}>
                                                        <ExternalLink className="h-4 w-4 text-white" />
                                                    </Link>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <CardContent className="p-6">
                                <div className="mb-3">
                                    <Badge
                                        variant="secondary"
                                        className="mb-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border-0"
                                    >
                                        {project.title}
                                    </Badge>
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                                        {project.category}
                                    </h3>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio
