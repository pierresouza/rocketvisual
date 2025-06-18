import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <nav className="flex  w-full border-b border-gray-200 justify-center items-center bg-black text-white gap-4">
        <div className="flex justify-center items-center">
        <Link href="/" className="flex items-center mt-2" >
          <Image  src="/logo.png" alt="Logo da Rocket Visuals" width={100} height={100}  />
        </Link>
        </div>
        <ul className="flex space-x-4 py-4 text-[20px]">
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/About">Sobre nós</Link>
          </li>
          <li>
            <Link href="/Services">Serviços</Link>
          </li>
          <li>
            <Link href="/Contact">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;