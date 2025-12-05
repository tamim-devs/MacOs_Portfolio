import WindowControls from '#components/WindowControls'
import { blogpost } from '#constants'
import WindowWrapper from '#hoc/WindowWrapper'
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  MoveRight,
  PanelLeft,
  Plus,
  Search,
  Share,
} from 'lucide-react'
import React from 'react'

const Safari = () => {
  return (
    <div
      id="safari-window"
      className="
        flex flex-col 
        w-full 
        max-w-[95vw]
        sm:max-w-[700px]
        md:max-w-[900px]
        bg-white 
        rounded-xl 
        shadow-xl
      "
    >

      {/* ---------- SAFARI TOP BAR ---------- */}
      <div
        className="
          safari-header 
          flex items-center justify-between 
          w-full
          px-3 py-2 
          sm:px-5 sm:py-3
          bg-white/90 backdrop-blur-xl 
          rounded-t-xl shadow-sm
          flex-wrap gap-3
        "
      >

        {/* Window Controls */}
        <div className="flex items-center shrink-0">
          <WindowControls target="safari" />
        </div>

        {/* Navigation buttons */}
        <div className="nav-buttons flex items-center gap-2 sm:gap-3 shrink-0">
          <PanelLeft className="text-amber-600 cursor-pointer" />
          <ChevronLeft className="cursor-pointer" />
          <ChevronRight className="cursor-pointer" />
        </div>

        {/* Search box */}
        <div
          className="
            searchbox 
            flex items-center gap-2 sm:gap-3
            bg-gray-100 
            px-3 sm:px-4 
            py-1.5 sm:py-2
            rounded-full
            w-full
            max-w-full sm:max-w-md
            shadow-inner
            order-last sm:order-none
          "
        >
          <Search className="text-amber-600" />
          <input
            type="text"
            placeholder="Search or enter website name"
            className="bg-transparent flex-1 outline-none text-sm sm:text-base"
          />
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Share className="text-amber-600 cursor-pointer" />
          <Plus className="text-amber-600 cursor-pointer" />
          <Copy className="text-amber-600 cursor-pointer" />
        </div>
      </div>

      {/* ---------- SAFARI BODY ---------- */}
      <div className="safari-content flex flex-col px-4 sm:px-8 py-6 sm:py-8 gap-6">

        <h2 className="text-2xl sm:text-3xl font-bold text-black mb-2">
          My Developer Blog
        </h2>

        {/* Blog list */}
        <div
          className="
            flex flex-col gap-6
            max-h-[65vh]
            overflow-auto
            pr-2
          "
        >
          {blogpost.map(({ id, title, images, link, date }) => (
            <div
              key={id}
              className="
                group flex gap-4 sm:gap-6
                items-start
                bg-white 
                p-4 
                rounded-xl 
                shadow 
                hover:shadow-md 
                transition-all
              "
            >

              {/* Left image */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0">
                <img
                  src={images}
                  alt={title}
                  className="
                    w-full h-full object-cover 
                    rounded-xl 
                    shadow-md 
                    group-hover:scale-[1.03] 
                    transition
                  "
                />
              </div>

              {/* Right content */}
              <div className="flex flex-col items-start gap-1 pr-3">
                <p className="text-gray-500 text-xs sm:text-sm">{date}</p>

                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  {title}
                </h3>

                <a
                  href={link}
                  target="_blank"
                  className="
                    text-blue-600 
                    flex gap-1 sm:gap-2 
                    items-center 
                    font-semibold 
                    text-sm sm:text-base
                    hover:underline
                  "
                >
                  Read full article
                  <MoveRight size={18} />
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

const SafariWindow = WindowWrapper(Safari, 'safari')
export default SafariWindow
