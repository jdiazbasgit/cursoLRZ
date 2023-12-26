import { createIcon } from "@chakra-ui/icons"

export const IconSearchFile = createIcon({
  displayName: 'IconSearchFile',
  viewBox: "1.2 1 12 16",
  defaultProps: { fill: "transparent" },
  path: (
    <>
      <path
        d="m8.99 11.21 1.097 1.096M4.972 9.384a2.192 2.192 0 1 0 4.384 0 2.192 2.192 0 0 0-4.384 0Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.684 15.887V2.15c0-.242.196-.439.438-.439h8.513c.117 0 .228.047.31.129l2.3 2.3a.438.438 0 0 1 .13.31v11.436a.438.438 0 0 1-.44.438H2.123a.438.438 0 0 1-.438-.438Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  )
})
