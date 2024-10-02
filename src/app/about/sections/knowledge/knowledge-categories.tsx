import { SVGProps } from 'react'
import {
  BashIcon,
  CSS3Icon,
  CloudflareIcon,
  DockerIcon,
  ExpoIcon,
  GoogleCloudIcon,
  HTML5Icon,
  HerokuIcon,
  LinuxIcon,
  NestIcon,
  NextIcon,
  NodeIcon,
  PrismaIcon,
  PythonIcon,
  ReactIcon,
  RustIcon,
  SvelteIcon,
  TailwindcssIcon,
  TypescriptIcon,
  VercelIcon,
  FigmaIcon,
  JavascriptIcon,
  ElixirIcon,
  PHPIcon,
  JavaIcon,
  CPlusPlusIcon,
  SQLIcon,
  VueJsIcon,
  WordPressIcon,
  JQueryIcon,
  DenoIcon,
  BunIcon,
  ExpressIcon,
  NginxIcon,
  GraphQLIcon,
  ElectronIcon,
  TauriIcon,
  AWSIcon,
  GithubIcon,
  PostgreSQLIcon,
  PhotoShopIcon,
  GoogleWorkspace,
  WindowsIcon,
  PlanetScaleIcon,
  StyledComponentIcon,
  PWAIcon,
  GooglePlayStore,
  MicrosoftOfficeIcon,
  OnlyOfficeIcon,
  ThunderbirdIcon,
  FastApiIcon,
  GitIcon,
  GithubActionsIcon,
  VSCodeIcon,
  CodespacesIcon,
  GitpodIcon,
  VimIcon,
  GlpiIcon,
  AngularIcon,
  DjangoIcon,
  RedisIcon,
  CeleryIcon
} from '~/components/icons'

type IconType = (props: SVGProps<SVGSVGElement>) => JSX.Element

export interface Knowledge {
  icon: IconType
  title: string
  color: string
}

export const knowledgeCategories: {
  title: string
  knowledgeList: Knowledge[]
}[] = [
  {
    title: 'Programming languages',
    knowledgeList: [
      {
        title: 'Javascript',
        icon: JavascriptIcon,
        color: '#F7DF1E'
      },
      {
        title: 'Typescript',
        icon: TypescriptIcon,
        color: '#3178C6'
      },
      {
        title: 'Python',
        icon: PythonIcon,
        color: '#3776AB'
      },
      {
        title: 'Bash Script',
        icon: BashIcon,
        color: '#4EAA25'
      },
      {
        title: 'SQL',
        icon: SQLIcon,
        color: '#003B57',
      }
    ]
  },
  {
    title: 'Web development',
    knowledgeList: [
      {
        title: 'HTML5',
        icon: HTML5Icon,
        color: '#E34F26'
      },
      {
        title: 'CSS3',
        icon: CSS3Icon,
        color: '#1572B6'
      },
      {
        title: 'React.js',
        icon: ReactIcon,
        color: '#61DAFB'
      },
      {
        title: 'Next.js',
        icon: NextIcon,
        color: '#FFFFFF'
      },
      {
        title: 'Tailwind CSS',
        icon: TailwindcssIcon,
        color: '#06B6D4'
      },
      {
        title: 'jQuery',
        icon: JQueryIcon,
        color: '#0769AD'
      },
      {
        title: 'Typescript',
        icon: TypescriptIcon,
        color: '#3178C6'
      },
      {
        title: 'JavaScript',
        icon: JavascriptIcon,
        color: '#F7DF1E'
      },
      {
        title: 'Bun',
        icon: BunIcon,
        color: '#FF5C6D'
      },
      {
        title: 'Node.js',
        icon: NodeIcon,
        color: '#339933'
      },
      {
        title: 'Express',
        icon: ExpressIcon,
        color: '#000000'
      }
    ]
  },
  {
    title: 'Back-end development',
    knowledgeList: [
      {
        title: 'Django',
        icon: DjangoIcon,
        color: '#092E20'
      },
      {
        title: 'Redis',
        icon: RedisIcon,
        color: '#D62D26'
      },
      {
        title: 'Celery',
        icon: CeleryIcon,
        color: '#37814A'
      },
      {
        title: 'Node.js',
        icon: NodeIcon,
        color: '#339933'
      },
      {
        title: 'Bun',
        icon: BunIcon,
        color: '#FBF0DF'
      },
      {
        title: 'Prisma',
        icon: PrismaIcon,
        color: '#2D3748'
      },
      {
        title: 'Express',
        icon: ExpressIcon,
        color: '#FFFFFF'
      },
      {
        title: 'GraphQL',
        icon: GraphQLIcon,
        color: '#E10098'
      },
    ]
  },
  {
    title: 'Infrastructure and cloud',
    knowledgeList: [
      {
        title: 'Heroku',
        icon: HerokuIcon,
        color: '#430098'
      },
      {
        title: 'Docker',
        icon: DockerIcon,
        color: '#2496ED'
      },
      {
        title: 'Linux',
        icon: LinuxIcon,
        color: '#FCC624'
      },
      {
        title: 'Google Cloud',
        icon: GoogleCloudIcon,
        color: '#4285F4'
      },
      {
        title: 'AWS',
        icon: AWSIcon,
        color: '#232F3E'
      },
      {
        title: 'Vercel',
        icon: VercelIcon,
        color: '#000000'
      },
      {
        title: 'Cloudflare',
        icon: CloudflareIcon,
        color: '#F38020'
      },
      {
        title: 'PostgreSQL',
        icon: PostgreSQLIcon,
        color: '#336791'
      }
    ]
  },  
  {
    title: 'Misc Tools',
    knowledgeList: [
      {
        title: 'GIT',
        icon: GitIcon,
        color: '#F34F29'
      },
      {
        title: 'Github',
        icon: GithubIcon,
        color: '#181717'
      },
      {
        title: 'Github Actions',
        icon: GithubActionsIcon,
        color: '#2088FF'
      },
      {
        title: 'VSCode',
        icon: VSCodeIcon,
        color: '#0065A9'
      },
      {
        title: 'Codespaces',
        icon: CodespacesIcon,
        color: '#181717'
      },
      {
        title: 'Google Workspace',
        icon: GoogleWorkspace, // Updated icon name
        color: '#4285F4'
      },
      {
        title: 'Microsoft Office',
        icon: MicrosoftOfficeIcon,
        color: '#C72127'
      },
      {
        title: 'Windows',
        icon: WindowsIcon,
        color: '#0078D6'
      },
      {
        title: 'Figma',
        icon: FigmaIcon,
        color: '#F24E1E'
      }
    ]
  }  
]
