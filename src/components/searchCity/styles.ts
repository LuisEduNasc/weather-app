import styled from 'styled-components'

export const FormInputContainer = styled.div`
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
  margin: 24px 0 0;
  z-index: 4;

  svg {
    position: absolute;
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
  }
`

export const FormInputLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 46px;
  transform: translateY(-50%);
  font-size: 16px;
  color: var(--second-color);
  font-weight: 600;
  transition: all .3s ease-in-out;
  pointer-events: none;
`

export const FormInput = styled.input<{ hasValue: boolean }>`
  position: relative;
  font-weight: bold;
  color: var(--fifth-color);
  width: 50vw;
  min-width: 250px;
  padding: 12px 12px 12px 46px;
  border: none;
  border-radius: 6px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

  :focus ~ label {
    top: -14px;
    left: 6px;
    font-size: 12px;
  }

  ${({hasValue}) => hasValue ? "~ label {top: -14px; left: 6px; font-size: 12px; color: #FFFFFF;}" : ""}
`
