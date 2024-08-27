import React from 'react'
import classNames from 'classnames'

const SectionHeading = ({ className, children, ...props }) => {
  return (
    <h1 className={classNames('display-2 fw-bold lh-1 mb-3', className)} {...props}>
      {children}
    </h1>
  )
}

export default SectionHeading
