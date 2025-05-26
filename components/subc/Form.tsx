import React from 'react';

export default function Form() {
    return (
        <>
            <section className='py-20 px-6 lg:px-32'>
                <form className=''>
                    <h1 className='text-white tracking-widest font-medium uppercase'>Entrar em contato</h1>
                    <h1 className='text-white font-semibold text-4xl mt-2 uppercase'>Reserve seu horário</h1>

                    <div className='flex flex-col mt-20'>
                        <label className='text-white tracking-widest font-medium uppercase' htmlFor="">Seu nome</label>
                        <input className='bg-transparent border-b border-white outline-0 py-2 text-white' placeholder='Seu nome' type="text" name="" id="" />
                    </div>

                    <div className='flex flex-col mt-6'>
                        <label className='text-white tracking-widest font-medium uppercase' htmlFor="">Seu Email</label>
                        <input className='bg-transparent border-b border-white outline-0 py-2 text-white' placeholder='Seu email' type="text" name="" id="" />
                    </div>

                    <div className='flex flex-col mt-6'>
                        <label className='text-white tracking-widest font-medium uppercase' htmlFor="">Seu Telefone</label>
                        <input className='bg-transparent border-b border-white outline-0 py-2 text-white' placeholder='Seu Telefone' type="text" name="" id="" />
                    </div>
                    <textarea className='bg-transparent border-b border-white outline-0 py-2 text-white w-full resize-none mt-6' rows={4} placeholder='Sua mensagem' name="" id=""></textarea>

                    <div className='mt-6 flex justify-center lg:justify-start'>
                        <a className='bg-BrowS text-white px-6 py-2 font-medium uppercase tracking-widest' href="">Enviar</a>
                    </div>
                </form>
            </section>
        </>
    );
}