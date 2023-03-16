import H from '@/services/here/h'
import { useEffect, useRef, useState } from 'react'

export default function Here() {
  const ref = useRef<HTMLDivElement>(null)

  const [map, setMap] = useState<H.Map | null>(null)

  useEffect(() => {
    if (!map && ref.current) {
      const platform = new H.service.Platform({
        apikey: `123`,
      })

      const layers = platform.createDefaultLayers()
      const m = new H.Map(ref.current, layers.vector.normal.truck, {
        center: { lat: 40, lng: -95 },
        zoom: 4.5,
        pixelRatio: window.devicePixelRatio || 1,
        padding: { top: 48, left: 25, bottom: 22, right: 25 },
      })

      // add a resize listener to make sure that the map occupies the whole container
      window.addEventListener(`resize`, () => m.getViewPort().resize())

      // Step 3: make the map interactive
      // MapEvents enables the event system
      // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(m))

      H.ui.UI.createDefault(m, layers)

      setMap(map)
    }
  }, [map])

  return <div style={{ height: `800px`, width: `1000px` }} ref={ref} />
}
