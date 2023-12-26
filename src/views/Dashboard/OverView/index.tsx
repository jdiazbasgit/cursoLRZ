import { Grid } from "@chakra-ui/react";
interface Props {
  children: JSX.Element
}
export default function OverView({ children }: Props) {
  return (
    <Grid
      templateColumns='repeat(auto-fit, minmax(min(100%, 382px), 1fr))'
      gridAutoFlow="dense"
      gap={8}
    >
      {children}
    </Grid>
  )
}
