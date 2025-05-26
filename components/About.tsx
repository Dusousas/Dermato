import React from 'react';

export default function About() {
    return (
        <>
            <section id='about' className='py-20'>
                <div className='maxW flex flex-col gap-10 justify-center items-center lg:flex-row'>
                    <article className='flex flex-col lg:w-[50%]'>
                        <p className="text-BrowP font-medium tracking-widest text-center uppercase lg:text-left">Sobre nós</p>
                        <h1 className='text-black font-semibold text-4xl mt-4 text-center lg:text-left'>Lorem ipsum dolor sit.</h1>
                        <p className='text-BrowP mt-4 text-center lg:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit saepe, iure maxime quidem cumque animi quae illo voluptas nemo velit corporis ullam. Ab repudiandae exercitationem amet sequi corrupti, aperiam saepe sint corporis neque blanditiis vel ad. Libero possimus officia saepe?</p>
                        <p className='text-BrowP mt-2 text-center lg:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit saepe, iure maxime quidem cumque animi quae illo voluptas nem.</p>

                        {/* Efeito */}
                        <article className='mx-auto lg:mx-0'>
                            <div className='mt-8 flex items-center gap-6 hover:text-BrowS hover:translate-x-2 transition-all duration-300 ease-in-out cursor-pointer group'>
                                <div className='border border-black h-0 w-10 group-hover:border-BrowS transition-colors duration-300 ease-in-out' />
                                <p className='uppercase tracking-wider text-xl font-medium'>Titulo exemplo 1</p>
                            </div>

                            <div className='mt-8 flex items-center gap-6 hover:text-BrowS hover:translate-x-2 transition-all duration-300 ease-in-out cursor-pointer group'>
                                <div className='border border-black h-0 w-10 group-hover:border-BrowS transition-colors duration-300 ease-in-out' />
                                <p className='uppercase tracking-wider text-xl font-medium'>Titulo exemplo 2</p>
                            </div>

                            <div className='mt-8 flex items-center gap-6 hover:text-BrowS hover:translate-x-2 transition-all duration-300 ease-in-out cursor-pointer group'>
                                <div className='border border-black h-0 w-10 group-hover:border-BrowS transition-colors duration-300 ease-in-out' />
                                <p className='uppercase tracking-wider text-xl font-medium'>Titulo exemplo 3</p>
                            </div>

                            <div className='mt-8 flex items-center gap-6 hover:text-BrowS hover:translate-x-2 transition-all duration-300 ease-in-out cursor-pointer group'>
                                <div className='border border-black h-0 w-10 group-hover:border-BrowS transition-colors duration-300 ease-in-out' />
                                <p className='uppercase tracking-wider text-xl font-medium'>Titulo exemplo 4</p>
                            </div>
                        </article>

                        <div className='mt-10 mx-auto lg:mx-0'>
                            <a className='bg-BrowP text-white px-6 py-2 font-medium' href="">Marcar uma consulta</a>
                        </div>
                    </article>

                    <article>
                        <img src="/about-1.png" alt="" />

                        <div>
                            
                        </div>
                    </article>
                </div>
            </section>
        </>
    );
}