'use client';

import { useState } from 'react';
import Image from 'next/image';

export function Contact() {
  const [email, setEmail] = useState('');

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="relative h-[300px] rounded-lg overflow-hidden">
          <Image
            src="/Contact.png"
            alt="Contact us"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Left side - Contact Form */}
        <div className="bg-[#FFF3F9] p-8 rounded-lg h-[300px] flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-gray-600">S'inscrire & économiser </span>
            <span className="text-[#00b8d4]">10%</span>
          </h2>
          <p className="text-gray-500 mb-6">
            Office ipsum you must be muted. Synergize participate prioritize
            anyway job due harvest most opportunity didn't. Yet doing any
            meeting chart light marginalized & blocker message.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@doe.com"
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00b8d4]"
            />
            <button className="bg-[#00b8d4] text-white px-6 py-2 rounded-lg hover:bg-[#00a0bc] transition-colors">
              S'INSCRIRE
            </button>
          </div>
        </div>
        {/* Right side - Image */}
      </div>
    </section>
  );
}
