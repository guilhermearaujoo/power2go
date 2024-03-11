import Styles from './spinner-styles.scss'

import React, { memo } from 'react'

const Spinner: React.FC = ({ ...props }) => {
  return (
    <div {...props} className={[Styles.spinner].join(' ')}>
      <div /><div /><div /><div />
    </div>
  )
}

export default memo(Spinner)
