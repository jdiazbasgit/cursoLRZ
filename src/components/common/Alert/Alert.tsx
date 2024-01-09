import { Alert as AlertChakra, AlertIcon, AlertStatus } from "@chakra-ui/react";

interface Props {
  status: AlertStatus;
  message: string;
}

export default function Alert({status, message}: Props) {
  return (
    <AlertChakra status={status} borderRadius='md' color='brand.900'>
      <AlertIcon />
      {message}
    </AlertChakra>
  )
}
