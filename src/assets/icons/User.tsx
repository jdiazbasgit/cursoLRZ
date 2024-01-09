import { createIcon } from "@chakra-ui/icons"

export const IconUser = createIcon({
  displayName: 'IconUser',
  viewBox: "0 0 16 16",
  defaultProps: { fill: "transparent" },
  path: (
    <>
      <path
        d="M8.058 9.108c1.925 0 3.559-2.566 3.559-4.55C11.617 2.575 9.983 1 8.058 1A3.535 3.535 0 0 0 4.5 4.558c0 1.984 1.575 4.55 3.558 4.55Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m9.75 8.583 1.167 1.75a3.51 3.51 0 0 1 3.5 3.5l.583 1.75H1l.583-1.75a3.51 3.51 0 0 1 3.5-3.5l1.167-1.75"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.083 10.333c1.925 1.575 3.909 1.575 5.834 0"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  )
})