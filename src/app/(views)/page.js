'use client'

// 1. Yearbook Design - Portrait photo align bottom
// Yearbook design - photo margin bawah semua
// Yearbook design - tambah padding antar yearbook cover
// Yearbook design - margin photo ke text 36px, margin tittle ke desicription 16px
// 2. Sakatonik - Crop rata tengah
// 3. Navbar - gradient ketika scroll
// 3. And many more - dibuat 6 - 4, logo b&w
// About me - ajdust width skill, adjust text spacing, adsjut margin
// about me - ajust margin profile & photo
// NFT tambah spacing bawah
// NFT showcase rapat bawah + tambah text
// Graphic design - fix margin image, font size, margin bottom text
// Thumbnail Design & similar - ajust font size, jadi 4 baris,
// Button More fo My Works gradient
// Fundamentas Illustration dibuat 2 baris
// YJW logo - tambah padding column

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
