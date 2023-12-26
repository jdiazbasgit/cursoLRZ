import { useQuery } from '@tanstack/react-query';
import { Empty, Select } from 'antd'
import { UseFormSetValue } from 'react-hook-form';
import { getSupportEmails } from 'src/api';
import { FormSupport } from 'src/components/Form/FormSupport/FormSupport';

interface Props {
  setValueForm: UseFormSetValue<FormSupport>;
}

export default function SearchOptionsSupport({ setValueForm }: Props) {

  const { data } = useQuery(['support'], getSupportEmails, {
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  })

  function onChange(value: string) {
    setValueForm('to', value)
  }

  return (
    <>
      <Select
        className='searchOptions'
        placeholder="Seleccionar"
        size='large'
        showSearch
        optionFilterProp="children"
        onChange={onChange}
        filterOption={(input, option: any) =>
          option?.children?.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        notFoundContent={<Empty description="Sin resultado" image={Empty.PRESENTED_IMAGE_SIMPLE} />}
        allowClear
      >
        {
          data && data.map(element => {
            return <Select.Option key={element.id} value={element.id}>{element.title}</Select.Option>
          })
        }
      </Select>
    </>
  )
}