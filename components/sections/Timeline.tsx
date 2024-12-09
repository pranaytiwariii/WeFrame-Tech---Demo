'use client';

import Image from 'next/image';

const timelineSteps = [
  {
    image: '/1.png',
    title: 'Livraison & Reprise',
    description: 'Selon vos besoins',
  },
  {
    image: '/2.png',
    title: 'Nettoyage',
    description: 'Selon vos besoins',
  },
  {
    image: '/3.png',
    title: 'Commande Illimitée',
    description: 'Tout est possible',
  },
  {
    image: '/4.png',
    title: 'Transport & Enlèvement',
    description: "On s'occupe de tout",
  },
];

export function Timeline() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-gray-600">On s'occupe de </span>
          <span className="text-[#00b8d4]">tout</span>
        </h2>
        <p className="text-gray-500">
          Office ipsum you must be muted. It meeting commitment busy path.
        </p>
      </div>

      <div className="flex flex-wrap text-[#393939] justify-center items-start gap-8">
        {timelineSteps.map((step, index) => (
          <div key={index} className="relative flex flex-col items-center w-64">
            <div className="p-4 rounded-full mb-4">
              <Image
                src={step.image}
                alt={step.title}
                width={100}
                height={100}
              />
            </div>
            <h3 className="font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-500 text-sm text-center">
              {step.description}
            </p>
            {index < timelineSteps.length - 1 && (
              <div className="hidden md:block border-t-2 border-line border-gray-300 w-16 absolute left-[210px] top-[70px]" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
