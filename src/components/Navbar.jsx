import dayjs from 'dayjs'
import { navIcons, navLinks } from '#constants'
import React, { use, useEffect, useState } from 'react'

const Navbar = () => {

  const [time, setTime] = useState(dayjs());

   useEffect(() => {
    const interval = setInterval(()=>{
      setTime(dayjs());
    },1000)

     return () => clearInterval(interval);
   },[])
  return (
    <nav>
        <div>
            <img className='w-4 h-4' src="../../public/images/apple (2).png" alt="img" />
            <p className='font-bold'>Tamim Portfolio</p>

            <ul>             
               {navLinks.map(({ id,name})=>(
                <li key={id}>
                  <p>{name}</p>
                </li>
              ))}
            </ul>
        </div>
        <div>
          <ul>
            {navIcons.map(({id,img})=>(
              <li key={id}>
                <img src={img} alt="img" className='icon-hover' />
              </li>
            ))}
          </ul>


          <time>{dayjs().format('ddd MMM D h:mm:ss   A')}</time>
        </div>
    </nav>
  )
}

export default Navbar