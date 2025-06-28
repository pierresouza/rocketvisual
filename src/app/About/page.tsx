'use client'

import Image from 'next/image'
import { Card, CardContent } from '../components/ui/card'

const Contact = () => {
    return (
        <section
            aria-labelledby="about-title"
            className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-10 md:py-16 lg:py-20"
            style={{
                backgroundImage:
                    "url('/outrun-neon-dark-background-purple-3840x2160-4523.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Card className="bg-black/30 backdrop-blur-md text-white max-w-4xl w-full border-none shadow-lg">
                <CardContent className="p-6 md:p-10 space-y-6">
                    <h2
                        id="about-title"
                        className="text-3xl font-bold text-center"
                    >
                        Sobre nós
                    </h2>

                    <div className="space-y-4 text-sm sm:text-base text-left md:text-justify">
                        <p>
                            A Rocket Visuals transforma ideias em vídeos
                            impactantes. Com VFX e motion design, criamos
                            conteúdos que elevam sua comunicação e fazem sua
                            marca se destacar. Usando criatividade e técnicas,
                            garantimos produções de alta qualidade que capturam
                            a atenção do seu público. Se busca vídeos que
                            impressionam e geram resultados, estamos prontos
                            para decolar com você. 🚀
                        </p>
                        <p>
                            Fundada por Gustavo, um apaixonado por contar
                            histórias através de vídeos, a Rocket Visuals nasceu
                            do desejo de criar conteúdos visuais que realmente
                            impactem. Com uma equipe dedicada e criativa,
                            estamos aqui para transformar suas ideias em
                            realidade.
                        </p>
                        <p>
                            Se você está procurando uma produtora de vídeos que
                            combine criatividade, inovação e resultados, a
                            Rocket Visuals é a escolha certa. Vamos juntos criar
                            algo incrível!
                        </p>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-black/30 backdrop-blur-md text-white max-w-4xl w-full border-none shadow-lg mt-10">
                <CardContent className="p-6 md:p-10">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="w-full max-w-xs md:max-w-[400px] flex-shrink-0">
                            <Image
                                className="rounded-xl hover:scale-105 transition-transform duration-300 object-cover w-full"
                                src="/gustavo.jpeg"
                                alt="Gustavo Junior, fundador da Rocket Visuals"
                                width={400}
                                height={400}
                                priority
                            />
                        </div>

                        <div className="space-y-4 text-sm sm:text-base text-left md:text-justify">
                            <h3 className="text-2xl font-bold">Quem sou eu</h3>
                            <p>
                                Gustavo Junior, fundador e criador da Rocket
                                Visuals. Me especializei em VFX e motion design
                                para transformar ideias em experiências visuais
                                únicas.
                            </p>
                            <p>
                                Minha missão é ajudar marcas e empresas a se
                                destacarem com vídeos de alta qualidade, que
                                realmente conectem com o público e gerem
                                resultados. Com experiência em produção
                                audiovisual e uma visão criativa, estou sempre
                                em busca da perfeição em cada projeto.
                            </p>
                            <p>
                                Se você está buscando um parceiro para criar
                                conteúdo visual impactante, estou pronto para
                                fazer acontecer. Vamos decolar juntos e levar
                                sua comunicação a outro nível!
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}

export default Contact
