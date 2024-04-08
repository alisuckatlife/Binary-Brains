'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Router, { useRouter } from 'next/navigation'

const Arch = () => {
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
      {/* <AlertDialog>
    <AlertDialogTrigger className="text-sm mr-5 "><Button variant="ghost">
      <div className="flex flex-row-1 items-center gap-x-2">
      <Image width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/shopping-cart--v1.png" alt="shopping-cart--v1"/>
         Cart</div></Button></AlertDialogTrigger>
    <AlertDialogContent className="rounded-md sm: p-6 ">
      <AlertDialogHeader>
        <AlertDialogTitle>Message </AlertDialogTitle>
        <AlertDialogDescription className="font-semibold text-slate-900">
          We&apos;re really sorry but this service is not available yet !
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogAction className="bg-gray-500 hover:bg-gray-700">Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog> */}
      <Button variant="ghost" onClick={()=>router.push('/contactus')}>Contact Us</Button>
      
  
      </div>
    <div className='text-2xl text-center font-semibold p-3 bg-slate-400 text-white '>Computer Organization and Architechture</div>


    <main className='grid lg:grid-cols-5 sm:grid-cols-2 font-semibold text-white gap-x-8 '>
   <div className='p-3 bg-blue-900 mt-7 rounded-md m-auto w-auto'>
                    <Link href='http://overiq.com/c-programming-beginners/'>
                    <Image src='/cguru.jpg' alt=''  width={200} height={200}/>
                    <div>C Programming for </div>
                    <div> Beginners</div>
                    </Link>
                </div>
                <div className='p-3 bg-slate-600 mt-7 rounded-md m-auto'>
                  <Link href='http://ee.hawaii.edu/~tep/EE160/Book/PDF/'>
                    <Image src='/bharat.jpg' alt='' width={200} height={300}/>
                    <div>Programming in C</div>
                    
                    </Link>
                    </div>
                    <div className='p-3 bg-yellow-900 mt-7 rounded-md m-auto'>
                    <Link href='http://en.wikibooks.org/wiki/C_Programming'>
                    <Image src='/wiki.jpg' alt='' width={200} height={300}/>
                    <div>C Programming</div>
                    
                    </Link>    
                </div>

                </main>
    </>
  )
}

export default Arch