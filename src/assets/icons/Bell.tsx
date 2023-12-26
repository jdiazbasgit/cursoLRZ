import { createIcon } from "@chakra-ui/icons"

export const IconBell = createIcon({
  displayName: 'IconBell',
  viewBox: "0 0.5 15 25",
  defaultProps: { fill: "transparent" },
  path: (
    <>
      <path
        d="M8.364 3.846c3.13 0 5.708 2.578 5.708 5.707a5.71 5.71 0 0 1-.829 2.946l-.276.553.552 1.748c.184.645.645 1.105 1.289 1.473.552.276.92.829.92 1.473v.368c0 .737-.644 1.381-1.38 1.381H2.38c-.737 0-1.381-.644-1.381-1.38v-.369c0-.644.368-1.197.92-1.473.553-.276 1.013-.828 1.29-1.473l.552-1.748-.277-.553c-1.657-2.67-.736-6.26 1.934-7.825a5.71 5.71 0 0 1 2.945-.828ZM8.364 25.018a1.841 1.841 0 1 0 0-3.682 1.841 1.841 0 0 0 0 3.682Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.523 3.847v-.92c0-1.013.829-1.842 1.841-1.842 1.013 0 1.841.829 1.841 1.841v.921"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  )
})
