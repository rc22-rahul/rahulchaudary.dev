import { SVGProps } from 'react'

export function GitpodIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 128 128" {...props}>
      <defs>
        <linearGradient
          id="gitpod_gradient"
          gradientUnits="userSpaceOnUse"
          x1="60.966"
          y1="13.48"
          x2="19.202"
          y2="78.93"
          gradientTransform="matrix(1.58024 0 0 1.42222 0 .61)"
        >
          <stop
            offset="0"
            style={{ stopColor: '#ffb45b', stopOpacity: 1 }}
          ></stop>
          <stop
            offset="1"
            style={{ stopColor: '#ff8a00', stopOpacity: 1 }}
          ></stop>
        </linearGradient>
      </defs>
      <path
        style={{
          fill: 'url(#gitpod_gradient)',
          stroke: 'none',
          fillRule: 'evenodd'
        }}
        d="M76.047 6.922c3.8 6.008 1.488 13.66-5.164 17.094L29.52 45.356c-1.098.566-1.77 1.613-1.77 2.75v33.507c0 1.137.672 2.188 1.77 2.75l32.726 16.887a3.857 3.857 0 0 0 3.508 0L98.48 84.363c1.098-.562 1.77-1.613 1.77-2.75V60.777L70.816 75.77c-6.671 3.398-15.132 1.27-18.898-4.754-3.766-6.024-1.41-13.664 5.266-17.067l42.113-21.453C112.129 25.961 128 34.328 128 47.63v36.527c0 8.555-5.078 16.453-13.305 20.7L77.102 124.25c-8.118 4.188-18.086 4.188-26.204 0l-37.593-19.395C5.078 100.61 0 92.711 0 84.156v-38.59c0-8.554 5.078-16.457 13.305-20.699L57.117 2.262c6.653-3.43 15.125-1.344 18.93 4.66Zm0 0"
      ></path>
    </svg>
  )
}
