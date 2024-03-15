import Styles from './toggle-style.scss'

import React, { useRef } from 'react'

type Props = React.DetailedHTMLProps<
React.InputHTMLAttributes<HTMLInputElement>,
HTMLInputElement
> & {
  state: any
  setState: any
}

const Toogle: React.FC<Props> = ({ state, setState, ...props }: Props) => {
  const toggleRef = useRef<HTMLInputElement>()

  return (
    <div className={Styles.toggle}>
      <input
        {...props}
        ref={toggleRef}
        type="checkbox"
        checked={state[props.name]}
      />
      <label
        onClick={() => {
          setState({ ...state, [props.name]: !state[props.name] })
        }}
      ></label>
    </div>
  )
}

export default Toogle
