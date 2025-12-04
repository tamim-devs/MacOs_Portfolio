import WindowControls from '#components/WindowControls'
import { techstack } from '#constants'
import WindowWrapper from '#hoc/WindowWrapper'
import { Check, Flag } from 'lucide-react'
import React from 'react'

const Terminal = () => {
  return (
    <section className='absolute z-20  w-md mt-20 '>
<div id='window-control'>
<div><WindowControls target="terminal"/></div>
  <p>Tech Stack</p>
</div>

<div className='terminal'>
  <p className='cmd'>
    <span className='font-bold'>Tamim</span> show tech stack
  </p>

  <div className="label">
    <p>Category</p>
    <p>Technologies</p>
  </div>

  <ul className='content border-b-2'>
    {techstack.map(({ category, items }) => (
      <li key={category} className='row'>
        <span className='left'>
          <Check className='check' />
          {category}
        </span>

        <span className='right'>
          {items.join(', ')}
        </span>
      </li>
    ))}
  </ul>
  <div className="flex w-full flex-start justify-start"> 
    <div className='flex'>
 <Flag className='text-black '/>
 <h1 className='text-base font-bold'>Render Time 6ms</h1>

    </div>
  </div>
</div>


    </section>
  )
}

const  TerminalWindow = WindowWrapper(Terminal, 'terminal')

export default TerminalWindow