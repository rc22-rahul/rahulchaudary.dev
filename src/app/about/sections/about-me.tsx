import { DownloadSimple, ArrowUpRight } from '@phosphor-icons/react/dist/ssr'

import { Title } from '~/components/title'

import { ImageCard } from '../_components/image-card'

export function AboutMe() {
  const age: number = Math.floor(((new Date()).getTime() - new Date('06/22/2000').getTime()) / 1000 / 60 / 60 / 24 / 30 / 12);

  return (
    <div className="flex flex-col gap-3 md:flex-row-reverse">
      <div className="hidden md:block">
        <ImageCard />
      </div>
      <div className="md:flex-1">
        <Title text="About Me" />
        <div className="flex justify-center md:hidden">
          <ImageCard mobile />
        </div>
        <div className="about-rendered-mdx my-5 flex flex-col gap-3 text-xl md:text-left">
          <span className='font-semibold text-1xl'>Namaste (नमस्ते) 🙏</span>
          <p>
            My name is <strong>Rahul Chaudhary</strong> !!
          </p>
          <p>
          I’m a Full-Stack Software Engineer with expertise in building scalable applications. Currently, 
          I work at  
          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 underline "> Adnabu </a>
          where I manage feed management software for Google, Amazon, and Etsy, 
          processing millions of product updates daily for over 10,000 Shopify stores.
          </p>
          <p>
            I have experience with Python, Django, React, Next.js, PostgreSQL, and below technologies. 
            I’m always learning and refining my skills.
          </p>
          <p>
            Apart from that, You'll find me Solving Puzzles 🧩.
          </p>
        </div>
        <div className="mt-12 flex items-center justify-center gap-3 md:mt-6 md:flex-row-reverse md:justify-end">
        <a 
          href="https://drive.google.com/file/d/1J08rdVXOuEx3DQH3Pcge5nIWp2Q6etDP/view?usp=drivesdk" 
          target="_blank"
          className="relative inline-block text-lg group"
        >
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-500 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-500 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">View Resume</span>
          </span>
          <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-300 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
        </a>
        </div>
      </div>
    </div>
  )
}
