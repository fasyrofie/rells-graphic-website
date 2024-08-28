import classNames from 'classnames'

import Image from 'next/image'
import { CCarousel, CCarouselItem, CCol, CContainer, CRow } from '@coreui/react-pro'
import SectionHeading from '@/components/SectionHeading'
import Visible from '@/components/Visible'

import { akiraExpanded } from '@/app/fonts'

import { BASE_PATH } from '@/utils/prefix'

// Illustration Images
import illustrationImage from '@/assets/images/illustration/illustration.png'
import fundamentasImage from '@/assets/images/illustration/fundamentas.png'

// YJW Images
import yjwBanner from '@/assets/images/yjw/yjw-banner.jpeg'
import yjwLogo from '@/assets/images/yjw/yjw-logo.png'
import { useState } from 'react'

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

const Illustration = () => {
  const [showArtworkText, setShowArtworkText] = useState(true)

  return (
    <div id="illustration" className="overflow-x-hidden pt-5">
      {/* Intro */}
      <CContainer lg>
        <p className={classNames(akiraExpanded.className, 'py-4 display-2 lh-1')}>
          Illus -
          <br />
          tration
        </p>
      </CContainer>

      <div className="w-100 overflow-x-hidden bg-dark">
        {/* Fundamentas */}
        <CRow className="g-0">
          <CCol lg={12}>
            <Image
              alt="Illustration"
              src={illustrationImage}
              className="object-fit-cover img-fluid"
            />
          </CCol>
          <CCol xs={12} md={6} className="align-self-center">
            <div className="p-5">
              <SectionHeading>
                Fundamentas
                <br />
                Illustration
              </SectionHeading>
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

        {/* Mockup */}
        <CRow className="g-0">
          <CCol xs={6}>
            <Image
              alt="Mockup"
              src={`${BASE_PATH}/images/illustration/mockup-tshirt.jpeg`}
              className="img-fluid w-100"
              width={583 * 1.2}
              height={546 * 1.2}
            />
          </CCol>
          <CCol xs={6}>
            <Image
              alt="Mockup"
              src={`${BASE_PATH}/images/illustration/mockup-hoodie.jpeg`}
              className="img-fluid w-100"
              width={578 * 1.2}
              height={546 * 1.2}
            />
          </CCol>
          <CCol xs={12}>
            <Image
              alt="Mockup"
              src={`${BASE_PATH}/images/illustration/mockup-totebag.jpeg`}
              className="img-fluid w-100"
              width={583 * 1.2}
              height={546 * 1.2}
            />
          </CCol>
        </CRow>

        <div className="py-5">
          <div className="p-0 py-md-5">
            <div className="p-0 py-lg-5"></div>
          </div>
        </div>
      </div>

      {/* Young Joseph World */}
      <div id="yjw" className="w-100 overflow-x-hidden bg-dark">
        {/* Banner */}
        <Image alt="Young Joseph World Banner" className="w-100 img-fluid" src={yjwBanner} />

        {/* Intro */}
        <CContainer lg>
          <CRow className="py-4 align-items-center">
            <CCol xs={12} md="auto" className="order-md-last align-self-center">
              <div className="text-center text-md-start p-4">
                <SectionHeading style={{ maxWidth: '632px' }}>
                  Young Joseph World NFT Project
                </SectionHeading>
                <p className="mb-0" style={{ maxWidth: '464px' }}>
                  The YJW project tackles racial discrimination against Papuans in Indonesia, where
                  lighter skin is often favored. Through this NFT project, I aim to challenge these
                  biases and highlight the beauty and value of Papuan culture.
                </p>
              </div>
            </CCol>
            <CCol md></CCol>
            <CCol xs={12} md="auto" className="order-md-first">
              <Image
                alt="Young Joseph World Logo"
                src={yjwLogo}
                className="img-fluid"
                height={136}
                width={400}
              />
            </CCol>
          </CRow>
        </CContainer>

        {/* Showcase */}
        <CContainer lg className="mb-5 px-5 px-md-3">
          <CRow className="row-cols-2 row-cols-lg-4 justify-content-center">
            {yjwShowcases.map((showcase, index) => (
              <CCol key={index} className="p-4 text-center">
                <Image
                  alt="Young Joseph World Showcase"
                  src={`${BASE_PATH}${showcase.src}`}
                  className="object-fit-contain img-fluid h-100"
                  // width={showcase.width}
                  // height={showcase.height}
                  width={200}
                  height={200}
                />
              </CCol>
            ))}
          </CRow>
        </CContainer>

        {/* Artwork */}
        <div className="position-relative d-flex justify-content-center text-center pt-5">
          <Visible when={showArtworkText}>
            <div className="position-absolute bottom-0 start-50 translate-middle-x z-1 w-100">
              <CContainer>
                <h1 className="text-start display-4 fw-bold mb-4">Tap for the next page</h1>
              </CContainer>
            </div>
          </Visible>

          <CCarousel
            className="artwork z-0"
            controls
            transition="crossfade"
            onClick={() => setShowArtworkText(false)}
          >
            {yjwArtworks.map((artwork, index) => (
              <CCarouselItem key={index}>
                <Image
                  alt="Young Joseph World Showcase"
                  src={`${BASE_PATH}${artwork}`}
                  className="img-fluid"
                  width={500}
                  height={500}
                />
              </CCarouselItem>
            ))}
          </CCarousel>
        </div>
      </div>
    </div>
  )
}

export default Illustration
