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
    <div id="safari-window" className="flex flex-col w-full">

      {/* ---------- SAFARI TOP BAR ---------- */}
      <div className="safari-header flex items-center justify-between w-full px-6 py-3 bg-white/90 backdrop-blur-xl rounded-t-xl shadow-sm">

        {/* Left – window controls */}
        <div className="flex items-center">
          <WindowControls target="safari" />
        </div>

        {/* Center navigation buttons */}
        <div className="nav-buttons flex items-center gap-3">
          <PanelLeft className="text-amber-600 cursor-pointer" />
          <ChevronLeft className="cursor-pointer" />
          <ChevronRight className="cursor-pointer" />
        </div>

        {/* Search box */}
        <div className="searchbox flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-full w-full max-w-lg shadow-inner">
          <Search className="text-amber-600" />
          <input
            type="text"
            placeholder="Search or enter website name"
            className="bg-transparent flex-1 outline-none"
          />
        </div>

        {/* Right side icons */}
        <div className="flex items-center gap-3">
          <Share className="text-amber-600 cursor-pointer" />
          <Plus className="text-amber-600 cursor-pointer" />
          <Copy className="text-amber-600 cursor-pointer" />
        </div>

      </div>

      {/* ---------- SAFARI BODY ---------- */}
      <div className="safari-content flex flex-col px-10 py-8 gap-8">

        <h2 className="text-3xl font-bold text-black mb-4">My Developer Blog</h2>

        <div className="flex h-96 overflow-auto flex-col gap-8">
          {blogpost.map(({ id, title, images, link, date }) => (
            <div
              key={id}
              className="group flex gap-6 items-center bg-white p-4 rounded-xl shadow hover:shadow-md transition-all"
            >

              {/* Left image */}
              <div className="w-24 h-24 shrink-0">
                <img
                  src={images}
                  alt={title}
                  className="w-full h-full object-cover rounded-xl shadow-md group-hover:scale-[1.03] transition"
                />
              </div>

              {/* Right text */}
              <div className="flex flex-col items-start justify-start gap-1">
                <p className="text-gray-500 text-sm">{date}</p>

                <h3 className="text-xl font-semibold text-gray-900">
                  {title}
                </h3>

                <a
                  href={link}
                  target="_blank"
                  className="text-blue-600 flex gap-2 items-center font-semibold text-base hover:underline"
                >
                  Read full article
                  <MoveRight />
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
