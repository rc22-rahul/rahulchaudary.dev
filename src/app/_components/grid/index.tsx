import { Book, Wrench } from '@phosphor-icons/react/dist/ssr'
import { GithubLink } from './cards/github-link'
import { GithubStats } from './cards/github-stats'
import { LinksCard } from './cards/links'
import { MostListenedMusic } from './cards/most-listened-music'
import { StacksCard } from './cards/stacks-card'
import LocationCard from './cards/location-card'
import { BookQuoteCard } from './cards/book-card'

const BooksCard = () => (
  <div className="mt-1 relative flex items-center justify-center gap-2 rounded-xl border border-black/30 bg-black/5 p-5 dark:border-white/30 dark:bg-white/5">
    <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 text-5xl font-medium opacity-30 blur-sm">
      <Book weight="duotone" />
      <span>Books</span>
    </div>

    <Wrench />
    <span>Under construction...</span>
  </div>
)

export function Grid() {
  return (
    <div>

      <div className="mt-8 grid grid-cols-3 gap-3 md:grid-cols-6">
        <div className="col-span-3">
          <GithubLink />
        </div>
        <div className="col-span-2">
          <GithubStats />
        </div>
        <MostListenedMusic />
      </div>

      <div className="mt-3 grid grid-cols-3 md:grid-cols-6">
        <div className="col-span-3 flex flex-col gap-3">
          <div className="flex gap-3">
            <div className="flex w-full flex-col gap-3">
              <LinksCard />
            </div>
          </div>

          <div className="cols-span-3">

          <StacksCard />
          </div>
        </div>

        <div className="col-span-3 space-y-3 md:ml-3">
          <LocationCard />
        </div>
      </div>
      {/* Full-width BookQuoteCard */}
      <div className="col-span-3 md:col-span-6">
        <BookQuoteCard />
      </div>

      {/* Full-width BooksCard */}
      <div className="mt-1.5 col-span-3 md:col-span-6">
        <BooksCard />
      </div>
    </div>
  )
}
