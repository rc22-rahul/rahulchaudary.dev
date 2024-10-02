import { Metadata } from 'next'

import { AboutMe } from './sections/about-me'
import { Knowledge } from './sections/knowledge'
import { Experience } from './sections/experience'
import { Educational } from './sections/educations'

export const metadata: Metadata = {
  title: 'About Me',
  description:
    'Information about who is Rahul Chaudhary, my knowledge, statistics about me and social links.',
  keywords: ['about', 'social', 'links', 'knowledge']
}

export const revalidate = 3600 // 1h

export default function Page() {
  return (
    <div className="content-container m-auto space-y-32">
      <AboutMe />
      <Experience />
      <Educational />
      <Knowledge />
    </div>
  )
}
