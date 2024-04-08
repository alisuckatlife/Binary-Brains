'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import Router, { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
const Dsa = () => {
    const router= useRouter()
    return (<>
     <div className='flex flex-row flex-wrap p-2 bg-gray-500 text-white text-xl font-medium justify-between items-center'>
     <button onClick={()=>router.push('/')}> <div className="p-1 px-3 text-white rounded-md font-bold text-xl">Binary Brains</div></button>
      <Button variant="ghost" onClick={()=>router.push('/software')} >Software Dev & Design</Button>
    <Button variant="ghost" onClick={()=>router.push('/arch')}>Comp Org & Arch</Button>
    <Button variant="ghost" onClick={()=>router.push('/math')} >Comp Sci & Math</Button>
    <Button variant="ghost" onClick={()=>router.push('/funds')}>Comp Net Fundamentals</Button>
    <Button variant="ghost" onClick={()=>router.push('/reqs')}>Reqs Eng.</Button>
    <Button variant="ghost" onClick={()=>router.push('/web')}>Intro to Web Prg.</Button>
    <Button variant="ghost" onClick={()=>router.push('/dsa')}>DSA</Button>
    <Button variant="ghost" onClick={()=>router.push('/contactus')}>Contact Us</Button>
      
  
      </div>
      <div className=' text-2xl text-center font-semibold p-3 bg-slate-400 text-white'>Data Struct. and Algorithms</div>
      <main className='grid lg:grid-cols-5 sm:grid-cols-2 font-semibold text-white gap-x-8 '>
   <div className='p-3 bg-red-700 mt-7 rounded-md m-auto w-auto'>
                    <Link href='http://people.cs.vt.edu/~shaffer/Book/Java3e20120102.pdf'>
                    <Image src='/dsa1.jpg' alt=''  width={200} height={200}/>
                    <div>Intro to Data Analysis</div>
                    </Link>
                </div>
                <div className='p-3 bg-slate-700 mt-7 rounded-md m-auto'>
                  <Link href='https://r4ds.hadley.nz/'>
                    <Image src='/ds.jpg' alt='' width={200} height={300}/>
                    <div>R for Data Science</div>
                    
                    </Link>
                    </div>
                    <div className='p-3 bg-gray-800 mt-7 rounded-md m-auto'>
                    <Link href='https://cdn2.hubspot.net/hubfs/2287011/ebook_data_cleaning/Free%20Ebook%20-%20The%20Ultimate%20Guide%20to%20Basic%20Data%20Cleaning.pdf'>
                    <Image src='/dc2.png' alt='' width={200} height={300}/>
                    <div>Basic Data Cleaning</div>
                    
                    </Link>    
                </div>

                </main>
   
    </>
  )
}

export default Dsa