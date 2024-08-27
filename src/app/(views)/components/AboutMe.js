import classNames from 'classnames'

import Image from 'next/image'
import { CBadge, CCol, CContainer, CProgress, CRow } from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { adobeAfterEffects, adobeIndesign, adobePhotoshop, adobePremierePro } from '@/assets/icons'

import { akiraExpanded } from '@/app/fonts'

import profileBackground from '@/assets/images/profile-photo.png'

const AboutMe = () => {
  return (
    <div id="about-me" className="bg-dark overflow-x-hidden d-flex align-items-center">
      <CContainer lg className="py-5 my-auto">
        <CRow className="align-items-center">
          {/* Left */}
          <CCol xs={12} md={6} className="py-3">
            <div className="text-nickname">Rell&apos;s Graphic&apos;s real name is</div>
            <div className={classNames(akiraExpanded.className, 'py-4 display-2 lh-1')}>
              FARRELL
              <br />
              ASYROFIE
            </div>
            <div className="d-flex flex-wrap mb-3">
              <CBadge color="secondary" className="bg-gradient rounded-pill p-3 fw-normal me-2">
                Art Director
              </CBadge>
              <CBadge color="secondary" className="bg-gradient rounded-pill p-3 fw-normal me-2">
                Graphic Designer
              </CBadge>
              <CBadge color="secondary" className="bg-gradient rounded-pill p-3 fw-normal">
                Video Editor
              </CBadge>
            </div>
            <p className="pt-4 pb-5 mb-3">
              Graduating in 2022, I initially worked as a Yearbook Designer. For the next few
              months, I worked as a Social Media Graphic Designer. 2 years have passed, and Now I
              have opened a video editor gig.
            </p>
            <div className="row gx-4 gy-2" style={{ maxWidth: '424px' }}>
              <div className="col-6 d-flex align-items-center">
                <CIcon icon={adobePhotoshop} height={64} className="me-3" />
                <div className="w-100">
                  <CProgress color="white" className="bg-secondary" value={90} />
                </div>
              </div>
              <div className="col-6 d-flex align-items-center">
                <CIcon icon={adobePremierePro} height={64} className="me-3" />
                <div className="w-100">
                  <CProgress color="white" className="bg-secondary" value={90} />
                </div>
              </div>
              <div className="col-6 d-flex align-items-center">
                <CIcon icon={adobeAfterEffects} height={64} className="me-3" />
                <div className="w-100">
                  <CProgress color="white" className="bg-secondary" value={90} />
                </div>
              </div>
              <div className="col-6 d-flex align-items-center">
                <CIcon icon={adobeIndesign} height={64} className="me-3" />
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
  )
}

export default AboutMe
