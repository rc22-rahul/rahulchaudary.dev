import { Quotes }  from "@phosphor-icons/react/dist/ssr"
import books from "./books.jpg"
import Image from "next/image";

export const BookQuoteCard = () => {
  return (
    <div>
      <div className="mt-1 w-full h-[7.5rem] rounded-lg   overflow-hidden relative hover:scale-95 duration-500 transform-gpu">
        <Image
          src={books}
          alt="books card"
          layout="fill"
          className="absolute object-cover bottom-0 left-0 right-0 top-0 -z-30  brightness-90 dark:brightness-75"
        />
        <div className="px-4 py-2 text-white text-md font-[500]">
          <Quotes size={32} weight="fill" />
          <p className="text-xl md:text-3xl ">I lived in books more than I lived anywhere else.</p>
          <span className="text-white/85 flex justify-end text-xl md:text-2xl">― Neil Gaiman</span>
        </div>
      </div>
    </div>
  );
};