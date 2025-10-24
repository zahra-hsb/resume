"use client"
import { useEffect, useState } from "react"

export const useMobileDetector = () => {
  const [widthWindow, setWidthWindow] = useState(768)
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      const widthWindowInsideResize = window.innerWidth
      if (widthWindowInsideResize <= widthWindow) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [widthWindow])

  return isMobile
}