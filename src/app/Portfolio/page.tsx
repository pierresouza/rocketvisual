import { Card, CardContent } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import Image from 'next/image'
import Link from 'next/link'
import projects from './mockProjects'

const Portfolio = () => {
    return (
        <section className="py-20 bg-black backdrop-blur-lg">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-white mb-6">
                        Destaques do{' '}
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Portfólio
                        </span>
                    </h2>
                    <p className="text-2xl text-white max-w-3xl mx-auto">
                        Uma vitrine dos meus melhores trabalhos em diferentes
                        gêneros e estilos. Cada projeto conta uma história
                        única.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <Card
                            key={project.id}
                            className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-700 bg-black shadow-lg"
                        >
                            <div className="relative overflow-hidden aspect-square bg-gray-100">
                                {project.thumbnail ? (
                                    <Image
                                        src={project.thumbnail}
                                        alt={project.title}
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 400px"
                                        quality={100}
                                        priority
                                    />
                                ) : (
                                    <div className="flex items-center justify-center w-full h-full text-gray-400 text-6xl">
                                        <span>?</span>
                                    </div>
                                )}
                            </div>
                            <CardContent className="p-6">
                                <div className="mb-3">
                                    <Badge
                                        variant="secondary"
                                        className="mb-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border-0"
                                    >
                                        {project.title}
                                    </Badge>
                                    <h3 className="text-xl font-bold text-white group-hover:text-purple-600 transition-colors">
                                        {project.category}
                                    </h3>
                                    <span className="text-white mt-8 flex max-w-[150px] hover:text-purple-600 transition-colors font-bold duration-300">
                                        <Link href="/Contact">
                                            Pergunte-nos
                                        </Link>
                                    </span>
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
