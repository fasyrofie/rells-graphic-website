'use client'

import classNames from 'classnames'

import Image from 'next/image'
import { CBadge, CCol, CContainer, CProgress, CRating, CRow } from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import {
  adobeAfterEffects,
  adobeIndesign,
  adobePhotoshop,
  adobePremierePro,
  discord,
} from '@/assets/icons'

import { akiraExpanded } from '@/app/fonts'

import profileBackground from '@/assets/images/profile-photo.png'

import DandZSpeaksAvatar from '@/assets/images/DandZSpeaks-avatar.png'
import capcutLogo from '@/assets/images/capcut-logo.svg'
import afterEffectsLogo from '@/assets/images/after-effects-logo.svg'

const dnzspeaksVideos = [
  '/videos/DnZSpeaks/April Short 9_Done.mp4',
  '/videos/DnZSpeaks/eminem.mp4',
  '/videos/DnZSpeaks/Jack Doherty_done.mp4',
  '/videos/DnZSpeaks/Lil Dicky_Captioned.mp4',
]

const HomePage = () => {
  return (
    <>
      <CContainer lg id="about-me" className="py-5 d-flex align-items-center">
        <CRow className="my-auto align-items-center">
          {/* Left */}
          <CCol xs={12} md={6} className="py-3">
            <div className="text-white text-nickname">Rell&apos;s Graphic&apos;s real name is</div>
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

      {/* DandZSpeaks */}
      <div id="dandz-speaks1" className="position-relative my-5 py-5">
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

      <CContainer lg id="dandz-speaks2" className="py-5">
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
    </>
  )
}

export default HomePage
