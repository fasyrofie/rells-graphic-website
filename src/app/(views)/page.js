'use client'

import {
  AboutMe,
  GraphicDesign,
  Illustration,
  SocmedDesign,
  ThumbnailDesign,
  VideoEditing,
  YearbookDesign,
} from './components'

const HomePage = () => {
  return (
    <>
      {/* About Me */}
      <AboutMe />

      {/* DandZSpeaks */}
      <VideoEditing />

      {/* Graphic Design */}
      <GraphicDesign />

      {/* Thumbnail Design */}
      <ThumbnailDesign />

      {/* Socmed Design */}
      <SocmedDesign />

      {/* Yearbook Design */}
      <YearbookDesign />

      {/* Illustration */}
      <Illustration />
    </>
  )
}

export default HomePage
