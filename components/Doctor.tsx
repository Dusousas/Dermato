import React from 'react';
import { FaInstagramSquare, FaWhatsappSquare } from 'react-icons/fa';

export default function Doctor() {
    return (
        <>
            <section className='py-20 bg-WhiteD'>
                <div className='maxW flex flex-col gap-10 items-center lg:flex-row'>
                    <article className='lg:w-1/2 flex justify-end'>
                        <img className='w-[600px]' src="/doctor.png" alt="" />
                    </article>

                    <article className='lg:w-1/2'>
                        <p className="text-BrowP font-medium tracking-widest text-center uppercase lg:text-left">Quem sou eu</p>
                        <h1 className='text-black font-semibold text-4xl mt-2 text-center lg:text-left'><span className='text-BrowP font-bold'>Dr. </span>Leonardo Martinelli</h1>
                        <p className='text-BrowP mt-4 text-center lg:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit saepe, iure maxime quidem cumque animi quae illo voluptas nemo velit corporis ullam. Ab repudiandae exercitationem amet sequi corrupti, aperiam saepe sint corporis neque blanditiis vel ad. Libero possimus officia saepe?</p>
                        <p className='text-BrowP mt-2 text-center lg:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit saepe, iure maxime quidem cumque animi quae illo voluptas nem.</p>
                        <article className='flex mt-4 justify-center lg:justify-start'>
                            <FaInstagramSquare className='text-BrowP text-3xl cursor-pointer' />
                            <FaWhatsappSquare className='text-BrowP text-3xl cursor-pointer' />
                        </article>

                        <div className='mt-6 flex justify-center lg:justify-start'>
                            <a className='bg-BrowP text-white px-6 py-2 font-medium' href="">Marcar uma consulta</a>
                        </div>
                    </article>
                </div>
            </section>
        </>
    );
}