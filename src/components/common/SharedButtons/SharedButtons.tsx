import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { LinkedinShareButton, FacebookShareButton, LinkedinIcon, FacebookIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon, EmailShareButton, EmailIcon } from "react-share"
import PathName from "src/consts/pathName";
import { CodeChallenge } from "src/models";



const basePath = process.env.NEXT_PUBLIC_BASE_PATH

interface Props {
  idCodeChallenge: CodeChallenge["id"]
  dat: string | undefined
  dateCertificate?: string | undefined
}
export default function SharedButtons({ idCodeChallenge, dat, dateCertificate }: Props) {

  const dateObject = new Date(dateCertificate?.toString() || Date.now());
  const year = dateObject.getFullYear();
  const yearEnd = dateObject.getFullYear() + 1;
  const month = dateObject.getMonth() + 1;

  const expirationDate = year + '-' + month + '-01';
  const shareUrl = `${basePath}${PathName.certification.base}/id=${idCodeChallenge}?`
  console.log(dateCertificate)


  const certificate = dat


  const linkedinUrl = 'https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=Ninja Talent&organizationId=71778491&issueYear=' + year + '&issueMonth=' + month + '&certUrl=' + certificate + '&certId=' + idCodeChallenge + '&credentialDoesNotExpire=1&source=null&expirationMonth=' + month + '&expirationYear=' + yearEnd + ''

  return (
    <Flex color="brand.600" w="100%" alignItems="center" gap={4} justifyContent="space-between">
      <Box>
      <a href={linkedinUrl}><LinkedinIcon  size={60} round={true} /></a>
        <Box mt={2}>
          <a href={linkedinUrl}>Linkedin</a>
        </Box>
      </Box>

      <FacebookShareButton url={shareUrl}>
        <FacebookIcon size={60} round={true} />
        <Text mt={2}>Facebook</Text>
      </FacebookShareButton>
      <TwitterShareButton url={shareUrl}>
        <TwitterIcon size={60} round={true} />
        <Text mt={2}>Twitter</Text>
      </TwitterShareButton>
      <WhatsappShareButton url={shareUrl}>
        <WhatsappIcon size={60} round={true} />
        <Text mt={2}>Whatsapp</Text>
      </WhatsappShareButton>
      <EmailShareButton url={shareUrl}>
        <EmailIcon size={60} round={true} bgStyle={{ fill: "#E51D20" }} />
        <Text mt={2}>Email</Text>
      </EmailShareButton>

    </Flex>
  )
}
