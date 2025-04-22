"use client"
import {ReactLenis} from "../app/utils/lenis"
export default function Lenis({children}) {
  return (<ReactLenis>
    {children}
  </ReactLenis>
  )
}
