import Image from "next/image";

const Contact = () => {
  return (
    <div className="flex  items-center justify-center h-screen gap-4">
      <Image className="border rounded-xl hover:scale-105 transition-transform duration-300" src="/gustavo.jpeg" alt="Foto do gustavo" width={400} height={400}/>
      <div className="gap-4 flex flex-col items-start justify-center max-w-xl text-justify">
        <h1 className="text-2xl font-bold">Quem sou eu</h1>
        <p>Gustavo Junior, fundador e criador da Rocket Visuals. Me especializei em VFX e motion design para transformar ideias em experiências visuais únicas.</p>
        <p>Minha missão é ajudar marcas e empresas a se destacarem com vídeos de alta qualidade, que realmente conectem com o público e gerem resultados. Com experiência em produção audiovisual e uma visão criativa, estou sempre em busca da perfeição em cada projeto.</p>
        <p>Se você está buscando um parceiro para criar conteúdo visual impactante, estou pronto para fazer acontecer. Vamos decolar juntos e levar sua comunicação a outro nível!</p>
      </div>
    </div>
  );
}

export default Contact;