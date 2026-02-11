import { useRef, useEffect, useState, useMemo } from 'react'
import { motion as Motion } from 'motion/react'

export default function BlurText({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = [0.25, 0.1, 0.25, 1],
}) {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('')
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  const defaultFrom = useMemo(
    () =>
      direction === 'top'
        ? { filter: 'blur(10px)', opacity: 0, y: -30 }
        : { filter: 'blur(10px)', opacity: 0, y: 30 },
    [direction]
  )

  const defaultTo = useMemo(
    () => ({ filter: 'blur(0px)', opacity: 1, y: 0 }),
    []
  )

  const fromAnimation = animationFrom || defaultFrom
  const toAnimation = animationTo || defaultTo

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(ref.current)
        }
      },
      { threshold, rootMargin }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return (
    <p ref={ref} className={`blur-text-wrapper ${className}`}>
      {elements.map((el, i) => (
        <Motion.span
          key={i}
          initial={fromAnimation}
          animate={inView ? toAnimation : fromAnimation}
          transition={{
            duration: 0.5,
            delay: i * (delay / 1000),
            ease: easing,
          }}
          style={{ display: 'inline-block', willChange: 'transform, filter, opacity' }}
        >
          {el === ' ' ? '\u00A0' : el}
          {animateBy === 'words' && i < elements.length - 1 ? '\u00A0' : ''}
        </Motion.span>
      ))}
    </p>
  )
}
