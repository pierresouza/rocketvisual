import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Video, Palette, Zap, Camera } from 'lucide-react'

const Services = () => {
    const services = [
        {
            icon: Camera,
            title: 'Produção de Vídeo',
            description:
                'Planejamento estratégico de conteúdo e orientação de edição para maximizar engajamento e impacto.',
            features: [
                'Planejamento de conteúdo',
                'Otimização de engajamento',
                'Alinhamento de marca',
            ],
        },
        {
            icon: Video,
            title: 'Edição de Vídeo',
            description:
                'Edição de vídeo profissional com transições suaves, timing perfeito e excelência em narrativa.',
            features: [
                'Edição multi-câmera',
                'Estrutura narrativa',
                'Otimização de ritmo',
            ],
        },
        {
            icon: Palette,
            title: 'Colorização',
            description:
                'Transforme seu vídeo com colorização cinematográfica que realça o clima e o apelo visual.',
            features: [
                'Looks cinematográficos',
                'Correção de cor',
                'Realce de atmosfera',
            ],
        },
        {
            icon: Zap,
            title: 'Motion Graphics',
            description:
                'Animações, títulos e efeitos visuais marcantes que fazem seu conteúdo se destacar.',
            features: [
                'Animação 2D',
                'Animação 3D',
                'Efeitos visuais',
            ],
        },
    ]

    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-gray-600 mb-6">
                        Serviços{' '}
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Profissionais
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Serviços de edição de vídeo abrangentes, adaptados para dar vida à sua visão criativa com excelência profissional.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {services.map((service, index) => {
                        const IconComponent = service.icon
                        return (
                            <Card
                                key={index}
                                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 shadow-lg bg-black/90 text-white border border-gray-700"
                            >
                                <CardHeader className="text-center pb-4">
                                    <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <IconComponent className="h-8 w-8 text-white" />
                                    </div>
                                    <CardTitle className="text-2xl font-bold text-gray-500 group-hover:text-purple-600 transition-colors">
                                        {service.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <p className="text-white mb-6 leading-relaxed">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-2 mb-6">
                                        {service.features.map(
                                            (feature, featureIndex) => (
                                                <li
                                                    key={featureIndex}
                                                    className="text-sm text-white flex items-center justify-center"
                                                >
                                                    <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-2"></span>
                                                    {feature}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Services
