import useWindowStore from '#store/window'
import React from 'react'

const WindowControls = ({target}) => {
  const {closeWindow} = useWindowStore()
  return (
    <div className='window-controls flex gap-1'>
      <div className="close bg-red-400 w-4 h-4 rounded-full" onClick={()=>closeWindow(target)}/>
        <div className="minimize rounded-full w-4 h-4 bg-yellow-300" onClick={()=>closeWindow(target)}></div>
        <div className="maximize rounded-full w-4 h-4 bg-green-300" onClick={()=>closeWindow(target)}></div>
      
    </div>
  )
}

export default WindowControls