import React from 'react';
import Navbar from './subc/Navbar';

export default function Header() {
    return (
        <>
            <header className='py-6'>
                <div className='maxW flex justify-between items-center'>
                    <a className='text-2xl font-medium text-BrowP uppercase' href="">Sua<span className='font-extrabold'>Logo</span></a>
                    <Navbar />
                </div>
            </header>
        </>
    );
}