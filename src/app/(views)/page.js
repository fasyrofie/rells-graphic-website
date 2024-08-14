'use client'

import classNames from 'classnames'

import { CBadge, CContainer, CProgress } from '@coreui/react-pro'
import Image from 'next/image'

import { akiraExpanded } from '@/app/fonts'

import profileBackground from '@/assets/images/profile-photo.png'
import adobePhotoshop from '@/assets/images/adobe-photoshop.svg'
import adobeAfterEffects from '@/assets/images/adobe-after-effects.svg'
import adobePremierePro from '@/assets/images/adobe-premiere-pro.svg'
import adobeIndesign from '@/assets/images/adobe-indesign.svg'

import DandZSpeaksAvatar from '@/assets/images/DandZSpeaks-avatar.png'
import capcutLogo from '@/assets/images/capcut-logo.svg'
import afterEffectsLogo from '@/assets/images/after-effects-logo.svg'

const HomePage = () => {
  return (
    <>
      <CContainer lg className="py-5">
        <div id="about-me" className="row">
          {/* Left */}
          <div className="col-12 col-md-6 align-self-end py-3">
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
                <Image alt="Adobe Photoshop" src={adobePhotoshop} className="img-fluid me-3" />
                <div className="w-100">
                  <CProgress color="white" className="bg-secondary" value={90} />
                </div>
              </div>
              <div className="col-6 d-flex align-items-center">
                <Image alt="Adobe Premiere Pro" src={adobePremierePro} className="img-fluid me-3" />
                <div className="w-100">
                  <CProgress color="white" className="bg-secondary" value={90} />
                </div>
              </div>
              <div className="col-6 d-flex align-items-center">
                <Image
                  alt="Adobe After Effects"
                  src={adobeAfterEffects}
                  className="img-fluid me-3"
                />
                <div className="w-100">
                  <CProgress color="white" className="bg-secondary" value={90} />
                </div>
              </div>
              <div className="col-6 d-flex align-items-center">
                <Image alt="Adobe Indesign" src={adobeIndesign} className="img-fluid me-3" />
                <div className="w-100">
                  <CProgress color="white" className="bg-secondary" value={90} />
                </div>
              </div>
            </div>
          </div>
          {/* Rigth */}
          <div className="col-12 col-md-6 profile-image-container">
            <Image alt="Profile Photo" src={profileBackground} className="img-fluid" />
          </div>
        </div>
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

      <div id="dandz-speaks2" className="py-5">
        <div className="ratio ratio-16x9">
          <video autoPlay className="object-fit-cover" controls={false} loop playsInline muted>
            <source src="/videos/DandZSpeaks-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  )
}

export default HomePage
