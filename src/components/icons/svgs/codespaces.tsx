import { SVGProps } from 'react'

export function CodespacesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 128 128" {...props}>
      <defs>
        <linearGradient
          id="codespaces_a"
          x1="11.622"
          x2="11.622"
          y1="7.023"
          y2="13.825"
          gradientTransform="translate(.5 .592) scale(7.9375)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#0196CA"></stop>
          <stop offset="1" stopColor="#0065A9"></stop>
        </linearGradient>
        <linearGradient
          id="codespaces_b"
          x1="11.622"
          x2="11.622"
          y1="8.675"
          y2="15.977"
          gradientTransform="translate(.5 .592) scale(7.9375)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#01A7DE"></stop>
          <stop offset="1" stopColor="#007ACC"></stop>
        </linearGradient>
        <linearGradient
          id="codespaces_c"
          x1="14.594"
          x2="14.594"
          y1="7.023"
          y2="15.977"
          gradientTransform="translate(.5 .592) scale(7.9375)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#2EC2F6"></stop>
          <stop offset="1" stopColor="#1F9CF0"></stop>
        </linearGradient>
      </defs>
      <path
        fill="#24292e"
        d="M.5 64.092C.5 29.008 28.916.592 64 .592c29.601 0 54.457 20.23 61.501 47.625h-24.065a25.436 25.436 0 0 0-3.305-4.524c.635-1.588 2.857-8.097-.635-16.828 0 0-5.318-1.747-17.462 6.508-5.08-1.428-10.478-2.143-15.875-2.143s-10.795.715-15.875 2.143c-12.144-8.175-17.462-6.508-17.462-6.508-3.493 8.73-1.27 15.24-.635 16.828-4.048 4.445-6.509 10.16-6.509 17.066 0 17.057 7.281 24.836 16.51 28.507v12.959c-3.492-.284-7.264-1.992-10.16-6.858-1.19-1.905-4.762-6.588-9.763-6.51-5.318.08-2.143 3.017.08 4.208 2.698 1.508 5.794 7.143 6.508 8.97 1.024 2.878 3.903 7.87 13.335 8.162v12.767C16.906 113.541.501 90.788.501 64.093z"
      ></path>
      <path
        fill="url(#codespaces_a)"
        d="m124.97 63.867-14.719-7.087a4.45 4.45 0 0 0-5.077.863l-46.2 39.965a2.977 2.977 0 0 0 .003 4.402l7.904 7.547a2.977 2.977 0 0 0 3.801.169l40.941-31.744 9.647-10.638c.988-1.09 2.1-2.382 3.563-2.23 1.412.148 2.665 1.31 2.665 2.946v-.17a4.465 4.465 0 0 0-2.528-4.023z"
      ></path>
      <path
        fill="url(#codespaces_b)"
        d="m124.97 119.88-14.719 7.087a4.449 4.449 0 0 1-5.077-.863l-46.2-43.933a2.977 2.977 0 0 1 .003-4.403l7.904-7.546a2.977 2.977 0 0 1 3.801-.17l40.941 35.713 9.647 10.639c.988 1.09 2.1 2.382 3.563 2.23 1.413-.149 2.665-1.311 2.665-2.947v.171a4.465 4.465 0 0 1-2.528 4.023z"
      ></path>
      <path
        fill="url(#codespaces_c)"
        d="M110.25 126.97a4.451 4.451 0 0 1-5.078-.864c1.648 1.647 6.45.48 6.45-1.85V59.494c0-2.33-4.802-3.497-6.45-1.85a4.452 4.452 0 0 1 5.078-.863l14.717 5.093a4.465 4.465 0 0 1 2.53 4.023v51.956c0 1.716-.984 3.28-2.53 4.024z"
      ></path>
    </svg>
  )
}
