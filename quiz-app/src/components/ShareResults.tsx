"use client";
import React, { useMemo, useState } from 'react'
import type { QuizResult } from '@/lib/quiz'
import { generateResultsImage } from '@/lib/share'

export function ShareResults({ results }: { results: QuizResult[] }) {
  const [busy, setBusy] = useState(false)
  const [showHelp, setShowHelp] = useState(false)

  const top = results[0]
  // const site = typeof window !== 'undefined' ? window.location.origin : ''
  const shareText = useMemo(
    () => `My TechPath Quiz result: ${top.name} (${top.percentage}%). Find your match!`,
    [top.name, top.percentage]
  )

  async function shareInstagram() {
    if (busy) return
    try {
      setBusy(true)
      const file = await generateResultsImage(results)
      // Try native web share with image (Android Chrome, iOS 16.4+). Fallback if it throws.
      type FilesShareData = ShareData & { files?: File[] }
      const data: FilesShareData = { files: [file], text: shareText, title: 'TechPath Quiz' }
      if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
        try {
          await navigator.share(data as unknown as ShareData)
          setBusy(false)
          return
        } catch {
          // Ignore AbortError; continue to fallback for others
        }
      }
      // Fallback: download image and show instructions to open Instagram
      const url = URL.createObjectURL(file)
      const a = document.createElement('a')
      a.href = url
      a.download = 'techpath-quiz-result.png'
      document.body.appendChild(a)
      a.click()
      a.remove()
      URL.revokeObjectURL(url)
      setShowHelp(true)
    } catch (e) {
      console.error('Share failed', e)
      setShowHelp(true)
    } finally {
      setBusy(false)
    }
  }

  function openInstagram() {
    // Attempt to open Instagram Stories camera
    const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
    if (isiOS) {
      window.location.href = 'instagram-stories://share'
    } else {
      // Android intent (falls back to app if installed)
      window.location.href = 'intent://share#Intent;package=com.instagram.android;scheme=instagram-stories;end'
    }
  }

  return (
    <div className="mt-10">
      <h3 className="text-white font-bold text-base md:text-lg mb-3">Share your results</h3>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={shareInstagram}
          disabled={busy}
          className="px-4 py-3 rounded-xl font-medium bg-white-100 text-primary-600 hover:bg-neutral-100 transition-colors cursor-pointer disabled:opacity-60"
        >
          {busy ? 'Preparing…' : 'Share to Instagram Story'}
        </button>
      </div>

      {showHelp && (
        <div className="mt-4 text-white-40 text-sm bg-white-16 rounded-xl p-4 border border-white-40">
          <p className="mb-2">Tip: If Instagram sharing isn’t available, we’ve saved an image of your result.</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>Open Instagram and create a Story.</li>
            <li>Select the saved image from your gallery/photos.</li>
            <li>Add stickers/text and post!</li>
          </ol>
          <div className="mt-3 flex gap-2">
            <button
              type="button"
              onClick={openInstagram}
              className="px-4 py-2 rounded-lg font-medium bg-white-100 text-primary-600 hover:bg-neutral-100 cursor-pointer"
            >
              Open Instagram
            </button>
            <button
              type="button"
              onClick={() => setShowHelp(false)}
              className="px-4 py-2 rounded-lg font-medium bg-white-16 text-white hover:bg-white-40 cursor-pointer"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
