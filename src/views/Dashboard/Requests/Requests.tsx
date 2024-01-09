import { ChallengeDetail } from "src/components/Dashboard"
import { Button } from "@chakra-ui/react"
import { IconAdd } from "src/assets/icons"

interface Props {
  isViewCompany?: boolean
}
export default function Requests({ isViewCompany }: Props) {
  

  return (
    <>
      {/* <Button fontSize={"sm"} w="fit-content" variant={"primary"} borderRadius="full" h="32px" leftIcon={<IconAdd />}>Crear</Button> */}
      
      <ChallengeDetail />
    </>
  )
}
