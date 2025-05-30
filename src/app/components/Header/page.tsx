import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <nav className="flex w-full border-b border-gray-200 justify-center items-center gap-4">
        <div className="flex justify-center items-center">
        <Image src="/logo.png" alt="Logo" width={90} height={90} />
        </div>
        <ul className="flex space-x-4 py-4 text-lg">
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/about">Sobre nós</Link>
          </li>
          <li>
            <Link href="/services">Serviços</Link>
          </li>
          <li>
            <Link href="/portfolio">Portifólio</Link>
          </li>
          <li>
            <Link href="/contact">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;