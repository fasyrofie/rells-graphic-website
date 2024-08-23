import classNames from 'classnames'

import Image from 'next/image'
import { CCarousel, CCarouselItem, CCol, CContainer, CRow } from '@coreui/react-pro'

import { akiraExpanded } from '@/app/fonts'

import { BASE_PATH } from '@/utils/prefix'

// Illustration Images
import illustrationImage from '@/assets/images/illustration/illustration.png'
import fundamentasImage from '@/assets/images/illustration/fundamentas.png'

// YJW Images
import yjwBanner from '@/assets/images/yjw/yjw-banner.jpeg'
import yjwLogo from '@/assets/images/yjw/yjw-logo.png'

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
  return (
    <div id="illustration" className="pt-5">
      {/* Intro */}
      <CContainer lg>
        <p className={classNames(akiraExpanded.className, 'py-4 display-2 lh-1 text-center')}>
          Illustration
        </p>
      </CContainer>

      <div className="w-100 overflow-x-hidden bg-dark">
        {/* Fundamentas */}
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

        {/* Mockup */}
        <CContainer>
          <CRow className="g-0 py-5">
            <CCol xs={6} className="text-end">
              <Image
                alt="Mockup"
                src={`${BASE_PATH}/images/illustration/mockup-hoodie.jpeg`}
                className="img-fluid h-100"
                width={500}
                height={500}
              />
            </CCol>
            <CCol xs={6} className="text-start">
              <Image
                alt="Mockup"
                src={`${BASE_PATH}/images/illustration/mockup-totebag.jpeg`}
                className="img-fluid h-100"
                width={500}
                height={500}
              />
            </CCol>
            <CCol xs={12} className="align-self-end text-center">
              <Image
                alt="Mockup"
                src={`${BASE_PATH}/images/illustration/mockup-tshirt.jpeg`}
                className="object-fit-cover img-fluid"
                width={500}
                height={500}
              />
            </CCol>
          </CRow>
        </CContainer>
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
                  The YJW project tackles racial discrimination against Papuans in Indonesia, where
                  lighter skin is often favored. Through this NFT project, I aim to challenge these
                  biases and highlight the beauty and value of Papuan culture.
                </p>
              </div>
            </CCol>
            <CCol xs={12} md={6}>
              <Image alt="Young Joseph World Logo" src={yjwLogo} className="img-fluid" />
            </CCol>
          </CRow>
        </CContainer>

        {/* Showcase */}
        <CContainer lg>
          <CRow className="row-cols-2 row-cols-lg-6">
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
        <CRow className="justify-content-center">
          <CCol className="p-4 text-center" xs="auto">
            <CCarousel className="artwork" controls transition="crossfade">
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
          </CCol>
        </CRow>
      </div>
    </div>
  )
}

export default Illustration
