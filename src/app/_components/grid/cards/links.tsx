import {
  LinkedinLogo,
  XLogo,
} from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import LeetCodeIcon from "./leetcode.svg"
import GmailIcon from "./gmail.svg"
import { CoolMode } from './cool-button'

export const LinksCard = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <a
        href="https://linkedin.com/in/rc22-rahul"
        target="_blank"
        className="flex h-[4.125rem] w-full transform-gpu flex-col items-center justify-center rounded-lg bg-[#2867b2] text-white duration-500 hover:scale-[.97]"
      >
        <LinkedinLogo size="1em" className="text-2xl" />
        <p className="-rotate-3 text-[12px] text-white/90">(serious stuff 😤)</p>
      </a>
      <CoolMode options={{
          particle:"https://www.svgrepo.com/show/209006/laughing-emoji.svg",
          size:45,
        }}>
      <a
        className="cursor-pointer flex h-[4.125rem] w-full transform-gpu flex-col items-center justify-center rounded-lg bg-[#1c1d1f] text-white duration-500 hover:scale-95"
      >
        <XLogo size="1em" className="text-2xl" />
        <p className="text-[12px] text-white/55 ">(I share memes ;)</p>
      </a>
      </CoolMode >
      <a
        href="mailto:contact@rahulchaudhary.dev"
        target="_blank"
        className="flex h-[4.125rem] w-full transform-gpu flex-col items-center justify-center rounded-lg  text-white duration-500 hover:scale-95"
      >
        <Image
          src={GmailIcon}
          alt="Follow us on Twitter"
        />
        <p className="text-[12px] opacity-80 text-black dark:text-white">
          (Hope your Email finds me "well")
        </p>
      </a>
      <a
        href="https://leetcode.com/u/threatner/"
        target="_blank"
        className="flex h-[4.125rem] w-full transform-gpu flex-col items-center justify-center rounded-lg bg-gray-400 text-white duration-500 hover:scale-95 dark:text-black"
      >
        <Image
          src={LeetCodeIcon}
          alt="Follow us on Twitter"
        />
        <p className="text-[12px]">(Coding Stuffs)</p>
      </a>
    </div>
  )
}
