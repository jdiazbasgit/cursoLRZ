import { Flex, useMediaQuery, VStack } from "@chakra-ui/react";
import { Filter } from "src/components/common";
import { TableTemplates } from "src/components/Dashboard";
import { TemplateCreate, TemplateForm } from "src/components/Form";
import { useRouter } from "next/router"
interface Props{
    isViewLegend?: boolean
    isViewMaster?: boolean
    isViewMasterCreate?: boolean
}
export default function Template({isViewLegend, isViewMaster,isViewMasterCreate}:Props) {

    const router = useRouter()
    var templateId = router.query.templateId as string

    

    const [isLargerThan1280] = useMediaQuery('(min-width: 1155px)')
    return(
    <>
    {
        isViewLegend &&
        <VStack
            spacing={6}
        >
            <Flex w="100%" flexDir={isLargerThan1280 ? "row" : "column"} justifyContent={"space-between"} gap={isLargerThan1280 ? 0 : 4}>
                <Filter isMails />
            </Flex>
            <TableTemplates/>
        </VStack>
    }
    {
        isViewMaster &&
        <TemplateForm isViewLegend templateId={templateId} />
    }
    {
        isViewMasterCreate &&
        <TemplateCreate isViewLegend />
    }
    </>
    )
}