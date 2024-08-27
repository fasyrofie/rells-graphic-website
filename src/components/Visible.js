import React from 'react'
import PropTypes from 'prop-types'

const Visible = ({ when, children }) => {
  if (when && Boolean(when) && typeof when !== 'function') {
    return <>{children}</>
  } else if (when && typeof when === 'function' && Boolean(when({}))) {
    return <>{children}</>
  }

  return <></>
}

Visible.propTypes = {
  when: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  children: PropTypes.element,
}

export default Visible
