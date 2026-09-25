import { useRef, type RefObject, type MouseEvent } from 'react'
import { useMotionValue, useSpring, useTransform, type MotionValue } from 'framer-motion'

type TiltResult = {
  ref: RefObject<HTMLDivElement>
  rotateX: MotionValue<number>
  rotateY: MotionValue<number>
  onMouseMove: (e: MouseEvent<HTMLDivElement>) => void
  onMouseLeave: () => void
}

/**
 * Lightweight 3D tilt-on-hover effect (no WebGL) used for signature dish cards.
 * Keeps the "premium 3D" feel described in the brief without the weight/risk
 * of a full Three.js scene.
 */
export function useTilt(maxTilt = 8): TiltResult {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [maxTilt, -maxTilt]), {
    stiffness: 250,
    damping: 20,
  })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-maxTilt, maxTilt]), {
    stiffness: 250,
    damping: 20,
  })

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function onMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return { ref, rotateX, rotateY, onMouseMove, onMouseLeave }
}
