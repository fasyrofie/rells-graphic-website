'use client'

import classNames from 'classnames'

import Image from 'next/image'
import { CBadge, CButton, CCol, CContainer, CProgress, CRating, CRow } from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import {
  adobeAfterEffects,
  adobeIndesign,
  adobePhotoshop,
  adobePremierePro,
  discord,
  googleDriveColored,
} from '@/assets/icons'

import { akiraExpanded } from '@/app/fonts'

import profileBackground from '@/assets/images/profile-photo.png'

import DandZSpeaksAvatar from '@/assets/images/DandZSpeaks-avatar.png'
import capcutLogo from '@/assets/images/capcut-logo.svg'
import afterEffectsLogo from '@/assets/images/after-effects-logo.svg'

import laptopFull from '@/assets/images/laptop-full.png'

import socmedBannerImage from '@/assets/images/socmed-banner.png'
import socmedLeftImage from '@/assets/images/socmed-left.svg'
import socmedRightImage from '@/assets/images/socmed-right.svg'

const dnzspeaksVideos = [
  '/videos/DnZSpeaks/April Short 9_Done.mp4',
  '/videos/DnZSpeaks/eminem.mp4',
  '/videos/DnZSpeaks/Jack Doherty_done.mp4',
  '/videos/DnZSpeaks/Lil Dicky_Captioned.mp4',
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
      <div id="dandz-speaks1" className="bg-dark position-relative my-5 py-5">
        <CContainer lg>
          <div className="mx-auto w-100 text-center" style={{ maxWidth: '816px' }}>
            <Image
              alt="DandZSpeaks Avatar"
              src={DandZSpeaksAvatar}
              className="img-fluid rounded-circle"
              width={80}
              height={80}
            />
            <div className="display-3 fw-bold text-white mt-3 text-center">
              I help DandZSpeaks Level Up Their Content.
            </div>
            <p className="text-white mt-4 mx-auto text-center" style={{ maxWidth: '537px' }}>
              For a beginner creator, they generate decent views with their short content. This is
              why <b>I can help you as a small creator to get decent amount of views</b> with great
              editing!
            </p>
          </div>
        </CContainer>

        <div className="position-absolute top-50 start-0 translate-middle-y user-select-none">
          <Image src={capcutLogo} />
        </div>

        <div className="position-absolute top-50 end-0 translate-middle-y user-select-none">
          <Image src={afterEffectsLogo} />
        </div>
      </div>

      <CContainer lg id="dandz-speaks2" className="bg-dark py-5">
        <div className="ratio ratio-16x9">
          <video className="object-fit-cover" controls>
            <source src="/videos/DandZSpeaks-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </CContainer>

      <CContainer lg id="dandz-speaks2" className="py-5" style={{ maxWidth: '720px' }}>
        <CRow className="row-cols-1 row-cols-md-2 g-3">
          {dnzspeaksVideos.map((video, index) => (
            <CCol key={index}>
              <div className="ratio ratio-9x16">
                <video className="object-fit-cover" controls>
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </CCol>
          ))}
        </CRow>
      </CContainer>

      <CContainer lg id="review" className="py-5">
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

      {/* Graphic Design */}
      <div id="graphic-design" className="bg-dark py-5">
        <CContainer lg>
          <p
            className={classNames(
              akiraExpanded.className,
              'py-4 display-2 lh-1 text-center text-white',
            )}
          >
            Graphic
            <br />
            design
          </p>
          <CRow className="g-3">
            {graphicDesigns.map((design, index) => (
              <CCol key={index} xs={12} md={6} lg={3}>
                <div className="ratio ratio-1x1 bg-dark bg-gradient border border-secondary rounded-5">
                  <Image
                    src={design.image}
                    className="p-4 object-fit-contain"
                    width={300}
                    height={300}
                  />
                </div>
                <h4 className="text-center text-white mt-3">{design.name}</h4>
                <p className="text-center text-white">{design.description}</p>
              </CCol>
            ))}
          </CRow>
        </CContainer>
      </div>

      {/* Thumbnail Design */}
      <div id="thumbnail-design" className="py-5">
        <CContainer lg className="position-relative d-flex h-100">
          <div className="d-block d-md-none position-absolute bottom-0 end-0 h-50">
            <Image src={laptopFull} className="object-fit-contain img-fluid h-100" />
          </div>

          <div className="d-none d-md-block position-absolute top-50 start-0 translate-middle h-75">
            <Image src={laptopFull} className="object-fit-contain img-fluid h-100" />
          </div>

          <CRow className="my-md-auto">
            <CCol xs={12} md={6}>
              <h1 className="mb-4">Thumbnail Design</h1>
              <p className="mb-4">
                Client outreach is conducted through X (formerly Twitter), where initial samples are
                crafted for mid-sized creators and shared via comments on their posts. I have
                developed over 30 designs using Adobe Photoshop. Here are examples of my most
                notable work.
              </p>
              <CButton color="light" className="bg-gradient rounded-4 p-3">
                <CIcon icon={googleDriveColored} className="me-2" />
                More of My Works
              </CButton>
            </CCol>
            <CCol xs={12} md={6} className="order-md-first"></CCol>
          </CRow>
        </CContainer>
      </div>

      {/* Socmed Design */}
      <div id="socmed-design" className="py-5">
        {/* Banner */}
        <div className="position-relative d-flex content-min-h-full py-4">
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
            Throughout 2022 - 2024, I’ve handled 21 brand’s social media post design with a lot of
            design theme variety, from kids to Gen-Z design theme.
          </p>
        </div>

        {/* Works */}
        <CContainer lg className="py-4">
          <CRow className="g-4 row-cols-2 row-cols-md-4">
            {socmedDesigns.map((design, index) => (
              <CCol key={index}>
                <div className="ratio ratio-1x1 border border-secondary rounded-4 overflow-hidden">
                  <Image
                    src={design.feed}
                    className="object-fit-cover"
                    style={{ filter: 'grayscale(100%) brightness(50%) blur(8px)' }}
                    width={298}
                    height={298}
                  />
                  <Image
                    src={design.logo}
                    className="object-fit-contain position-absolute top-50 start-50 translate-middle p-5"
                    width={100}
                    height={100}
                  />
                </div>
              </CCol>
            ))}
          </CRow>
        </CContainer>

        {/* More Works */}
        <div className="text-center py-4">
          <h1 className="mb-4">And Many More</h1>
          <div className="d-flex overflow-x-auto py-4">
            {socmedDesignsMore.map((design, index) => (
              <div className="px-4" style={{ width: '200px' }} key={index}>
                <Image src={design} className="object-fit-contain" width={100} height={100} />
              </div>
            ))}
          </div>
          <CButton color="light" className="bg-gradient rounded-4 p-3">
            <CIcon icon={googleDriveColored} className="me-2" />
            More of My Works
          </CButton>
        </div>
      </div>
    </>
  )
}

export default HomePage
