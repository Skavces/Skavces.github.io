import { useEffect, useRef, useState } from 'react'
import { useInView, useMotionValue, useSpring } from 'motion/react'

export default function CountUp({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 2,
  className = '',
  suffix = '',
  prefix = '',
  separator = '',
  onStart,
  onEnd,
}) {
  const ref = useRef(null)
  const motionValue = useMotionValue(direction === 'down' ? to : from)
  const springValue = useSpring(motionValue, {
    damping: 50 + 10 * duration,
    stiffness: 100 - 5 * duration,
  })
  const isInView = useInView(ref, { once: true, margin: '0px' })
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (isInView && !hasStarted) {
      const timer = setTimeout(() => {
        setHasStarted(true)
        if (onStart) onStart()
        motionValue.set(direction === 'down' ? from : to)
      }, delay * 1000)
      return () => clearTimeout(timer)
    }
  }, [isInView, delay, motionValue, from, to, direction, hasStarted, onStart])

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        const formatted = Intl.NumberFormat('tr-TR', {
          maximumFractionDigits: 0,
        }).format(Math.round(latest))
        ref.current.textContent = `${prefix}${separator ? formatted : Math.round(latest)}${suffix}`
      }
    })

    return () => unsubscribe()
  }, [springValue, separator, prefix, suffix])

  useEffect(() => {
    if (hasStarted) {
      const value = direction === 'down' ? from : to
      const checkEnd = springValue.on('change', (latest) => {
        if (Math.round(latest) === value) {
          if (onEnd) onEnd()
          checkEnd()
        }
      })
      return () => checkEnd()
    }
  }, [hasStarted, springValue, from, to, direction, onEnd])

  return (
    <span ref={ref} className={className}>
      {prefix}{from}{suffix}
    </span>
  )
}
