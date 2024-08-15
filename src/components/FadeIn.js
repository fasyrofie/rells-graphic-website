import classNames from 'classnames'
import React, { useRef, useEffect, useState } from 'react'

const ElementVisibilityChecker = ({ className, children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const targetRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        root: null, // viewport
        rootMargin: '0px', // no margin
        threshold: 0, // 0.5 for 50% of target visible
      },
    )

    const currentTarget = targetRef.current // Create a variable to store the current target ref

    if (currentTarget) {
      observer.observe(currentTarget)
    }

    // Clean up the observer
    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget)
      }
    }
  }, [])

  return (
    <div ref={targetRef} className={classNames(isVisible ? 'fade-in' : 'fade-out', className)}>
      {children}
    </div>
  )
}

export default ElementVisibilityChecker
