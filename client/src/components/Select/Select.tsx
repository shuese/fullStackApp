import { FieldProps } from 'formik';
import React from 'react';
import Select from 'react-select';

type OptionsType<OptionType> = ReadonlyArray<OptionType>;

export type ValueType<OptionType> =
  | OptionType
  | OptionsType<OptionType>
  | null
  | undefined;

interface IOption {
  label: string;
  value: string;
}

interface ICustomSelectProps extends FieldProps {
  options: OptionsType<IOption>;
  placeholder?: string;
}

export const CustomSelect = ({
  placeholder,
  field,
  form,
  options
}: ICustomSelectProps) => {
  const onChange = (option: ValueType<IOption>) => {
    form.setFieldValue(field.name, (option as IOption).value);
  };

  const getValue = () => {
    if (options) {
      return options.find((option: any) => option.value === field.value);
    } else {
      return '' as any;
    }
  };

  return (
    <Select
      name={field.name}
      value={getValue()}
      onChange={onChange}
      placeholder={placeholder}
      options={options}
    />
  );
};

export default CustomSelect;
