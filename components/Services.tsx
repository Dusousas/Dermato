import React from 'react';

const services = [
    {
        id: 1,
        title: 'Rinoplastia',
        image: '/service-2.png'
    },
    {
        id: 2,
        title: 'Lipoaspiração',
        image: '/service-1.png'
    },
    {
        id: 3,
        title: 'Botox',
        image: '/service-2.png'
    },
    {
        id: 4,
        title: 'Preenchimento Labial',
        image: '/service-1.png'
    },
    {
        id: 5,
        title: 'Preenchimento Labial',
        image: '/service-1.png'
    },
    {
        id: 6,
        title: 'Preenchimento Labial',
        image: '/service-2.png'
    },
    {
        id: 7,
        title: 'Preenchimento Labial',
        image: '/service-1.png'
    },
    {
        id: 8,
        title: 'Preenchimento Labial',
        image: '/service-2.png'
    }
];

export default function Services() {
    return (
        <section id='services' className='py-20 bg-gradient-to-br from-WhiteD to-BrowS/50'>
            <div className='maxW'>
                <p className="text-BrowP font-medium tracking-widest text-center uppercase">Tratamentos</p>
                <h1 className='text-black font-semibold text-4xl mt-4 text-center'>Nossos tratamentos</h1>
                <p className='text-center mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, ex.</p>

                <article className='flex flex-wrap gap-y-10 gap-5 mt-20 justify-center'>
                    {services.map((service, index) => (
                        <div key={service.id} className='flex flex-col items-center'>
                            <img
                                className='w-[380px] transition-transform duration-300 hover:scale-105 rounded-xl shadow-md'
                                src={service.image}
                                alt={service.title}
                            />
                            <div className='flex gap-1 items-center mt-2'>
                                <h1 className='text-7xl font-bold text-BrowS'>{String(index + 1).padStart(2, '0')}</h1>
                                <p className='text-lg font-medium tracking-widest uppercase'>{service.title}</p>
                            </div>
                        </div>
                    ))}
                </article>
            </div>
        </section>
    );
}
