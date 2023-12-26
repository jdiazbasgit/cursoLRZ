import { createIcon } from "@chakra-ui/icons"

export const IconEyeSlider = createIcon({
  displayName: 'IconEyeSlider',
  viewBox: "0 0 17 12",
  defaultProps: { fill: "transparent" },
  path: (
    <>
      <path
        d="M8.5 11c2.75 0 7.5-4.75 7.5-5s-4.75-5-7.5-5S1 5.875 1 6s4.75 5 7.5 5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 7.25a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  )
})
