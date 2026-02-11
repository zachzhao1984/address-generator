import { useState, useCallback } from 'react'

export function useCopy(timeout = 2000) {
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const copy = useCallback((field: string, value: string) => {
    navigator.clipboard.writeText(value).then(() => {
      setCopiedField(field)
      setTimeout(() => setCopiedField(null), timeout)
    })
  }, [timeout])

  return { copiedField, copy }
}
