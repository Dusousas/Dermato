import React from 'react';
import Navbar from './subc/Navbar';

export default function Header() {
    return (
        <>
            <header className='py-4'>
                <div className='maxW flex justify-between items-center'>
                    <a href="">Logo</a>
                    <Navbar />
                </div>
            </header>
        </>
    );
}