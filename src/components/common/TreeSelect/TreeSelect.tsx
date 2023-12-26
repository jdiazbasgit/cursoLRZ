import { Box } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { Empty, Spin, TreeSelect as TreeSelectAntd } from "antd";
import { Dispatch, SetStateAction, useMemo } from "react";
import { UseFormSetValue } from "react-hook-form";
import { treeDataTechnologiesProfileAdapter } from "src/adapter";
import { getProfileWithTechnologiesAPI } from "src/api/utils";
import { RegisterUsers } from "src/models";
import { newCode } from "../ApplyForCodeModal";

interface Props {
  setValueForm?: UseFormSetValue<RegisterUsers>;
  setOnlyTecnology?: UseFormSetValue<newCode>;
  disabled?: boolean
  value?: string[]
  setRequestSkills?: Dispatch<SetStateAction<string[]>>
}

export default function TreeSelect({ setValueForm, setOnlyTecnology, disabled, value, setRequestSkills }: Props) {
  const { SHOW_PARENT } = TreeSelectAntd

  const { data, isLoading } = useQuery(['available-technologies'], getProfileWithTechnologiesAPI, {
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    cacheTime: Infinity
  })

  const treeData = useMemo(() => treeDataTechnologiesProfileAdapter(data), [data])

  function onChange(value: Array<string>) {
    if (setValueForm) setValueForm('requestedSkills', value)
    if (setOnlyTecnology) setOnlyTecnology('technology', value)
    if (setRequestSkills) setRequestSkills(value)
  }

  const tProps = {
    treeData: treeData,
    value: value,
    onChange: onChange,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: "Seleccionar",
    style: {
      width: '100%',
    },
  };

  return (
    <Box className="treeSelect" w="100%">
      <TreeSelectAntd
        {...tProps}
        multiple
        allowClear
        notFoundContent={
          isLoading ? <Spin />
            :
            <Empty description={"Sin resultado"} image={Empty.PRESENTED_IMAGE_SIMPLE} />
        }
        size="large"
        treeDefaultExpandAll={true}
        className={disabled ? "treeSelect__ant disabled" : "treeSelect__ant"}
        disabled={disabled}
        virtual={false}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        showSearch={false}
        showArrow={true}
      />
    </Box>
  )
}