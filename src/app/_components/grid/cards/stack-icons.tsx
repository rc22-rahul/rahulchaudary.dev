import { SVGProps } from 'react'

import {
  TypescriptIcon,
  HTML5Icon,
  CSS3Icon,
  ReactIcon,
  NextIcon,
  TailwindcssIcon,
  PythonIcon,
  BashIcon,
  NodeIcon,
  PrismaIcon,
  HerokuIcon,
  LinuxIcon,
  GoogleCloudIcon,
  VercelIcon,
  CloudflareIcon,
  FigmaIcon,
  DockerIcon,
  JavascriptIcon,
  RedisIcon,
  DjangoIcon,
  BunIcon,
  ExpressIcon,
  GraphQLIcon,
  AWSIcon,
  GithubIcon,
  WindowsIcon,
  VSCodeIcon,
  GitIcon,
  PostgreSQLIcon,
  JQueryIcon
} from '~/components/icons'

export type IconItem = {
  title: string
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  color: string
}

type StackLine = {
  top: IconItem[]
  bottom: IconItem[]
}

export const stackLines: StackLine = {
  top: [
    { title: 'Typescript', icon: TypescriptIcon, color: '#3178C6' },
    { title: 'HTML5', icon: HTML5Icon, color: '#E34F26' },
    { title: 'CSS3', icon: CSS3Icon, color: '#1572B6' },
    { title: 'React.js', icon: ReactIcon, color: '#61DAFB' },
    { title: 'Next.js', icon: NextIcon, color: '#FFFFFF' },
    { title: 'Tailwind CSS', icon: TailwindcssIcon, color: '#06B6D4' },
    { title: 'Figma', icon: FigmaIcon, color: '#F24E1E' },
    { title: 'JavaScript', icon: JavascriptIcon, color: '#F7DF1E' }, // JavaScript
    { title: 'jQuery', icon: JQueryIcon, color: '#0769AD' }, // jQuery
    { title: 'Bun', icon: BunIcon, color: '#FF5C6D' }, // Bun
    { title: 'Redis', icon: RedisIcon, color: '#D62D26' }, // Redis
    { title: 'Express', icon: ExpressIcon, color: '#000000' }, // Added Express
    { title: 'AWS', icon: AWSIcon, color: '#FF9900' }, // Added AWS
    { title: 'Windows', icon: WindowsIcon, color: '#F25022' }, // Added Windows
    { title: 'GraphQL', icon: GraphQLIcon, color: '#E10098' }, // Added GraphQL
  ],
  bottom: [
    { title: 'Python', icon: PythonIcon, color: '#3776AB' },
    { title: 'Django', icon: DjangoIcon, color: '#092E20' }, // Django
    { title: 'Cloudflare', icon: CloudflareIcon, color: '#F38020' },
    { title: 'Bash Script', icon: BashIcon, color: '#4EAA25' }, // Bash
    { title: 'Node.js', icon: NodeIcon, color: '#339933' }, // Node.js
    { title: 'Prisma', icon: PrismaIcon, color: '#2D3748' }, // Prisma
    { title: 'Heroku', icon: HerokuIcon, color: '#430098' }, // Heroku
    { title: 'Docker', icon: DockerIcon, color: '#2496ED' }, // Docker
    { title: 'Linux', icon: LinuxIcon, color: '#FCC624' }, // Linux
    { title: 'Google Cloud', icon: GoogleCloudIcon, color: '#4285F4' }, // Google Cloud
    { title: 'Vercel', icon: VercelIcon, color: '#000000' }, // Vercel
    { title: 'GitHub', icon: GithubIcon, color: '#181717' }, // Added GitHub
    { title: 'VSCode', icon: VSCodeIcon, color: '#007ACC' }, // Added VSCode
    { title: 'Git', icon: GitIcon, color: '#F05032' }, // Added Git
    { title: 'PostgreSQL', icon: PostgreSQLIcon, color: '#336791' }
  ]
};
