"use client";
import type { QuizResult } from '@/lib/quiz'

export async function generateResultsImage(results: QuizResult[]): Promise<File> {
  const top = results[0]
  const second = results[1]
  const third = results[2]

  // Base logical size (1080x1920), paint at device pixel ratio for crispness
  const W = 1080
  const H = 1920
  const dpr = Math.min((window.devicePixelRatio || 1), 3)
  const canvas = document.createElement('canvas')
  canvas.width = Math.floor(W * dpr)
  canvas.height = Math.floor(H * dpr)
  const ctx = canvas.getContext('2d')!
  ctx.scale(dpr, dpr)
  ctx.imageSmoothingEnabled = true
  ctx.imageSmoothingQuality = 'high'

  // Background: deep gradient + aurora glows
  const bg = ctx.createLinearGradient(0, 0, W, H)
  bg.addColorStop(0, '#2F2A64')
  bg.addColorStop(1, '#6E6DC5')
  ctx.fillStyle = bg
  ctx.fillRect(0, 0, W, H)

  // Aurora layers
  const rad = (x: number, y: number, r: number, c: string) => {
    const g = ctx.createRadialGradient(x, y, 0, x, y, r)
    g.addColorStop(0, c)
    g.addColorStop(1, 'rgba(0,0,0,0)')
    ctx.fillStyle = g
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fill()
  }
  rad(W * 0.15, H * 0.1, 520, 'rgba(133,138,229,0.40)')
  rad(W * 0.9, H * 0.2, 560, 'rgba(78,70,156,0.35)')
  rad(W * 0.2, H * 0.85, 560, 'rgba(110,109,197,0.30)')

  // Soft grain overlay for texture
  drawNoise(ctx, W, H, 0.04)

  // Header badge
  ctx.textAlign = 'center'
  ctx.fillStyle = 'rgba(255,255,255,0.18)'
  roundRect(ctx, W / 2 - 230, 90, 460, 72, 20)
  ctx.fill()
  ctx.fillStyle = 'white'
  ctx.font = 'bold 40px Apercu Pro, system-ui, -apple-system, Segoe UI, Roboto'
  ctx.fillText('TechPath Quiz Result', W / 2, 140)

  // Feature card shadow
  ctx.fillStyle = 'rgba(0,0,0,0.22)'
  roundRect(ctx, 116, 282, W - 232, 990, 38)
  ctx.fill()

  // Feature card
  const cardX = 96
  const cardY = 260
  const cardW = W - 192
  const cardH = 960
  ctx.fillStyle = 'rgba(255,255,255,0.14)'
  roundRect(ctx, cardX, cardY, cardW, cardH, 32)
  ctx.fill()

  // Top match header
  ctx.textAlign = 'left'
  ctx.fillStyle = 'white'
  ctx.font = 'bold 54px Apercu Pro, system-ui'
  ctx.fillText('Your perfect match', cardX + 48, cardY + 120)

  // Name with subtle shadow
  ctx.shadowColor = 'rgba(0,0,0,0.35)'
  ctx.shadowBlur = 16
  ctx.font = 'bold 72px Apercu Pro, system-ui'
  wrapText(ctx, top.name, cardX + 48, cardY + 205, cardW - 280, 78)
  ctx.shadowBlur = 0

  // Percentage ring with glow
  const cx = cardX + cardW - 180
  const cy = cardY + 160
  const radius = 78
  // Track
  ctx.strokeStyle = 'rgba(255,255,255,0.25)'
  ctx.lineWidth = 20
  ctx.beginPath()
  ctx.arc(cx, cy, radius, 0, Math.PI * 2)
  ctx.stroke()
  // Progress
  const angle = (Math.PI * 2) * (top.percentage / 100)
  ctx.strokeStyle = '#858AE5'
  ctx.shadowColor = 'rgba(133,138,229,0.65)'
  ctx.shadowBlur = 20
  ctx.beginPath()
  ctx.arc(cx, cy, radius, -Math.PI / 2, -Math.PI / 2 + angle)
  ctx.stroke()
  ctx.shadowBlur = 0
  // Label
  ctx.fillStyle = 'white'
  ctx.font = 'bold 42px Apercu Pro, system-ui'
  ctx.textAlign = 'center'
  ctx.fillText(`${top.percentage}%`, cx, cy + 14)

  // Description
  ctx.globalAlpha = 0.92
  ctx.textAlign = 'left'
  ctx.font = '30px Apercu Pro, system-ui'
  wrapText(ctx, top.description, cardX + 48, cardY + 320, cardW - 96, 46)
  ctx.globalAlpha = 1

  // Top skills (up to 3)
  const skills = top.skills.slice(0, 3)
  let sy = cardY + 430
  skills.forEach((s) => {
    drawPill(ctx, cardX + 48, sy, Math.min(560, cardW - 96), s)
    sy += 60
  })

  // Secondary matches
  const secY = cardY + 650
  ctx.textAlign = 'left'
  ctx.font = 'bold 40px Apercu Pro, system-ui'
  ctx.fillStyle = 'white'
  ctx.fillText('Also a great fit', cardX + 48, secY)
  ctx.font = '30px Apercu Pro, system-ui'
  const pills: { label: string; pct: number }[] = []
  if (second) pills.push({ label: `${second.name}`, pct: second.percentage })
  if (third) pills.push({ label: `${third.name}`, pct: third.percentage })
  let py = secY + 60
  pills.forEach((p) => {
    drawPill(ctx, cardX + 48, py, cardW - 96, `${p.label}  •  ${p.pct}%`)
    py += 64
  })

  // Footer watermark
  ctx.textAlign = 'center'
  ctx.globalAlpha = 0.95
  ctx.font = 'bold 30px Apercu Pro, system-ui'
  ctx.fillText('techpath quiz', W / 2, H - 140)
  ctx.globalAlpha = 1

  const blob = await new Promise<Blob>((resolve) => canvas.toBlob((b) => resolve(b!), 'image/png', 0.95))
  return new File([blob], 'techpath-quiz-result.png', { type: 'image/png' })
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  const rr = Math.min(r, w / 2, h / 2)
  ctx.beginPath()
  ctx.moveTo(x + rr, y)
  ctx.lineTo(x + w - rr, y)
  ctx.quadraticCurveTo(x + w, y, x + w, y + rr)
  ctx.lineTo(x + w, y + h - rr)
  ctx.quadraticCurveTo(x + w, y + h, x + w - rr, y + h)
  ctx.lineTo(x + rr, y + h)
  ctx.quadraticCurveTo(x, y + h, x, y + h - rr)
  ctx.lineTo(x, y + rr)
  ctx.quadraticCurveTo(x, y, x + rr, y)
  ctx.closePath()
}

function wrapText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth: number, lineHeight: number) {
  const words = text.split(' ')
  let line = ''
  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' '
    const metrics = ctx.measureText(testLine)
    if (metrics.width > maxWidth && n > 0) {
      ctx.fillText(line.trim(), x, y)
      line = words[n] + ' '
      y += lineHeight
    } else {
      line = testLine
    }
  }
  ctx.fillText(line.trim(), x, y)
}

function drawPill(ctx: CanvasRenderingContext2D, x: number, y: number, maxW: number, label: string) {
  const padX = 20
  ctx.font = '28px Apercu Pro, system-ui'
  const textW = ctx.measureText(label).width
  const w = Math.min(maxW, textW + padX * 2)
  const h = 48
  ctx.fillStyle = 'rgba(255,255,255,0.9)'
  roundRect(ctx, x, y, w, h, 999)
  ctx.fill()
  ctx.fillStyle = '#4F469C'
  ctx.textAlign = 'left'
  ctx.fillText(label, x + padX, y + h / 2 + 10)
}

function drawNoise(ctx: CanvasRenderingContext2D, w: number, h: number, strength = 0.05) {
  const n = document.createElement('canvas')
  n.width = 160
  n.height = 160
  const nctx = n.getContext('2d')!
  const img = nctx.createImageData(n.width, n.height)
  for (let i = 0; i < img.data.length; i += 4) {
    const v = Math.floor(Math.random() * 255)
    img.data[i] = v
    img.data[i + 1] = v
    img.data[i + 2] = v
    img.data[i + 3] = Math.floor(255 * strength)
  }
  nctx.putImageData(img, 0, 0)
  const pattern = ctx.createPattern(n, 'repeat')
  if (pattern) {
    ctx.fillStyle = pattern
    ctx.fillRect(0, 0, w, h)
  }
}
