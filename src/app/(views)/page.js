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

const HomePage = () => {
  return (
    <>
      <CContainer lg className="px-4">
        <div id="about-me" className="row gx-5">
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
    </>
  )
}

export default HomePage
