import Image from "next/image";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-8 px-4 py-8">
      <Image
        className="border rounded-xl hover:scale-105 transition-transform duration-300 md:w-[400px] object-fill"
        src="/gustavo.jpeg"
        alt="Foto do gustavo"
        width={400}
        height={400}
        priority
      />
      <div className="gap-4 flex flex-col items-start justify-center max-w-xl text-justify mt-6 md:mt-0">
        <h1 className="text-2xl font-bold">Quem sou eu</h1>
        <p>
          Gustavo Junior, fundador e criador da Rocket Visuals. Me especializei em VFX e motion design para transformar ideias em experiências visuais únicas.
        </p>
        <p>
          Minha missão é ajudar marcas e empresas a se destacarem com vídeos de alta qualidade, que realmente conectem com o público e gerem resultados. Com experiência em produção audiovisual e uma visão criativa, estou sempre em busca da perfeição em cada projeto.
        </p>
        <p>
          Se você está buscando um parceiro para criar conteúdo visual impactante, estou pronto para fazer acontecer. Vamos decolar juntos e levar sua comunicação a outro nível!
        </p>
      </div>
    </div>
  );
};

export default Contact;