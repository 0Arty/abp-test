import { useEffect, useRef } from 'react'

type Params = {
   onIntersect: () => void
   enabled: boolean
}

export const useInfiniteScroll = ({ onIntersect, enabled }: Params) => {
   const targetRef = useRef<HTMLDivElement | null>(null)

   useEffect(() => {
      if (!enabled) return

      const observer = new IntersectionObserver(
         entries => {
            if (entries[0].isIntersecting) {
               onIntersect()
            }
         },
         { rootMargin: '200px' },
      )

      const target = targetRef.current
      if (target) observer.observe(target)

      return () => observer.disconnect()
   }, [onIntersect, enabled])

   return targetRef
}
