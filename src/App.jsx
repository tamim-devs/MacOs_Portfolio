import gsap from "gsap"
import { Draggable } from 'gsap/Draggable'

import { Dock, Home, Navbar } from "#components"
import { Contact, Finder, ImgFile, Resume, Safari, Terminal, TxtFile } from "#windows"

gsap.registerPlugin(Draggable)

const App = () => {
  return (
    <main>
      <Navbar/>
      <TxtFile/>
      <Contact/> 
      <ImgFile/>
      <Finder/>
      <Terminal/>
      <Safari/>
      <Resume/>
      <Home/>
      <Dock/>
    </main>
  )
}

export default App
