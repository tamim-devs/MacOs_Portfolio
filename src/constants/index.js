const navLinks = [
  { id: 1, name: "Resume", type: "resume" },
  { id: 2, name: "Contact", type: "contact" },
  { id: 3, name: "Projects",type: "finder" },
];

const navIcons = [
  { id: 1, img: "/icons/wifi.svg" },
  { id: 2, img: "/icons/search.svg" },
  { id: 3, img: "/icons/user.svg" },
  { id: 4, img: "/icons/mode.svg" },
];

const FONT_WEIGHT = {
  subtitle: { min: 100, max: 400, default: 100 },
  title: { min: 400, max: 900, default: 400 },
};

const dockApps = [
  {
    id: "finder",
    name: "Portfolio",
    icon: "/images/finder.png",
    canOpen: true
  },
  {
    id: "safari",
    name: "Articles",
    icon: "/images/safari.png",
    canOpen: true
  },
  {
    id: "photos",
    name: "Gallery",
    icon: "/images/photos.png",
    canOpen: true
  },
  {
    id: "contact",
    name: "Contact",
    icon: "/images/contact.png",
    canOpen: true
  },
  {
    id: "terminal",
    name: "Skills",
    icon: "/images/terminal.png",
    canOpen: true
  },
  {
    id: "trash",
    name: "Archive",
    icon: "/images/trash.png",
    canOpen: false
  }
];
;

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

const techstack = [
  {
    category: "Frontend",
    items: ["Reactjs", "Wix", "Nextjs"],
  },
  {
    category: "Mobile",
    items: ["React Native expo"],
  },
  {
    category: "Styling",
    items: ["Tailwind css"],
  },
  {
    category: "Backend",
    items: ["Node js", "Express js"],
  },
  {
    category: "Database",
    items: ["MongoDB"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "Github", "Vscode"],
  },
];

const blogpost = [
  {
    id: 1,
    date: "Sep 2 , 2025",
    title:
      "TypeScript: Explained: What It Is, Why It Matters, and How to Master it",
    images: "/images/blog1.png",
    link: "https://jsmastery.com/all-courses",
  },
  {
    id: 2,
    date: "Sep 2 , 2025",
    title:
      "TypeScript: Explained: What It Is, Why It Matters, and How to Master it",
    images: "/images/blog1.png",
    link: "https://jsmastery.com/all-courses",
  },
  {
    id: 3,
    date: "Sep 2 , 2025",
    title:
      "TypeScript: Explained: What It Is, Why It Matters, and How to Master it",
    images: "/images/blog1.png",
    link: "https://jsmastery.com/all-courses",
  },
];

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
   {
  id: 5,
  name: "Nike Project",
  icon: "/images/folder.png",
  kind: "folder",
  position: "top-10 left-5",
  windowPosition: "top-[15vh] right-20",
  children: [
    {
      id: 1,
      name: "preview.png",
      icon: "/images/adrian-2.jpg",
      kind: "file",
      fileType: "img",
      src: "/images/adrian-2.jpg",
       description: [
    "Nike Ecommerce Website Preview",
    "Tech: React, Tailwind, Stripe",
    "Responsive UI + Smooth Animations"
  ]
    },
    {
      id: 2,
      name: "Description.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      description: [
        "This is my Nike ecommerce website...",
        "Built with React, Tailwind, etc...",
      ]
    },
    {
      id: 3,
      name: "Live Demo.url",
      icon: "/images/safari.png",
      kind: "file",
      fileType: "url",
      href: "https://www.youtube.com/watch?v=j9ZD_hlyHOA&t=9021s",
    },
    {
      id: 4,
      name: "Source Code.url",
      icon: "/images/folder.png",
      kind: "file",
      fileType: "url",
      href: "https://github.com/arman/nike",
    }
  ]
}

  ],
};


const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  windowPosition: "top-[15vh] right-20",

  children: [
    {
      id: 10,
      name: "Tamim",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[15vh] right-20",

      children: [
        {
          id: 101,
          name: "preview1.png",
          icon: "/images/adrian-2.jpg",
          kind: "file",
          fileType: "img",
          src: "/images/adrian-2.jpg",
        },
        {
          id: 102,
          name: "preview2.png",
          icon: "/images/adrian-2.jpg",
          kind: "file",
          fileType: "img",
          src: "/images/adrian-2.jpg",
        },
        {
          id: 103,
         name: "preview2.png",
          icon: "/images/adrian-2.jpg",
          kind: "file",
          fileType: "img",
          src: "/images/adrian-2.jpg",
        },
        {
          id: 104,
          name: "Source Code.url",
          icon: "/images/url.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/arman/nike",
        }
      ]
    }
  ]
};
;
;

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "My Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
    }
  ]
};



const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
};

const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#4656b",
    link : "github.com"
  }
]


// ---------------- EXPORTS (EXACT SAME FORMAT) ----------------
export {
  navLinks,
  locations,
  INITIAL_Z_INDEX,
  WINDOW_CONFIG,
  navIcons,
  FONT_WEIGHT,
  blogpost,
  dockApps,
  techstack,
  socials
};
