import { SpotifyLogo  } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import { getAlbumCover } from '~/lib/get-album-cover'

export async function MostListenedMusic() {

  const title = "Jo Tum Mere Ho"
  const artist = {"name": "Anuv Jain"}
  const url = "https://open.spotify.com/track/0eCajpR75pDW0r64U6hP2x"

  const cover = await getAlbumCover(`${title} - ${artist.name}`)

  return (
    <a
      target="_blank"
      className="relative flex h-36 transform-gpu items-center justify-center overflow-hidden rounded-lg bg-[#000] text-white duration-500 hover:scale-95"
      href={url}
    >
      <SpotifyLogo 
        weight='fill'
        size="1em"
        className="absolute left-0 top-0 text-[50px] text-green-800"
      />
      <div className="absolute bottom-0 right-8 top-0">
        <div className="side-text relative z-0 h-full font-extrabold leading-none text-white">
          <span className="absolute h-fit max-h-full truncate text-xl opacity-30 right-3 bottom-6">
            {artist.name}
          </span>
          <div className="truncate">{title}</div>
        </div>
      </div>
      <Image
        src={cover.url}
        alt={title!}
        className="absolute -bottom-10 -left-14 -z-10 rounded-full blur-2xl"
        width={200}
        height={200}
      />
      <Image
        src={cover.url}
        alt={title!}
        className="absolute -bottom-12 -left-16 animate-spin overflow-hidden rounded-full animate-duration-[120s]"
        placeholder="empty"
        width={200}
        height={200}
      />
    </a>
  )
}
