import Styles from './input-styles.scss'

import React, { useRef } from 'react'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  state: any
  setState: any
}

const Input: React.FC<Props> = ({ state, setState, ...props }: Props) => {
  const inputRef = useRef<HTMLInputElement>()
  return (
    <div className={Styles.inputWrap}>
      <input
        {...props}
        ref={inputRef}
        placeholder=" "
        readOnly
        onFocus={e => { e.target.readOnly = false }}
        onChange={e => { setState({ ...state, [e.target.name]: e.target.value }) }}
      />
      <label onClick={() => { inputRef.current.focus() }}>
        {props.placeholder}
      </label>
    </div>
  )
}

export default Input
