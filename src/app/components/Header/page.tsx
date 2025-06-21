import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { FaList } from 'react-icons/fa'
import { Button } from '../ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu'

const Header = () => {
    return (
        <header className="bg-black text-white shadow-lg flex flex-row-reverse items-center justify-between px-30 py-2 border-b border-gray-200/20">
            <div className="lg:hidden">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            size="icon"
                            className="dar:hover:bg-gray-100 border border-black transition-all duration-500 ease-in-out hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
                        >
                            <FaList className="h-5 w-5" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem asChild>
                            <Link href="/">Página Inicial</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link href="/About">Sobre nós</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link href="/Portfolio">Portfólio</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link href="/Services">Serviços</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link href="/Contact">Contato</Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <nav className="flex flex-col md:flex-row w-full justify-center items-center bg-black text-white gap-0 md:gap-4">
                <div className="flex items-center justify-between w-full max-w-6xl px-4 py-2">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/logo.png"
                            alt="Logo da Rocket Visuals"
                            width={80}
                            height={80}
                        />
                    </Link>
                </div>
                <ul className="hidden lg:flex flex-col items-center md:flex-row w-full md:w-auto space-y-2 md:space-y-0 md:space-x-4 py-2 md:py-4 text-[18px] items-center md:items-start whitespace-nowrap gap-2">
                    {[
                        { href: '/', label: 'Inicio' },
                        { href: '/About', label: 'Sobre nós' },
                        { href: '/Portfolio', label: 'Portfólio' },
                        { href: '/Services', label: 'Serviços' },
                        { href: '/Contact', label: 'Contato' },
                    ].map((item, idx, arr) => (
                        <React.Fragment key={item.href}>
                            <li>
                                <Link
                                    href={item.href}
                                    className="relative inline-block after:content-[''] after:block after:h-[2px] after:bg-white after:w-0 after:transition-all after:duration-500 after:ease-out after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 hover:after:w-full"
                                >
                                    {item.label}
                                </Link>
                            </li>
                            {idx < arr.length - 1 && (
                                <span className="text-gray-400/65">|</span>
                            )}
                        </React.Fragment>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header
