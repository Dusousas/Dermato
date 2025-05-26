import React from 'react';
import Drag from './subc/Drag';

export default function Portfolio() {
    return (
        <>
            <section className='py-32 bg-gradient-to-br from-WhiteD to-BrowS/50'>
                <div className='maxW flex flex-col gap-10 items-center lg:flex-row'>
                    <Drag />

                    <article>
                        <p className="text-BrowP font-medium tracking-widest text-center uppercase lg:text-left"> portfólio</p>
                        <h1 className='text-black font-semibold text-4xl mt-2 text-center uppercase lg:text-left'>Galeria antes & Depois</h1>
                        <p className='text-BrowP text-center mt-2 lg:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit saepe, iure maxime quidem cumque animi quae illo voluptas nemo velit corporis ullam. Ab repudiandae exercitationem amet sequi corrupti, aperiam saepe sint corporis neque blanditiis vel ad. Libero possimus officia saepe?</p>
                        <div className='mt-6 mx-auto lg:mx-0'>
                            <a className='bg-BrowP text-white px-6 py-2 font-medium' href="">Ver mais</a>
                        </div>
                    </article>
                </div>
            </section>
        </>
    );
}