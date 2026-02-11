import { useRef, useEffect, useState } from 'react'
import { motion as Motion } from 'motion/react'

export default function AnimatedContent({
  children,
  distance = 100,
  direction = 'vertical',
  reverse = false,
  duration = 0.8,
  delay = 0,
  initialOpacity = 0,
  className = '',
  threshold = 0.1,
  rootMargin = '0px',
  easing = [0.25, 0.1, 0.25, 1],
}) {
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
      },
      { threshold, rootMargin }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  const axis = direction === 'horizontal' ? 'x' : 'y'
  const sign = reverse ? -1 : 1

  return (
    <Motion.div
      ref={ref}
      initial={{ [axis]: sign * distance, opacity: initialOpacity }}
      animate={inView ? { [axis]: 0, opacity: 1 } : { [axis]: sign * distance, opacity: initialOpacity }}
      transition={{ duration, delay, ease: easing }}
      className={className}
    >
      {children}
    </Motion.div>
  )
}
