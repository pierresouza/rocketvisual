import Link from "next/link";
import Image from "next/image";
import { FaList } from "react-icons/fa";
import {Button} from '../../../components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";

const Header = () => {
  return (
    <header className="bg-black text-white shadow-lg flex flex-row-reverse items-center justify-between px-4 py-2 border-b border-gray-200">
      <div className="lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="dar:hover:bg-gray-100 border border-black transition-all duration-500 ease-in-out hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
            >
              <FaList className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Menu</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/">Página Inicial</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/projects">Projetos</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/about">Sobre</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/experience">Experiência</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <nav className="flex flex-col md:flex-row w-full justify-center items-center bg-black text-white gap-0 md:gap-4">
        <div className="flex items-center justify-between w-full max-w-6xl px-4 py-2">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Logo da Rocket Visuals" width={80} height={80} />
          </Link>
          {/* Mobile menu button (hidden on md+) */}
            
          </div>
          <ul className="hidden lg:flex flex-col md:flex-row w-full md:w-auto space-y-2 md:space-y-0 md:space-x-4 py-2 md:py-4 text-[18px] items-center md:items-start whitespace-nowrap">
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