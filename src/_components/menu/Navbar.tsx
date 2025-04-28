"use client";  // Marca o arquivo como um componente de cliente

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/img/royal.png"  // Caminho da imagem
            alt="Logo da empresa"
            width={120}       // Largura da imagem
            height={40}       // Altura da imagem
          />
        </Link>
      </div>

      {/* Menu Desktop */}
      <div className="hidden md:flex gap-8 text-gray-700 text-lg">
        <Link
          href="#banner"
          className="hover:text-yellow-500 transition-colors duration-300"
        >
          Home
        </Link>
        <Link
          href="#quem-somos"
          className="hover:text-yellow-500 transition-colors duration-300"
        >
          Quem Somos
        </Link>
        <Link
          href="#contatos"
          className="hover:text-yellow-500 transition-colors duration-300"
        >
          Contato
        </Link>
        <Link
          href="#convenios"
          className="hover:text-yellow-500 transition-colors duration-300"
        >
          Convênio
        </Link>
      </div>

      {/* Menu Mobile (Hamburger) */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-gray-700 focus:outline-none"
        >
          <div className="space-y-2">
            <span className="block w-8 h-1 bg-gray-700"></span>
            <span className="block w-8 h-1 bg-gray-700"></span>
            <span className="block w-8 h-1 bg-gray-700"></span>
          </div>
        </button>
      </div>

      {/* Menu Mobile (Lateral) */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black bg-opacity-70 transition-all duration-300 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div
          className={`w-full h-full bg-white p-6 transition-transform duration-300 transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex justify-end mb-6">
            <button onClick={toggleMenu} className="text-3xl text-gray-700">
              X
            </button>
          </div>
          <div className="flex flex-col items-center gap-12 text-gray-700 text-4xl">
            <Link
              href="#banner"
              onClick={toggleMenu}
              className="hover:text-yellow-500 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="#quem-somos"
              onClick={toggleMenu}
              className="hover:text-yellow-500 transition-colors duration-300"
            >
              Quem Somos
            </Link>
            <Link
              href="#contatos"
              onClick={toggleMenu}
              className="hover:text-yellow-500 transition-colors duration-300"
            >
              Contato
            </Link>
            <Link
              href="#convenios"
              onClick={toggleMenu}
              className="hover:text-yellow-500 transition-colors duration-300"
            >
              Convênio
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
