"use client";
import type { MajorKey } from '@/lib/quiz'

const fileByMajor: Record<MajorKey, { file: string; alt: string }> = {
  cs: { file: '/badge/Badge=CS.svg', alt: 'Computer Science badge' },
  data: { file: '/badge/Badge=DS.svg', alt: 'Data Science badge' },
  cyber: { file: '/badge/Badge=CSEC.svg', alt: 'Cyber Security badge' },
  ux: { file: '/badge/Badge=ID.svg', alt: 'Interaction Design badge' },
  marketing: { file: '/badge/Badge=DM.svg', alt: 'Digital Marketing badge' },
  entrepreneur: { file: '/badge/Badge=HTE.svg', alt: 'High-tech Entrepreneurship badge' },
}

export function MajorBadge({ major, className }: { major: MajorKey; className?: string }) {
  const m = fileByMajor[major]
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={m.file} alt={m.alt} className={className ?? 'w-12 h-12'} />
  )
}
