import React, { ChangeEventHandler } from 'react'
import { useDebounce } from 'use-debounce'
import { FormInput, FormInputContainer, FormInputLabel } from './styles'
import { DropdownComponent } from '../dropdown'

export const SearchCity: React.FC<{
  type: string
  name: string
  label: string
  icon: any
  value: any
  onChangeFunc: ChangeEventHandler<HTMLInputElement> | undefined
}> = ({ type, name, label, icon, value, onChangeFunc }) => {
  const [hasFocus, setHasFocus] = React.useState<boolean>(false)

  const inputRef = React.useRef<HTMLInputElement>(null)

  const [searchValueDebounced] = useDebounce(value, 500)

  return (
    <FormInputContainer>
      <FormInput
        ref={inputRef}
        type={type}
        name={name}
        id={name}
        hasValue={!!value}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
        value={value}
        onChange={onChangeFunc}
      />

      <FormInputLabel>{label}</FormInputLabel>

      {icon}

      {searchValueDebounced ? (
        <DropdownComponent
          active={hasFocus && searchValueDebounced}
          searchValue={searchValueDebounced}
        />
      ) : null}
    </FormInputContainer>
  )
}
