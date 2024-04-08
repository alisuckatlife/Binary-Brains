'use client'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


import { Button } from "@/components/ui/button"
import Image from "next/image";
import { useRouter } from "next/navigation"

const MainPage = () => {
  const router = useRouter();
  return (
    <>
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
     {/* //////////////////////////BELOW THE NAVBAR /////////////////////// */}
      
    
    <main className="p-10 md:flex justify-center items-center ">
      <Image src='/Images/binary.jpeg' alt ='' width={400} height={200} className="  rounded-lg ml-5 mr-3 mb-3 " ></Image>
      <div>Welcome to Binary Brains, your digital gateway to a world of knowledge in the realm of computer science and its diverse branches. As the virtual heartbeat of information, Binary Brains is more than just an e-library it&apos;s a dynamic hub meticulously curated to cater to the voracious minds of tech enthusiasts, students, and professionals alike. Dive into a vast repository of digital tomes spanning the intricacies of programming languages, artificial intelligence, cybersecurity, and myriad other facets of computer science. Whether you&apos;re a seasoned coder or an aspiring learner, Binary Brains is your go-to destination for unlocking the secrets of the digital universe. </div> 
    </main>


    <footer >
        <div className="text-center bg-slate-600 p-3 text-white text-xl font-semibold">&quot;Empower your intellect with Binary Brains, where the code of knowledge meets the language of progress. Unleash the potential of your digital journey – Explore, Learn, Thrive. &quot;</div>
        <p className="text-center mb-6 mt-4">&copy; 2024 Binary Brains. All rights reserved.</p>
        {/* Add more footer content as needed */}
      </footer>

    </>
  )
}

export default MainPage