import useWindowStore from '#store/window'
import { useGSAP } from '@gsap/react'
import gsap, { Power3 } from 'gsap'
import { Draggable } from 'gsap/Draggable'
import React, { useLayoutEffect, useRef } from 'react'

const WindowWrapper = (Component, windowKey) => {

  const Wrapped = (props) => {

    const { windows, focusWindow } = useWindowStore()
    const { isOpen, zIndex } = windows[windowKey]
    const ref = useRef(null)

    useGSAP(()=>{

      const el = ref.current;
      if (!el || !isOpen) return;

      el.style.display = "block"

      gsap.fromTo(el,
        { scale: 0.8, opacity: 0, y:40},
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: Power3.Out }
      )

    },[isOpen])

    useGSAP(()=>{
      const el = ref.current;
      if (!el) return;

      Draggable.create(el, { onPress: ()=> focusWindow(windowKey)})
    },[])

    useLayoutEffect(()=>{
      const el = ref.current;
      if(!el) return;
      el.style.display = isOpen ? "block" : "none";
    },[isOpen])

    
    return (
     <section
    id={windowKey}
    ref={ref}
    style={{ zIndex, display: isOpen ? "block" : "none" }}
    className='absolute'
    onMouseDown={() => focusWindow(windowKey)}
  >
    <Component {...props} data={windows[windowKey].data} />
  </section>
    )
  }

  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name ||"Component"})`

  return Wrapped
}

export default WindowWrapper


