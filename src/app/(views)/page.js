'use client'

import classNames from 'classnames'

import Image from 'next/image'
import Link from 'next/link'
import FadeIn from '@/components/FadeIn'
import {
  CBadge,
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CCol,
  CContainer,
  CProgress,
  CRating,
  CRow,
} from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cilArrowRight } from '@coreui/icons'
import {
  adobeAfterEffects,
  adobeIndesign,
  adobePhotoshop,
  adobePremierePro,
  discord,
  googleDriveColored,
  videoCamera,
} from '@/assets/icons'

import { akiraExpanded } from '@/app/fonts'

import profileBackground from '@/assets/images/profile-photo.png'

import DandZSpeaksAvatar from '@/assets/images/DandZSpeaks-avatar.png'
import capcutLogo from '@/assets/images/capcut-logo.svg'
import afterEffectsLogo from '@/assets/images/after-effects-logo.svg'
import otherVideosText from '@/assets/images/other-videos-text.svg'

import laptopFull from '@/assets/images/laptop-full.png'

import socmedBannerImage from '@/assets/images/socmed-banner.png'
import socmedLeftImage from '@/assets/images/socmed-left.svg'
import socmedRightImage from '@/assets/images/socmed-right.svg'

// Illustration Images
import illustrationImage from '@/assets/images/illustration/illustration.png'
import fundamentasImage from '@/assets/images/illustration/fundamentas.png'

// YJW Images
import yjwBanner from '@/assets/images/yjw/yjw-banner.jpeg'
import yjwLogo from '@/assets/images/yjw/yjw-logo.png'

const dnzspeaksVideos = [
  'https://www.youtube.com/embed/NrNkjhXB6ek',
  'https://www.youtube.com/embed/F18LvmSif-A',
  'https://www.youtube.com/embed/jmr_dBWS-zI',
  'https://www.youtube.com/embed/jJ8Kos60bXo',
]

const carousels = [
  {
    video: 'https://www.youtube.com/embed/ESURkeqSC1Y?si=5b8laAH2qwDfjOBc',
    title: 'Long Form Content',
    caption:
      'Your content idea is strong, but enhancing the editing quality can significantly boost viewer engagement. By refining the first two minutes of your video to serve as a compelling hook, you can increase viewer retention and ensure your content is watched through to the end.',
  },
  {
    video: 'https://www.youtube.com/embed/UhP2wphlaHw',
    title: 'Long Form Content',
    caption:
      'Your content idea is strong, but enhancing the editing quality can significantly boost viewer engagement. By refining the first two minutes of your video to serve as a compelling hook, you can increase viewer retention and ensure your content is watched through to the end.',
  },
  {
    video: 'https://www.youtube.com/embed/LvqI1Rz2NXo',
    title: 'Long Form Content',
    caption:
      'Your content idea is strong, but enhancing the editing quality can significantly boost viewer engagement. By refining the first two minutes of your video to serve as a compelling hook, you can increase viewer retention and ensure your content is watched through to the end.',
  },
  {
    video: 'https://www.youtube.com/embed/Kw2VZCH2-yQ',
    title: 'Long Form Content',
    caption:
      'Your content idea is strong, but enhancing the editing quality can significantly boost viewer engagement. By refining the first two minutes of your video to serve as a compelling hook, you can increase viewer retention and ensure your content is watched through to the end.',
  },
]

const dnzspeaksOtherVideos = [
  'https://www.youtube.com/embed/OwehzKVYJr8',
  'https://www.youtube.com/embed/0-zp5pxFDPk',
  'https://www.youtube.com/embed/Mz3clkwRXjQ',
  'https://www.youtube.com/embed/3lkdsxqjRt0',
]

const graphicDesigns = [
  {
    image: '/images/graphic-design/YT thumbnail 1.png',
    name: 'Thumbnail Design',
    description:
      'I secure freelance opportunities through platforms such as X (formerly Twitter). I proactively reach out to content creators via direct messages, presenting them with samples of my work.',
  },
  {
    image: '/images/graphic-design/sosmed 1.png',
    name: 'Social Media Design',
    description:
      'I have been employed with Selected Comm+ since 2022. In 2023, I transitioned to another agency, Noni Kolektiv, where I initially worked as a freelancer before advancing to the position of Design Lead.',
  },
  {
    image: '/images/graphic-design/buku graphic design 1.png',
    name: 'Yearbook Design',
    description:
      'This position at Paramata Studio has been my first role since graduation. An alumnus of my high school owns the agency.',
  },
  {
    image: '/images/graphic-design/ipad 1 1.png',
    name: 'Illustration',
    description:
      'I specialized in illustration in college and have competed in drawing contests organized by brands and gaming companies, though I have not yet held a professional role in this field.',
  },
]

const thumbnailDesigns = [
  {
    src: '/images/thumbnail-design/gorgi.png',
    width: 800,
    height: 800,
  },
  {
    src: '/images/thumbnail-design/Deve Talks.png',
    width: 600,
    height: 600,
  },
  {
    src: '/images/thumbnail-design/NicInspo.png',
    width: 300,
    height: 300,
  },
  {
    src: '/images/thumbnail-design/Roman Mossey.png',
    width: 871,
    height: 871,
  },
  {
    src: '/images/thumbnail-design/Sabri Suby.png',
    width: 590,
    height: 590,
  },
  {
    src: '/images/thumbnail-design/Sabri Suby 2.png',
    width: 370,
    height: 370,
  },
]

const socmedDesigns = [
  {
    feed: '/images/socmed-design/fatigon-feed.png',
    logo: '/images/socmed-design/fatigon-logo.png',
  },
  {
    feed: '/images/socmed-design/sakatonik-feed.png',
    logo: '/images/socmed-design/sakatonik-logo.png',
  },
  {
    feed: '/images/socmed-design/jipremium-feed.png',
    logo: '/images/socmed-design/jipremium-logo.png',
  },
  {
    feed: '/images/socmed-design/oriflame-feed.png',
    logo: '/images/socmed-design/oriflame-logo.png',
  },
  {
    feed: '/images/socmed-design/shifudo-feed.png',
    logo: '/images/socmed-design/shifudo-logo.png',
  },
  {
    feed: '/images/socmed-design/dnd-feed.png',
    logo: '/images/socmed-design/dnd-logo.png',
  },
  {
    feed: '/images/socmed-design/pnb-feed.png',
    logo: '/images/socmed-design/pnb-logo.png',
  },
  {
    feed: '/images/socmed-design/hiboo-feed.png',
    logo: '/images/socmed-design/hiboo-logo.png',
  },
]

const socmedDesignsMore = [
  '/images/socmed-design/drs-clinic.png',
  '/images/socmed-design/define.png',
  '/images/socmed-design/skinfirst.png',
  '/images/socmed-design/swissair.png',
  '/images/socmed-design/intirimbo.png',
  '/images/socmed-design/sprinkle.png',
  '/images/socmed-design/imagine.png',
  '/images/socmed-design/jellygum.png',
  '/images/socmed-design/noni-kolektiv.png',
  '/images/socmed-design/selected.png',
]

const yearbookDesigns = [
  {
    image: '/images/yearbook-design/buta-1.png',
    name: 'Ciawi 1 Middle School',
    year: '2024',
  },
  {
    image: '/images/yearbook-design/buta-2.png',
    name: 'BCI Middle School',
    year: '2022',
  },
  {
    image: '/images/yearbook-design/buta-3.png',
    name: 'Citra Abiyasa Highschool',
    year: '2022',
  },
  {
    image: '/images/yearbook-design/buta-4.png',
    name: 'Ciawi 1 Middle School',
    year: '2022',
  },
  {
    image: '/images/yearbook-design/buta-5.png',
    name: 'Bogor 5 Middle School',
    year: '2022',
  },
]

const yjwShowcases = [
  { src: '/images/yjw/2.png', width: 200, height: 300 },
  { src: '/images/yjw/1.png', width: 250, height: 350 },
  { src: '/images/yjw/1000.png', width: 300, height: 400 },
  { src: '/images/yjw/1088.png', width: 200, height: 300 },
  { src: '/images/yjw/YJW-1.png', width: 250, height: 350 },
  { src: '/images/yjw/3.png', width: 300, height: 400 },
  { src: '/images/yjw/4.png', width: 200, height: 300 },
]

const yjwArtworks = [
  '/images/yjw/Artwork 1.png',
  '/images/yjw/Artwork 2.png',
  '/images/yjw/Artwork 3.png',
  '/images/yjw/Artwork 4.png',
]

const HomePage = () => {
  return (
    <>
      {/* About Me */}
      <div id="about-me" className="bg-dark d-flex align-items-center">
        <CContainer lg className="py-5 my-auto">
          <CRow className="align-items-center">
            {/* Left */}
            <CCol xs={12} md={6} className="py-3">
              <div className="text-white text-nickname">
                Rell&apos;s Graphic&apos;s real name is
              </div>
              <div className={classNames(akiraExpanded.className, 'text-white text-name mt-3')}>
                FARRELL
                <br />
                ASYROFIE
              </div>
              <div className="d-flex flex-wrap mt-4">
                <CBadge color="secondary" className="rounded-pill p-3 fw-normal me-2">
                  Art Director
                </CBadge>
                <CBadge color="secondary" className="rounded-pill p-3 fw-normal me-2">
                  Graphic Designer
                </CBadge>
                <CBadge color="secondary" className="rounded-pill p-3 fw-normal">
                  Video Editor
                </CBadge>
              </div>
              <p className="text-white mt-4">
                Graduating in 2022, I initially worked as a Yearbook Designer. For the next few
                months, I worked as a Social Media Graphic Designer. 2 years have passed, and Now I
                have opened a video editor gig.
              </p>
              <div className="row g-4">
                <div className="col-6 d-flex align-items-center">
                  <CIcon icon={adobePhotoshop} height={65} customClassName="me-3" />
                  <div className="w-100">
                    <CProgress color="white" className="bg-secondary" value={90} />
                  </div>
                </div>
                <div className="col-6 d-flex align-items-center">
                  <CIcon icon={adobePremierePro} height={65} customClassName="me-3" />
                  <div className="w-100">
                    <CProgress color="white" className="bg-secondary" value={90} />
                  </div>
                </div>
                <div className="col-6 d-flex align-items-center">
                  <CIcon icon={adobeAfterEffects} height={65} customClassName="me-3" />
                  <div className="w-100">
                    <CProgress color="white" className="bg-secondary" value={90} />
                  </div>
                </div>
                <div className="col-6 d-flex align-items-center">
                  <CIcon icon={adobeIndesign} height={65} customClassName="me-3" />
                  <div className="w-100">
                    <CProgress color="white" className="bg-secondary" value={90} />
                  </div>
                </div>
              </div>
            </CCol>

            {/* Rigth */}
            <CCol xs={12} md={6}>
              <Image alt="Profile Photo" src={profileBackground} className="img-fluid" />
            </CCol>
          </CRow>
        </CContainer>
      </div>

      {/* DandZSpeaks */}
      <div id="dandz-speaks1">
        {/* Intro */}
        <div className="position-relative bg-dark py-5">
          <CContainer lg>
            <div className="mx-auto w-100 text-center py-4" style={{ maxWidth: '816px' }}>
              <div className="py-4">
                <Image
                  alt="DandZSpeaks Avatar"
                  src={DandZSpeaksAvatar}
                  className="img-fluid rounded-circle"
                  width={80}
                  height={80}
                />
                <FadeIn>
                  <div className="display-3 fw-bold mt-3 text-center fade-in">
                    I help DandZSpeaks Level Up Their Content.
                  </div>
                </FadeIn>
                <p className="text-white mt-4 mx-auto text-center" style={{ maxWidth: '537px' }}>
                  For a beginner creator, they generate decent views with their short content. This
                  is why <b>I can help you as a small creator to get decent amount of views</b> with
                  great editing!
                </p>
              </div>
            </div>
          </CContainer>

          <div className="position-absolute top-50 start-0 translate-middle-y user-select-none">
            <Image alt="Capcut" src={capcutLogo} />
          </div>

          <div className="position-absolute top-50 end-0 translate-middle-y user-select-none">
            <Image alt="After Effects" src={afterEffectsLogo} />
          </div>
        </div>

        {/* Showcases 1 */}
        <div className="bg-dark">
          {/* <CContainer lg> */}
          <div className="ratio ratio-16x9">
            <video className="object-fit-cover" controls>
              <source src="/videos/DandZSpeaks-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* </CContainer> */}
        </div>

        {/* Showcases 2 */}
        <CContainer lg className="py-5" style={{ maxWidth: '720px' }}>
          <CRow className="row-cols-1 row-cols-md-2 g-3">
            {dnzspeaksVideos.map((video, index) => (
              <CCol key={index}>
                <div className="ratio ratio-9x16">
                  <iframe
                    src={video}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </CCol>
            ))}
          </CRow>
        </CContainer>

        {/* Review */}
        <CContainer lg className="py-5">
          <div className="bg-secondary bg-gradient rounded-5 p-5">
            <CRow className="g-3 align-items-center">
              <CCol xs={12} md="auto" className="text-center">
                <Image
                  alt="DandZSpeaks Avatar"
                  src={DandZSpeaksAvatar}
                  className="img-fluid rounded-circle"
                  width={114}
                  height={114}
                />
              </CCol>
              <CCol xs={12} md="auto" className="d-flex flex-column align-items-center">
                <h2 className="text-white">DandZSpeaks</h2>
                <CRating readOnly size="lg" value={5} />
              </CCol>
              <CCol xs={12} md className="text-center text-md-start">
                <p className="text-white">
                  “You did a really great job! You really are consistent with the quality of the
                  video. Hell, even you are getting better each video! The greatest quality of yours
                  is your speed. I am surprised that you can produce these videos in such short of
                  time!”
                </p>
              </CCol>
              <CCol xs={12} md="auto" className="text-center">
                <CIcon icon={discord} height={28} />
              </CCol>
            </CRow>
          </div>
        </CContainer>

        {/* Other Videos */}
        <CContainer lg className="py-5">
          <FadeIn className="d-block mx-auto ">
            <Image alt="Text" src={otherVideosText} className="img-fluid" />
          </FadeIn>
        </CContainer>

        {/* Carousel */}
        <CCarousel controls indicators pause="hover">
          {carousels.map((carousel, index) => (
            <CCarouselItem key={index}>
              <div className="ratio ratio-16x9">
                <iframe
                  src={carousel.video}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <CCarouselCaption className="d-none d-md-block align-self-start">
                <h5>{carousel.title}</h5>
                <p>{carousel.caption}</p>
              </CCarouselCaption>
            </CCarouselItem>
          ))}
        </CCarousel>

        {/* Showcases 2 */}
        <CContainer lg className="py-5">
          <CRow className="row-cols-1 row-cols-md-4 g-3 py-4">
            {dnzspeaksOtherVideos.map((video, index) => (
              <CCol key={index}>
                <div className="ratio ratio-9x16">
                  <iframe
                    src={video}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </CCol>
            ))}
          </CRow>

          <CRow className="g-4 justify-content-center align-items-center py-4">
            <CCol xs="auto">
              <h1>
                Order Your
                <br />
                Video Now!
              </h1>
            </CCol>
            <CCol xs="auto">
              <CIcon icon={cilArrowRight} size="5xl" />
            </CCol>
            <CCol xs="auto">
              <Link
                className="btn btn-light bg-gradient rounded-4 p-3"
                href={'https://drive.google.com/drive/folders/1-WvcndreMyaIiRfReDvZauRbUQRjlZ0U'}
                target="_blank"
              >
                <CIcon icon={videoCamera} className="me-2" />I want Rell&apos;s Graphic&apos;s Video
              </Link>
            </CCol>
          </CRow>
        </CContainer>
      </div>

      {/* Graphic Design */}
      <div id="graphic-design" className="bg-dark py-5">
        <CContainer lg>
          <p className={classNames(akiraExpanded.className, 'py-4 display-2 lh-1 text-center')}>
            Graphic
            <br />
            design
          </p>
          <CRow className="g-3">
            {graphicDesigns.map((design, index) => (
              <CCol key={index} xs={12} md={6} lg={3}>
                <div className="ratio ratio-1x1 bg-dark bg-gradient border border-secondary rounded-5">
                  <Image
                    alt="Graphic Design"
                    src={design.image}
                    className="p-4 object-fit-contain"
                    width={300}
                    height={300}
                  />
                </div>
                <h4 className="text-center mt-3">{design.name}</h4>
                <p className="text-center">{design.description}</p>
              </CCol>
            ))}
          </CRow>
        </CContainer>
      </div>

      {/* Thumbnail Design */}
      <div id="thumbnail-design">
        {/* Intro */}
        <div className="content-h-full py-5">
          <CContainer lg className="position-relative d-flex h-100">
            <div className="d-block d-md-none position-absolute bottom-0 end-0 h-50">
              <Image
                alt="Thumbnail Design"
                src={laptopFull}
                className="object-fit-contain img-fluid h-100"
              />
            </div>

            <div className="d-none d-md-block position-absolute top-50 start-0 translate-middle h-75">
              <Image
                alt="Thumbnail Design"
                src={laptopFull}
                className="object-fit-contain img-fluid h-100"
              />
            </div>

            <CRow className="my-md-auto">
              <CCol xs={12} md={6}>
                <h1 className="mb-4">Thumbnail Design</h1>
                <p className="mb-4">
                  Client outreach is conducted through X (formerly Twitter), where initial samples
                  are crafted for mid-sized creators and shared via comments on their posts. I have
                  developed over 30 designs using Adobe Photoshop. Here are examples of my most
                  notable work.
                </p>
                <Link
                  className="btn btn-light bg-gradient rounded-4 p-3"
                  href={'https://drive.google.com/drive/folders/1-WvcndreMyaIiRfReDvZauRbUQRjlZ0U'}
                  target="_blank"
                >
                  <CIcon icon={googleDriveColored} className="me-2" />
                  More of My Works
                </Link>
              </CCol>
              <CCol xs={12} md={6} className="order-md-first"></CCol>
            </CRow>
          </CContainer>
        </div>

        {/* Showcases */}
        <CContainer lg className="py-5">
          <CRow className="row-cols-1">
            {thumbnailDesigns.map((design, index) => (
              <CCol
                key={index}
                className={classNames(
                  index % 3 === 0 ? 'text-start' : index % 3 === 1 ? 'text-center' : 'text-end',
                  'p-3',
                )}
              >
                <FadeIn>
                  <Image
                    alt="Thumbnail Design"
                    src={design.src}
                    className="object-fit-cover img-fluid"
                    width={design.width}
                    height={design.height}
                  />
                </FadeIn>
              </CCol>
            ))}
          </CRow>
        </CContainer>
      </div>

      {/* Socmed Design */}
      <div id="socmed-design" className="py-5">
        {/* Banner */}
        <div className="position-relative d-flex py-4">
          <Image
            alt="Social Media Banner"
            src={socmedBannerImage}
            className="d-block img-fluid mx-auto my-auto"
          />

          <div className="d-none d-md-block position-absolute top-50 start-0 translate-middle-y user-select-none">
            <Image alt="Social Media Left" src={socmedLeftImage} className="img-fluid" />
          </div>

          <div className="d-none d-md-block position-absolute top-50 end-0 translate-middle-y user-select-none">
            <Image alt="Social Media Right" src={socmedRightImage} className="img-fluid" />
          </div>
        </div>

        {/* Intro */}
        <div className="text-center py-4">
          <h1 className="mb-4">Social Media Design</h1>
          <p className="mx-auto" style={{ maxWidth: '509px' }}>
            Throughout 2022 - 2024, I&apos;ve handled 21 brand&apos;s social media post design with
            a lot of design theme variety, from kids to Gen-Z design theme.
          </p>
        </div>

        {/* Works */}
        <CContainer lg className="py-4">
          <div id="hightlight-clients">
            <CRow className="g-4 row-cols-2 row-cols-md-4">
              {socmedDesigns.map((design, index) => (
                <CCol key={index}>
                  <div className="client ratio ratio-1x1 border border-secondary rounded-4 overflow-hidden">
                    <Image
                      alt="Social Media Feed"
                      src={design.feed}
                      className="client-feed object-fit-cover"
                      width={298}
                      height={298}
                    />
                    <Image
                      alt="Social Media Logo"
                      src={design.logo}
                      className="client-logo object-fit-contain position-absolute top-50 start-50 translate-middle p-5"
                      width={100}
                      height={100}
                    />
                  </div>
                </CCol>
              ))}
            </CRow>
          </div>
        </CContainer>

        {/* More Works */}
        <div className="text-center py-4">
          <h1 className="mb-4">And Many More</h1>
          <div className="d-flex overflow-x-auto py-4">
            {socmedDesignsMore.map((design, index) => (
              <div className="px-4" style={{ width: '200px' }} key={index}>
                <Image
                  alt="Socmed Design"
                  src={design}
                  className="object-fit-contain"
                  width={100}
                  height={100}
                />
              </div>
            ))}
          </div>
          <Link
            className="btn btn-light bg-gradient rounded-4 p-3"
            href={'https://drive.google.com/drive/folders/1Vhfdd79YLKCHOSjWCbh8-PHjQcD2qJps'}
            target="_blank"
          >
            <CIcon icon={googleDriveColored} className="me-2" />
            More of My Works
          </Link>
        </div>
      </div>

      {/* Yearbook Design */}
      <div id="yearbook-design" className="py-5">
        {/* Intro */}
        <div className="bg-dark">
          <CContainer lg className="py-4">
            <CRow className="g-4">
              <CCol xs={12} md={6} className="d-flex align-items-center">
                <div>
                  <h1>Yearbook Design</h1>
                  <p>
                    I have been employed with Selected Comm+ since 2022. In 2023, I transitioned to
                    another agency, Noni Kolektiv, where I initially worked as a freelancer before
                    advancing to the position of Design Lead.
                  </p>
                </div>
              </CCol>
              <CCol xs={12} md={6}>
                <FadeIn>
                  <Image
                    alt="Yearbook Design"
                    src="/images/yearbook-design/yearbook-intro.png"
                    className="img-fluid"
                    width={650}
                    height={650}
                  />
                </FadeIn>
              </CCol>
            </CRow>
          </CContainer>
        </div>

        {/* Showcase */}
        <CContainer lg className="py-4">
          <div className="py-4">
            <CRow className="g-4 py-4">
              <CCol xs={12} md={7}>
                <Image
                  alt="Group Photo Page"
                  src="/images/yearbook-design/group-1.png"
                  className="img-fluid"
                  width={500}
                  height={500}
                />
                <div className="py-3">
                  <h5 className="fw-bold">Group Photo Page.</h5>
                  <p>
                    The most crucial part of the book. This is where collaboration require the most.
                    Student&apos;s wild ideas have to come true with Art director&apos;s guide and
                    photographer&apos;s skill.
                  </p>
                </div>
              </CCol>
              <CCol xs={12} md={5}>
                <Image
                  alt="Drone Shoot"
                  src="/images/yearbook-design/drone-1.png"
                  className="img-fluid"
                  width={500}
                  height={500}
                />
                <div className="py-3">
                  <h5 className="fw-bold">Drone Shoot</h5>
                  <p>Students lining up to form the name of their class.</p>
                </div>
              </CCol>
              <CCol xs={12} md={6}>
                <CRow>
                  <CCol>
                    <Image
                      alt="Portrait Photo"
                      src="/images/yearbook-design/portrait-1.png"
                      className="img-fluid"
                      width={500}
                      height={500}
                    />
                  </CCol>
                  <CCol>
                    <CRow className="g-4 row-cols-1">
                      <CCol>
                        <Image
                          alt="Portrait Photo"
                          src="/images/yearbook-design/portrait-2.png"
                          className="img-fluid"
                          width={500}
                          height={500}
                        />
                      </CCol>
                      <CCol>
                        <Image
                          alt="Portrait Photo"
                          src="/images/yearbook-design/portrait-3.png"
                          className="img-fluid"
                          width={500}
                          height={500}
                        />
                      </CCol>
                      <CCol className="order-md-first">
                        <h5 className="fw-bold">Portrait Photo.</h5>
                      </CCol>
                    </CRow>
                  </CCol>
                </CRow>
              </CCol>
              <CCol xs={12} md={6}>
                <Image
                  alt="Cover Design & Welcome Page"
                  src="/images/yearbook-design/cover-1.png"
                  className="img-fluid"
                  width={500}
                  height={500}
                />
                <div className="py-3">
                  <h5 className="fw-bold">Cover Design & Welcome Page</h5>
                  <p>
                    These part is the part we first see. Everything has to be a same theme with the
                    request.
                  </p>
                </div>
              </CCol>
            </CRow>
          </div>

          {/* Yearbook */}
          <div className="py-4">
            <CRow className="g-4 py-4 align-items-center">
              {yearbookDesigns.map((design, index) => (
                <CCol key={index} xs={12} md={4}>
                  <div className="ratio ratio-1x1">
                    <Image
                      alt="Yearbook Design"
                      src={design.image}
                      className="object-fit-contain"
                      width={300}
                      height={300}
                    />
                  </div>
                  <h4 className="mt-3">{design.name}</h4>
                  <p className="">{design.year}</p>
                </CCol>
              ))}
              <CCol className="text-center">
                <Link
                  className="btn btn-light bg-gradient rounded-4 p-3"
                  href={'https://drive.google.com/drive/folders/1QKkqJhfl34nXFbuIzRn7VKQ0qQn46ON5'}
                  target="_blank"
                >
                  <CIcon icon={googleDriveColored} className="me-2" />
                  More of My Works
                </Link>
              </CCol>
            </CRow>
          </div>
        </CContainer>
      </div>

      {/* Illustration */}
      <div id="illustration" className="pt-5">
        {/* Intro */}
        <CContainer lg>
          <p className={classNames(akiraExpanded.className, 'py-4 display-2 lh-1 text-center')}>
            Illustration
          </p>
        </CContainer>
        <div className="w-100 overflow-x-hidden bg-dark">
          <CRow>
            <CCol lg={12}>
              <Image
                alt="Illustration"
                src={illustrationImage}
                className="object-fit-cover img-fluid"
              />
            </CCol>
            <CCol xs={12} md={6} className="align-self-center">
              <div className="p-5">
                <h1>Fundamentas Illustration</h1>
                <p>
                  Fundamentas is an illustration competition organized by Torch Id, a bag company
                  based in Bandung. Torch ID is seeking innovative ideas for their upcoming product
                  lineup.
                </p>
              </div>
            </CCol>
            <CCol xs={12} md={6}>
              <Image
                alt="Fundamentas"
                src={fundamentasImage}
                className="object-fit-cover img-fluid"
              />
            </CCol>
          </CRow>
          <CRow className="g-5 py-5">
            <CCol xs={6} className="align-self-end text-center">
              <Image
                alt="Fundamentas"
                src="/images/illustration/mockup-hoodie.jpeg"
                className="object-fit-cover img-fluid"
                width={500}
                height={500}
              />
            </CCol>
            <CCol xs={6} className="align-self-end text-center">
              <Image
                alt="Fundamentas"
                src="/images/illustration/mockup-totebag.jpeg"
                className="object-fit-cover img-fluid"
                width={400}
                height={400}
              />
            </CCol>
            <CCol xs={12} className="align-self-end text-center">
              <Image
                alt="Fundamentas"
                src="/images/illustration/mockup-tshirt.jpeg"
                className="object-fit-cover img-fluid"
                width={500}
                height={500}
              />
            </CCol>
          </CRow>
        </div>

        {/* Young Joseph World */}
        <div id="yjw" className="w-100 overflow-x-hidden bg-dark">
          {/* Banner */}
          <Image alt="Young Joseph World Banner" className="w-100 img-fluid" src={yjwBanner} />
          {/* Intro */}
          <CContainer lg>
            <CRow className="py-4">
              <CCol xs={12} md={6} className="order-md-last align-self-center">
                <div className="text-center text-md-start p-4">
                  <h1>Young Joseph World NFT Project</h1>
                  <p>
                    The YJW project tackles racial discrimination against Papuans in Indonesia,
                    where lighter skin is often favored. Through this NFT project, I aim to
                    challenge these biases and highlight the beauty and value of Papuan culture.
                  </p>
                </div>
              </CCol>
              <CCol xs={12} md={6}>
                <Image alt="Young Joseph World Logo" src={yjwLogo} className="img-fluid" />
              </CCol>
            </CRow>
          </CContainer>
          {/* Showcase */}
          <CRow className="row-cols-2">
            {yjwShowcases.map((showcase, index) => (
              <CCol key={index} className="p-4 text-center">
                <Image
                  alt="Young Joseph World Showcase"
                  src={showcase.src}
                  className="img-fluid"
                  width={showcase.width}
                  height={showcase.height}
                />
              </CCol>
            ))}
          </CRow>
          {/* Artwork */}
          <CRow className="justify-content-center">
            <CCol className="p-4 text-center" xs="auto">
              <CCarousel className="artwork" controls transition="crossfade">
                {yjwArtworks.map((artwork, index) => (
                  <CCarouselItem key={index}>
                    <Image
                      alt="Young Joseph World Showcase"
                      src={artwork}
                      className="img-fluid"
                      width={500}
                      height={500}
                    />
                  </CCarouselItem>
                ))}
              </CCarousel>
            </CCol>
          </CRow>
        </div>
      </div>
    </>
  )
}

export default HomePage
