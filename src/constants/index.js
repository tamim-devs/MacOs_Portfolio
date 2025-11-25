
const navLinks = [
    { id:1 , name: "Portfolio"},
    { id:2 , name: "Contact"},
    { id:3 , name: "Projects"},
  ]; 

  const navIcons = [
    {id:1,
     img:   "../../public/icons/wifi.svg",
    },
    {id:2,
     img:   "../../public/icons/search.svg",
    },
    {id:3,
     img:   "../../public/icons/user.svg",
    },
    {id:4,
     img:   "../../public/icons/mode.svg",
    },
  ]

   const FONT_WEIGHT = {
      subtitle: { min: 100, max:400, default: 100 },
      title: { min: 400, max: 900, default: 400 },
    }

  const dockApps = [
    {
      id: "finder",
      name: "Portfolio",
      icon: "../../public/images/finder.png",
      canOpen: true
    },
    {
      id: "safari",
      name: "Articles",
      icon: "../../public/images/safari.png",
      canOpen: true
    },
    {
      id: "photos",
      name: "Gallery",
      icon: "../../public/images/photos.png",
      canOpen: false
    },
    {
      id: "contact",
      name: "Contact",
      icon: "../../public/images/contact.png",
      canOpen: true
    },
    {
      id: 'terminal',
      name: "Skills",
      icon: "../../public/images/terminal.png",
      canOpen: false
    },
    {
      id: 'trash',
      name: "Archive",
      icon: "../../public/images/trash.png",
      canOpen: false
    }
  ]
  export { navLinks , navIcons, FONT_WEIGHT, dockApps };