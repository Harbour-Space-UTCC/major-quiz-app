"use client";

let ctx: AudioContext | null = null
function getCtx() {
  if (typeof window === 'undefined') return null
  try {
    // @ts-expect-error Safari
    const AC = window.AudioContext || window.webkitAudioContext
    if (!AC) return null
    if (!ctx) ctx = new AC()
    return ctx
  } catch {
    return null
  }
}

export function playTick() {
  const c = getCtx()
  if (!c) return
  const o = c.createOscillator()
  const g = c.createGain()
  o.type = 'triangle'
  o.frequency.value = 520
  g.gain.value = 0.0001
  o.connect(g)
  g.connect(c.destination)
  const now = c.currentTime
  g.gain.exponentialRampToValueAtTime(0.08, now + 0.01)
  g.gain.exponentialRampToValueAtTime(0.0001, now + 0.11)
  o.start(now)
  o.stop(now + 0.12)
}

export function playSuccess() {
  const c = getCtx()
  if (!c) return
  const o = c.createOscillator()
  const g = c.createGain()
  o.type = 'sine'
  o.frequency.setValueAtTime(440, c.currentTime)
  o.frequency.exponentialRampToValueAtTime(880, c.currentTime + 0.25)
  g.gain.value = 0.0001
  o.connect(g)
  g.connect(c.destination)
  const now = c.currentTime
  g.gain.exponentialRampToValueAtTime(0.08, now + 0.01)
  g.gain.exponentialRampToValueAtTime(0.0001, now + 0.35)
  o.start(now)
  o.stop(now + 0.36)
}

