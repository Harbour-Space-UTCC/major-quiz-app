"use client";
import React, { useEffect, useMemo, useState } from 'react'

type Piece = {
  id: number
  left: number // 0..100 vw
  delay: number // s
  duration: number // s
  size: number // px
  rotate: number // deg
  hue: number // 0..360
}

export function ConfettiBurst({ count = 60 }: { count?: number }) {
  const [show, setShow] = useState(false)

  const pieces = useMemo<Piece[]>(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.6,
      duration: 1.6 + Math.random() * 1.2,
      size: 6 + Math.random() * 6,
      rotate: Math.random() * 360,
      hue: 230 + Math.random() * 70, // purple-blue range
    }))
  }, [count])

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 0)
    return () => clearTimeout(t)
  }, [])

  if (!show) return null

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden [contain:layout_style] motion-reduce:hidden"
    >
      {/* Respect reduced motion */}
      <div className="sr-only motion-reduce:not-sr-only">Celebration</div>
      {pieces.map((p) => (
        <span
          key={p.id}
          className="absolute top-0 will-change-transform rounded-sm"
          style={{
            left: `${p.left}vw`,
            width: p.size,
            height: p.size * 0.6,
            background: `hsl(${p.hue}deg 80% 65%)`,
            transform: `translateY(-10%) rotate(${p.rotate}deg)`,
            animation: `confetti-fall ${p.duration}s cubic-bezier(0.2, 0.8, 0.2, 1) ${p.delay}s 1 both`,
          }}
        />
      ))}
    </div>
  )
}
