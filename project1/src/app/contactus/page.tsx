'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import Router, { useRouter } from 'next/navigation'
import Image from 'next/image'

const ContactUs = () => {
    const router = useRouter();

    return (
        <>
            <div className='flex flex-row flex-wrap p-2 bg-gray-500 text-white text-xl font-medium justify-between items-center'>
                <button onClick={() => router.push('/')}>
                    <div className="p-1 px-3 text-white rounded-md font-bold text-xl">Binary Brains</div>
                </button>
                <Button variant="ghost" onClick={() => router.push('/software')} >Software Dev & Design</Button>
                <Button variant="ghost" onClick={() => router.push('/arch')}>Comp Org & Arch</Button>
                <Button variant="ghost" onClick={() => router.push('/math')} >Comp Sci & Math</Button>
                <Button variant="ghost" onClick={() => router.push('/funds')}>Comp Net Fundamentals</Button>
                <Button variant="ghost" onClick={() => router.push('/reqs')}>Reqs Eng.</Button>
                <Button variant="ghost" onClick={() => router.push('/web')}>Intro to Web Prg.</Button>
                <Button variant="ghost" onClick={() => router.push('/dsa')}>DSA</Button>
                <Button variant="ghost" onClick={() => router.push('/contactus')}>Contact Us</Button>
            </div>
            {/* BELOW THE NAVBAR */}
            <div className='text-2xl p-3 font-semimbold   bg-cyan-900 text-white'>Contact Us by email</div>
            <div className='flex-row p-4 text-xl space-y-4 border-2 border-cyan-900 m-5 rounded-md'>
                <div className='flex items-center '> <img width="44" height="48" src="https://img.icons8.com/color/48/gmail--v1.png" alt="gmail--v1"/><a className='ml-3' href="mailto:u2373857@unimail.hudd.ac.uk">Essa - u2373857@unimail.hudd.ac.uk</a></div>
                <div className='flex items-center '> <img width="44" height="48" src="https://img.icons8.com/color/48/gmail--v1.png" alt="gmail--v1"/><a className='ml-3' href="mailto:u2360785@unimail.hud.ac.uk">Haider - u2360785@unimail.hud.ac.uk</a></div>
                <div className='flex items-center '> <img width="44" height="48" src="https://img.icons8.com/color/48/gmail--v1.png" alt="gmail--v1"/><a className='ml-3' href="mailto:u2361062@unimail.hudd.ac.uk">Hamza - u2361062@unimail.hudd.ac.uk</a></div>
                <div className='flex items-center '> <img width="44" height="48" src="https://img.icons8.com/color/48/gmail--v1.png" alt="gmail--v1"/><a className='ml-3' href="mailto:u2355273@unimail.hudd.ac.uk">Imaan - u2355273@unimail.hudd.ac.uk</a></div>
                <div className='flex items-center '> <img width="44" height="48" src="https://img.icons8.com/color/48/gmail--v1.png" alt="gmail--v1"/><a className='ml-3' href="mailto:2264364@unimail.hudd.ac.uk">Shakir - 2264364@unimail.hudd.ac.uk</a></div>
            </div>
        </>
    );
};

export default ContactUs;
