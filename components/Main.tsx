import React from 'react';
import { FaInstagramSquare, FaWhatsappSquare } from 'react-icons/fa';

export default function Main() {
    return (
        <>
            <section className='bgMain relative'>
                <div className='maxW flex flex-col justify-center h-full'>
                    <article className='flex flex-col gap-4 lg:w-[45%]'>
                        <p className="text-BrowP font-medium tracking-widest uppercase">Skin - LoremIpsum</p>
                        <h1 className='text-black font-semibold text-4xl lg:text-7xl'>Lorem ipsum dolor sit.</h1>
                        <p className='text-BrowP'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo cum quisquam ipsa aspernatur sapiente at blanditiis suscipit unde in dolore.</p>
                    </article>

                    <article className='mt-10 flex flex-col items-start'>
                        <div className='bg-BrowP text-white px-10 font-medium py-1 tracking-wide uppercase lg:py-4 lg:text-lg'>
                            01 Tratamentos com Laser
                        </div>
                        <div className='bg-[#824847] text-white px-10 font-medium py-1 tracking-wide uppercase lg:py-4 lg:text-lg'>
                            02 Harmonização Facial
                        </div>
                        <div className='bg-[#9c6463] text-white px-10 font-medium py-1 tracking-wide uppercase lg:py-4 lg:text-lg'>
                            03 Preenchimentos
                        </div>
                        <div className='bg-[#b2807f] text-white px-10 font-medium py-1 tracking-wide uppercase lg:py-4 lg:text-lg'>
                            04 Botox
                        </div>
                    </article>

                    <article className='flex gap-2 absolute bottom-4 right-4'>
                        <FaInstagramSquare className='text-BrowP text-3xl cursor-pointer' />
                        <FaWhatsappSquare className='text-BrowP text-3xl cursor-pointer' />
                        <FaInstagramSquare className='text-BrowP text-3xl cursor-pointer' />
                    </article>
                </div>
            </section>
        </>
    );
}