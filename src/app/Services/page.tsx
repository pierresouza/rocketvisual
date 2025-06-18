import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Video, Palette, Zap, Camera } from 'lucide-react'

const Services = () => {
    const services = [
        {
            icon: Video,
            title: 'Video Editing',
            description:
                'Professional video editing with seamless transitions, perfect timing, and storytelling excellence.',
            features: [
                'Multi-cam editing',
                'Narrative structure',
                'Pacing optimization',
            ],
        },
        {
            icon: Palette,
            title: 'Color Grading',
            description:
                'Transform your footage with cinematic color grading that enhances mood and visual appeal.',
            features: [
                'Cinematic looks',
                'Color correction',
                'Mood enhancement',
            ],
        },
        {
            icon: Zap,
            title: 'Motion Graphics',
            description:
                'Eye-catching animations, titles, and visual effects that make your content stand out.',
            features: [
                '2D animation',
                '3D animation',
                'Title design',
                'Visual effects',
            ],
        },
        {
            icon: Camera,
            title: 'Content Strategy',
            description:
                'Strategic content planning and editing guidance to maximize engagement and impact.',
            features: [
                'Content planning',
                'Engagement optimization',
                'Brand alignment',
            ],
        },
    ]

    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-gray-600 mb-6">
                        Professional{' '}
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Services
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Comprehensive video editing services tailored to bring
                        your creative vision to life with professional
                        excellence.
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
                                    <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                                        {service.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-2 mb-6">
                                        {service.features.map(
                                            (feature, featureIndex) => (
                                                <li
                                                    key={featureIndex}
                                                    className="text-sm text-gray-500 flex items-center justify-center"
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
