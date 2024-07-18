import { useEffect, useMemo, useState } from 'react'

interface WindowSize {
  width: number | undefined
  height: number | undefined
}

const breakpoints = {
  MOBILE: 1025
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  })
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return windowSize
}

export default function useIsDesktop(breakpoint: number = breakpoints.MOBILE) {
  const { width } = useWindowSize()

  return useMemo(
    () => width !== undefined && width > breakpoint,
    [width, breakpoint]
  )
}
