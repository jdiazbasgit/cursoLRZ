import { Empty, Select } from 'antd';
import { Dispatch, SetStateAction } from 'react';
import { UseFormClearErrors, UseFormSetValue } from 'react-hook-form';
import { countries } from 'src/consts/staticData';
import { RegisterUsers } from 'src/models';

interface Props {
  setValueForm: UseFormSetValue<RegisterUsers>;
  defaultValue?: string
  setValue?: Dispatch<SetStateAction<string>>
  disabled?: boolean
  clearErrors?: UseFormClearErrors<RegisterUsers>
  // onCountryChange: (value: string) => void;
}

export default function SearchOptions({ setValueForm, defaultValue, disabled, setValue, clearErrors }: Props) {

  const handleChange = (value: string) => {
    // onCountryChange(value);
    setValueForm('country', value)
    if (clearErrors) clearErrors('country')
    if (setValue) setValue(value)
  };


  return (
    <>
      <Select
        className={disabled ? 'searchOptions disabled' : 'searchOptions'}
        size='large'
        showSearch
        placeholder="Selecciona un país"
        optionFilterProp="children"
        onChange={handleChange}
        filterOption={(input, option: any) =>
          option?.children?.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        notFoundContent={<Empty description="Sin resultado" image={Empty.PRESENTED_IMAGE_SIMPLE} />}
        allowClear
        value={defaultValue}
        disabled={disabled}
      >
        {
          countries.map(country => {
            return <Select.Option key={country.value} value={country.value}>{country.value}</Select.Option>
          })
        }
      </Select>
    </>
  )
}