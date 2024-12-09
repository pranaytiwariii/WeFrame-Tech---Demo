'use client';

import Link from 'next/link';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

const footerLinks = {
  'INFOS PRATIQUES': [
    'À propos',
    'Livraisons & Reprises',
    "Mode d'emploi",
    'F.A.Q',
  ],
  LÉGAL: ['Mentions légales', 'CGU', 'CGV', 'Politique de confidentialité'],
  'MON COMPTE': [
    'Accéder à mon compte',
    "Ma liste d'envie",
    'Créer un compte',
    'Mot de passe oublié',
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="flex justify-between max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold">
                <span className="text-gray-600">We</span>
                <span className="text-[#00b8d4]">Frame</span>
                <span className="text-gray-600">Tech</span>
              </span>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-[#00b8d4]"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* <div className="flex space-x-6">
          <Link href="#" className="text-gray-600 hover:text-[#00b8d4]">
            <Twitter className="w-5 h-5" />
          </Link>
          <Link href="#" className="text-gray-600 hover:text-[#00b8d4]">
            <Instagram className="w-5 h-5" />
          </Link>
          <Link href="#" className="text-gray-600 hover:text-[#00b8d4]">
            <Linkedin className="w-5 h-5" />
          </Link>
        </div> */}

        <div className="flex-col">
          <p className="text-gray-600 mb-4 md:mb-0">NOUS SUIVRE</p>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-600 hover:text-[#00b8d4]">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-[#00b8d4]">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-[#00b8d4]">
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
