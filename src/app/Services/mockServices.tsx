import { Video, Palette, Zap, Camera } from 'lucide-react'

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
        features: ['Animação 2D', 'Animação 3D', 'Efeitos visuais'],
    },
]

export const mockServices = () => {
    return services.map((service, index) => ({
        id: index + 1,
        icon: service.icon,
        title: service.title,
        description: service.description,
        features: service.features,
    }))
}
