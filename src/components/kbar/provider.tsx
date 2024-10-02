import { ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { KBarProvider, Action } from 'kbar'
import { useTheme } from 'next-themes'
import {
  Briefcase,
  Code,
  Desktop,
  GithubLogo,
  House,
  Moon,
  Palette,
  Sun,
  User,
  LinkedinLogo,
  X,
  PaperPlaneRight,
} from '@phosphor-icons/react/dist/ssr'
import { KBar } from '~/components/kbar'

export function CustomKBarProvider({ children }: { children: ReactNode }) {
  const { push } = useRouter()
  const { setTheme } = useTheme()

  const navigationActions: Action[] = [
    {
      id: 'home',
      name: 'Home',
      shortcut: ['ho'],
      keywords: 'homepage main',
      icon: <House size="1em" weight="duotone" />,
      perform: () => push('/')
    },
    {
      id: 'about',
      name: 'About',
      shortcut: ['ab'],
      keywords: 'about me user information info',
      icon: <User size="1em" weight="duotone" />,
      perform: () => push('/about')
    },
    {
      id: 'projects',
      name: 'Projects',
      shortcut: ['pr'],
      keywords: 'project projects github',
      icon: <Briefcase size="1rem" weight='duotone'/>,
      perform: () => push('/projects')
    }
  ]


  const themeActions: Action[] = [
    {
      id: 'set-theme',
      name: 'Change theme',
      icon: <Palette size="1em" weight="duotone" />,
      keywords: 'theme dark light',
      shortcut: ['c', 't'],
      section: 'Configurations'
    },
    {
      id: 'system-theme',
      name: 'System colors',
      icon: <Desktop size="1em" weight="duotone" />,
      parent: 'set-theme',
      keywords: 'theme dark light',
      perform: () => setTheme('system')
    },
    {
      id: 'dark-theme',
      name: 'Dark mode',
      icon: <Moon size="1em" weight="duotone" />,
      parent: 'set-theme',
      keywords: 'theme dark light',
      perform: () => setTheme('dark')
    },
    {
      id: 'light-theme',
      name: 'Light mode',
      icon: <Sun size="1em" weight="duotone" />,
      parent: 'set-theme',
      keywords: 'theme dark light',
      perform: () => setTheme('light')
    }
  ]

    // Links actions with shortcuts
    const linksActions: Action[] = [
      {
        id: 'linkedin',
        name: 'LinkedIn',
        shortcut: ['li'],
        keywords: 'linkedin professional network',
        icon: <LinkedinLogo size="1em" />,
        perform: () => window.open('https://linkedin.com/in/rc22-rahul', '_blank')
      },
      {
        id: 'github',
        name: 'Github',
        shortcut: ['gi'],
        keywords: 'git github',
        icon: <GithubLogo size="1em" />,
        perform: () => window.open('https://github.com/rc22-rahul', '_blank')
      },
      {
        id: 'x-platform',
        name: 'X (formerly Twitter)',
        shortcut: ['x'],
        keywords: 'x memes social media',
        icon: <X size="1em" />,
        perform: () => window.open('https://x.com/elonmusk', '_blank')
      },
      {
        id: 'email',
        name: 'Email',
        shortcut: ['gm'],
        keywords: 'gmail email contact',
        icon: <PaperPlaneRight weight='fill' size="1rem" />,
        perform: () => window.location.href = 'mailto:contact@rahulchaudhary.dev'
      },
      {
        id: 'leetcode',
        name: 'LeetCode',
        shortcut: ['lc'],
        keywords: 'leetcode coding challenges',
        icon: <Code weight='fill' size='1rem' />,
        perform: () => window.open('https://leetcode.com/u/threatner/', '_blank')
      }
    ]

  const actions: Action[] = [
    ...navigationActions,
    ...themeActions,
    ...linksActions
  ]

  return (
    <KBarProvider actions={actions}>
      <KBar />
      {children}
    </KBarProvider>
  )
}
