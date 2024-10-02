'use client'

import * as Accordion from '@radix-ui/react-accordion'
import { Brain } from '@phosphor-icons/react/dist/ssr'

import { knowledgeCategories } from './knowledge-categories'
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  KnowledgeInfo
} from './accordion'

export function Knowledge() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-center gap-1 text-xl font-medium md:justify-start">
        <Brain
          size="1em"
          className="text-neutral-600 dark:text-neutral-400"
          weight="duotone"
        />
        <span>Tools and Technologies</span>
      </div>
      <Accordion.Root
        className="z-0 w-full hover:text-neutral-500 dark:hover:text-neutral-400"
        type="single"
        collapsible
      >
        {knowledgeCategories.map(category => {
          return (
            <AccordionItem key={category.title} value={category.title}>
              <AccordionTrigger>{category.title}</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap gap-3">
                  {category.knowledgeList.map(knowledge => (
                    <KnowledgeInfo
                      knowledge={knowledge}
                      key={knowledge.title}
                    />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion.Root>
    </div>
  )
}
