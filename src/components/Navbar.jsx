import dayjs from 'dayjs'
import { navIcons, navLinks } from '#constants'
import React, { useEffect, useState } from 'react'
import useWindowStore from '#store/window'

const Navbar = () => {
  const { openWindow } = useWindowStore()
  const [time, setTime] = useState(dayjs());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav>
      <div>
        <img className='w-4 h-4' src="/images/apple (2).png" alt="img" />
        <p className='font-bold'>Tamim Portfolio</p>

        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li 
              key={id} 
              onClick={() => openWindow(type, { fromNavbar: true })}
            >
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} alt="img" className='icon-hover' />
            </li>
          ))}
        </ul>

        <time>{time.format('ddd MMM D h:mm:ss A')}</time>
      </div>
    </nav>
  )
}

export default Navbar
